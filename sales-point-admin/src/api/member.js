import request from '@/utils/request'


//扣费
export const getBuckles = (params) => {
  return request({
    url: '/system/member/list',
    method: 'post',
    params:params
  })
}
