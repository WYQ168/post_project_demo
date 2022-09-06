import request from '@/utils/request'


//扣费
export const getBuckles = (params) => {
  return request({
    url: '/system/buckles/list',
    method: 'post',
    params:params
  })
}
