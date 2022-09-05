import request from '@/utils/request'


//获取部门
export const getContractList = (params) => {
  return request({
    url: '/system/contract',
    method: 'get',
    params:params
  })
}
//wenjian
export const getContractFileData = (params) => {
  return request({
    url: '/system/contract/getContractFileData',
    method: 'get',
    params:params
  })
}

//获取模板管理
export const getFileDataList = (params) => {
  return request({
    url: '/system/contract/getFileDataList',
    method: 'get',
    params:params
  })
}
