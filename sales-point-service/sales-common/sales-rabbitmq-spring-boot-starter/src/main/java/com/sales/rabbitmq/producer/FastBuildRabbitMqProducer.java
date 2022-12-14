package com.sales.rabbitmq.producer;

import com.rabbitmq.client.Channel;
import com.sales.rabbitmq.cache.RetryCache;
import com.sales.rabbitmq.common.DetailResponse;
import com.sales.rabbitmq.common.MqConstants;
import com.sales.rabbitmq.enums.ProducerCallBackEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.connection.Connection;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

/**
 * @desc: TODO
 * @author wuyingqiang
 * @date 2022/8/2 12:55
 */
@Slf4j
public class FastBuildRabbitMqProducer {

    private ConnectionFactory connectionFactory;

    public FastBuildRabbitMqProducer(ConnectionFactory connectionFactory){
        this.connectionFactory = connectionFactory;
    }


    public MessageProducer buildDirectMessageSender(final String exchange, final String routingKey, final String queue) throws IOException {
        return buildMessageSender(exchange, routingKey, queue, MqConstants.DIRECT_TYPE);
    }

    public MessageProducer buildTopicMessageSender(final String exchange, final String routingKey) throws IOException {
        return buildMessageSender(exchange, routingKey, null, MqConstants.TOPIC_TYPE);
    }

    /**
     * 发送消息
     * @param exchange    消息交换机
     * @param routingKey  消息路由key
     * @param queue       消息队列
     * @param type        消息类型
     * return
     */
    private MessageProducer buildMessageSender(final String exchange, final String routingKey, final String queue, final String type)throws IOException {
        Connection connection = connectionFactory.createConnection();
        //1
        if (type.equals(MqConstants.DIRECT_TYPE)) {
            buildQueue(exchange, routingKey, queue, connection, MqConstants.DIRECT_TYPE);
        } else if (type.equals(MqConstants.TOPIC_TYPE)) {
            buildTopic(exchange, connection);
        }

        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);

        rabbitTemplate.setMandatory(true);
        rabbitTemplate.setExchange(exchange);
        rabbitTemplate.setRoutingKey(routingKey);
        rabbitTemplate.setMessageConverter(new Jackson2JsonMessageConverter());
        RetryCache retryCache = new RetryCache();

        rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
            if (!ack) {
                log.info("send message failed: " + cause + correlationData.toString());
            } else {
                retryCache.del(Long.valueOf(correlationData.getId()));
            }
        });

        rabbitTemplate.setReturnCallback((message, replyCode, replyText, tmpExchange, tmpRoutingKey) -> {
            try {
                Thread.sleep(MqConstants.ONE_SECOND);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            log.info("send message failed: " + replyCode + " " + replyText);
            rabbitTemplate.send(message);
        });

        return new MessageProducer() {
            {retryCache.setSender(this);}

            @Override
            public DetailResponse send(Object message) {
                long id = retryCache.generateId();
                long time = System.currentTimeMillis();

                return send(new MessageWithTime(id, time, message));
            }

            @Override
            public DetailResponse send(MessageWithTime messageWithTime) {
                try {
                    retryCache.add(messageWithTime);
                    rabbitTemplate.correlationConvertAndSend(messageWithTime.getMessage(),
                            new CorrelationData(String.valueOf(messageWithTime.getId())));
                } catch (Exception e) {
                    return new DetailResponse(false, ProducerCallBackEnum.FAIL.getCode(),e.getMessage());
                }
                return new DetailResponse(true, ProducerCallBackEnum.SUCCESS.getCode(), ProducerCallBackEnum.SUCCESS.getDesc());
            }
        };
    }




    private void buildQueue(String exchange, String routingKey,
                            final String queue, Connection connection, String type) throws IOException {
        Channel channel = connection.createChannel(false);

        if (type.equals(MqConstants.DIRECT_TYPE)) {
            channel.exchangeDeclare(exchange, MqConstants.DIRECT_TYPE, true, false, null);
        } else if (type.equals(MqConstants.TOPIC_TYPE)) {
            channel.exchangeDeclare(exchange, MqConstants.TOPIC_TYPE, true, false, null);
        }

        channel.queueDeclare(queue, true, false, false, null);
        channel.queueBind(queue, exchange, routingKey);
        try {
            channel.close();
        } catch (TimeoutException e) {
            log.info("close channel time out ", e);
        }
    }

    private void buildTopic(String exchange, Connection connection) throws IOException {
        Channel channel = connection.createChannel(false);
        channel.exchangeDeclare(exchange, MqConstants.TOPIC_TYPE, true, false, null);
    }



}
