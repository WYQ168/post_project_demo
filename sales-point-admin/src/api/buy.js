import request from '@/utils/request'

// 获取套餐
export function getBuyData(params) {
  return request({
    url: '/system/meal_info/getMealInfoList',
    method: 'get',
    params:params
  })
}

//更新套餐
export const editBuyData = (params) => {
  return request({
    url: '/system/meal_info/' + params.id,
    method: 'put',
    data:params
  })
}
//删除套餐
export const deleteBuyData = (params) => {
  return request({
    url: '/system/meal_info/' + params.id,
    method: 'delete',
    data:params
  })
}
//添加套餐

export const addBuyData = (params) => {
  return request({
    url: '/system/meal_info',
    method: 'post',
    data: params
  })
}

//
