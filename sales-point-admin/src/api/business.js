import request from '@/utils/request'

export const getBussbiss=(params)=>{
  return request({
    url: '/system/v1/company/getCompanyById',
    method: 'post',
    params: {userId:params}
  })
}
