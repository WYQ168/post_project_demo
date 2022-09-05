import request from '@/utils/request'

// 登录方法
export function login(username, password, uuid, userType, loginType,platform) {
  const data = {
    username,
    password,
   // uuid :"123456",
    platform:1,
    userType: "manage",//系统用户
    // userType: "mobile",//个人用户
    loginType: "password"
   // code:"123456"
  }
  return request({
    url: '/auth/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export const register=(params)=>{
  return request({
    url: '/auth/loginByUserPhone',
    method: 'post',
    data: params,
    headers: {
      isToken: false
    },
  })
}
// 找回密码

export const modifyPassWrod=(params)=>{
  return request({
    url: '/auth/modifyPassWrod',
    method: 'put',
    data: params,
    headers: {
      isToken: false
    },
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/sysUser/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getSmsCode(params) {
  return request({
    url: '/im/yunxin/getSmsCode',
    headers: {
      isToken: false
    },
    data: params,
    method: 'post',
    timeout: 20000
  })
}

export function getCodeText() {
  return request({
    url: '/auth/getCode',
    headers:{
      isToken: false
    },
    method: 'GET',
    timeout: 20000
  })
}

export function getTokenStr(){
  return request({
    url: '/auth/getToken',
    method: 'get'
  })
}
