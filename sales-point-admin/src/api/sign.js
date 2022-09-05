import request from '@/utils/request'

//文件列表
export const getSignList = (params) => {
  return request({
    url: '/system/contract/getFileDataList',
    method: 'get',
    params:params
  })
}

//创建合同
export const createContract = (params) => {
  return request({
    url: '/system/fxqApi/createContract',
    method: 'post',
    data:params
  })
}
