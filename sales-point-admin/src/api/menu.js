import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/system/menu/getRouters',
    method: 'get'
  })
}

export const getRouterData = () => {
  return request({
    url: '/system/sysUser/getRouterData',
    method: 'get'
  })
}
//菜单列表
export const getMenuList = () => {
  return request({
    url: '/system/menu/getMenuDataList',
    method: 'get'
  })
}
//编辑
export const editMenuData = (params) => {
  return request({
    url: '/system/menu/editMenuData',
    method: 'post',
    data: params
  })
}
//添加
export const addMenuData = (params) => {
  return request({
    url: '/system/menu/addMenuData',
    method: 'post',
    data: params
  })
}
//获取菜单权限列表
export const getAuthMenuList = () =>{
  return request({
    url: '/system/sysUser/getSysUserAuthList',
    method: 'get'
  })
}
