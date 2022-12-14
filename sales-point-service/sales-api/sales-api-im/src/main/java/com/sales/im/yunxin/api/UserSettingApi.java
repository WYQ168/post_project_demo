package com.sales.im.yunxin.api;


import com.sales.im.yunxin.bean.Donnop;
import com.sales.im.yunxin.bean.Mute;
import com.sales.im.yunxin.bean.YunXinConfig;
import com.sales.im.yunxin.support.NIMPost;
import com.sales.im.yunxin.support.Reflect;
import com.sales.im.yunxin.support.UrlConst;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * @desc: 用户设置
 * @author wuyingqiang
 * @date 2022/7/4 17:49
 */
public class UserSettingApi {
    private static Logger logger = LoggerFactory.getLogger(UserSettingApi.class);
    /**
     * 设置桌面端在线时，移动端是否需要推送
     * @return
     * @throws IOException
     */
    public static String setDonnop(Donnop donnop, YunXinConfig yunXinConfig) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        List<NameValuePair> params = Reflect.reflectTest(donnop);
        //UTF-8编码,解决中文问题
        HttpEntity entity = new UrlEncodedFormEntity(params, "UTF-8");
        String res = NIMPost.postNIMServer(UrlConst.SET_DONNOP_URL, entity, yunXinConfig.getAppKey(), yunXinConfig.getAppSecret());
        logger.info("setDonnop httpRes: {}", res);
        return res;
    }

    /**
     * 账号全局禁言
     * @return
     * @throws IOException
     */
    public static String mute(Mute mute, YunXinConfig yunXinConfig) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        List<NameValuePair> params = Reflect.reflectTest(mute);
        //UTF-8编码,解决中文问题
        HttpEntity entity = new UrlEncodedFormEntity(params, "UTF-8");
        String res = NIMPost.postNIMServer(UrlConst.MUTE_URL, entity, yunXinConfig.getAppKey(), yunXinConfig.getAppSecret());
        logger.info("mute httpRes: {}", res);
        return res;
    }

    /**
     * 账号全局禁用音视频
     * @return
     * @throws IOException
     */
    public static String mute_av(Mute mute, YunXinConfig yunXinConfig) throws IOException, NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        List<NameValuePair> params = Reflect.reflectTest(mute);
        //UTF-8编码,解决中文问题
        HttpEntity entity = new UrlEncodedFormEntity(params, "UTF-8");
        String res = NIMPost.postNIMServer(UrlConst.MUTE_AV_URL, entity, yunXinConfig.getAppKey(), yunXinConfig.getAppSecret());
        logger.info("mute_av httpRes: {}", res);
        return res;
    }

}
