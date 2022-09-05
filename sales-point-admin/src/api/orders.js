import request from '@/utils/request'


//获取订单列表
export const getOrderList = (params) => {
  return request({
    url: '/system/orders/getOrderList',
    method: "get",
    params: params
  })
}

//创建订单
export const createOrder = (params) => {
  return request({
    url: '/system/orders/createOrder',
    method: "post",
    data: params
  })
}
//取消订单
export const cancelOrder = (params) => {
  return request({
    url: '/system/orders/cancelOrder',
    method: "post",
    params: params
  })
}

//去支付
export const goAliPay = (params) => {
  return request({
    url: '/system/orders/goAliPay',
    method: 'post',
    params: params
  })
}
