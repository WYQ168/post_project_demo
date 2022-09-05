import request from '@/utils/request'
import {param} from "../utils";

//角色管理
export const getRoleList = () => {
  return request({
    url: '/system/menu/getRoleList',
    method: 'get'
  })
}

//获取角色权限
/*export const getRoleCheckedMenuList = (params) => {
  return request({
    url: '/system/menu/getRoleCheckedMenuList',
    method: 'get',
    params: params
  })
}*/
//员工管理
export const addRoleData=(params)=>{
  return request({
    url:"/system/v1/role/addRoleData",
    method:'post',
    data:params
  })
}

//修改权限
export const editAuthority = (params) => {
  return request({
    url: '/system/menu/editAuthority',
    method: 'post',
    data: params
  })
}


// 获取员工列表
export const getUserDeptList = (params) => {
  return request({
    url: '/system/v1/deptUser/getUserDeptList',
    method: 'get',
    params: params
  })
}
//删除
export const deleteUserDeptData = (params) => {
  return request({
    url: '/system/v1/deptUser/deleteUserDeptData',
    method: 'post',
    params: params
  })
}


//添加
export const addUserForDept = (params) => {
  return request({
    url: '/system/v1/deptUser/addUserForDept',
    method: 'post',
    data: params
  })
}
//修改
export const editUserForDept = (params) => {
  return request({
    url: '/system/v1/deptUser/editUserDeptData',
    method: 'post',
    data: params
  })
}
//获取账单流水

export const getPriceWaterList = (params) => {
  return request({
    url: '/system/orders/getPriceWaterList',
    method: 'get',
    params: params
  })
}
