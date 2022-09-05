import request from '@/utils/request'


//获取部门
export const getDeptList = () => {
  return request({
    url: '/system/v1/dept',
    method: 'get'
  })
}
//新增部门
export const addDeptList = (params) => {
  return request({
    url: '/system/v1/dept',
    method: 'post',
    data:params
  })
}
//删除部门
export const deleteDeptList = (params) => {
  return request({
    url: '/system/v1/dept',
    method: 'delete',
    data:params
  })
}
//更新部门
export const editDeptList = (params) => {
  return request({
    url: '/system/v1/dept',
    method: 'put',
    data:params
  })
}
