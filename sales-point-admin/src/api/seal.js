import request from '@/utils/request'



//印章列表
export const getSealList = (params) => {
  return request({
    url: '/system/sealInfo/getSealFileList',
    method: 'get',
    params:params
  })
}
//编辑
export const editSealList = (params) => {
  return request({
    url: '/system/sealInfo/editSealFile',
    method: 'post',
    data:params
  })
}
//添加印章
export const uploadSealList = (params) => {
  return request({
    url: '​/system/sealInfo​/uploadSealFile',
    method: 'post',
    data:params
  })
}
//删除印章
export  const deleteSealFile =(params)=>{
  return request ({
    url:'/system/sealInfo/deleteSealFile',
    method:'post',
    params:params
  })
}

