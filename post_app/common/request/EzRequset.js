import ezTimeUtil from "../../utils/ezTimeUtil";
// import GConfig from "../../config/GConfig";
import axios from "axios";
export const ParamType = {
    TYPE_OBJ: 'OBJ',
    TYPE_JSON: 'JSON',
    TYPE_FROM: 'FORM',
    TYPE_DEF: 'DEF',
    TYPE_OTHER: 'OTHER'
}

const TokenErr = ['4011', '4013']

export async function EzRequest(
    {   url,
        method = 'POST',
        isJson = false,
        data,
        headers = {},
        paramType,
        cfg = {
            showLoad: false,
            loadText: '加载中...',
            delayed: 100
        }
    }) {

    method = method.toUpperCase()

	//拼接完整请求地址
    let header =  {}
    if(headers){
        for(let key of Object.keys(headers)){
            header[key] = headers[key]
        }
    }

    data = data || {}

    cfg = cfg || {};

    if(cfg.showLoad !== false && cfg.showLoad !== true){
        cfg.showLoad = false
    }
    if(!cfg.delayed){
        cfg.delayed = 100
    }
    if(!cfg.loadText){
        cfg.loadText = '加载中...'
    }

    console.log(cfg.showLoad)
	// 此处更换token
    if(uni.getStorageSync('userInfo')){
        header['Token'] = uni.getStorageSync('userInfo').token
    }


    if(!paramType){
        if(isJson){
            paramType = ParamType.TYPE_JSON
        }else{
            paramType = ParamType.TYPE_DEF
        }
    }

    paramType = paramType.toUpperCase()
    // 请求类型
    if (paramType === ParamType.TYPE_JSON) {
        header['content-type'] = "application/json"
    } else if (paramType === ParamType.TYPE_OBJ) {
        header['content-type']= "application/x-www-form-urlencoded";
    }else if (paramType === ParamType.TYPE_FROM) {
        header['content-type']= "multipart/form-data;"
    }


    //用户交互:加载圈
    if (cfg.showLoad) {
        uni.showLoading({
            title: cfg.loadText,
            mask: true
        });
    }

    //网络请求_
    let err = true
    let res= null
	console.log(cfg.isTest)
    if(cfg.isTest == true){
       err = false
       res = {
           statusCode: 200,
           data: {
               code: 0,
               data: ''
           }
       }
    }else {
        // 发起网络请求
		
        try {
            if(paramType === ParamType.TYPE_FROM){
                // 处理formdata
                var formData = new FormData();
                for (const key in data) {
                    console.log(key)
                    formData.append(key, data[key]);
                }

                let x =  await axios({
                    url: url,
                    method: method,
                    data: formData,
                    body: formData,
                    headers: header
                })
                res = x
                err = false
                res.statusCode = res.status
                console.log(res)
            }else {
                var [_err, _res] = await uni.request({
                    url: url,
                    method: method,
                    header: header,
                    data: data
                });
                err = _err
                res = _res
            }
        }catch (e) {
            console.log("接口调用失败==========")
            console.error(e)
        }
    }
    if (cfg.showLoad) {
        if(cfg.delayed){
            await ezTimeUtil.sleep(cfg.delayed)
        }
        uni.hideLoading();
    }
	
    if(err){
        return  {code: -1,data: null,message: '请求错误'}
    }
    if(res && res.statusCode != 200){
        return  {code: -1,data: null,message: res.msg}
    }
   return res.data
}

export function ApiR(
    res,
    {
        showErr=true,
        errText,
        showSuc=false,
        sucText,
        showCodes = '0,200'
    }) {
    let [_r,_d] = ApiResult(res,{showErr, errText, showSuc, sucText, showCodes})
    if(!_d){
        _d = { code: -1,data: null}
    }
    _d.r = _r
    return _d
}

export function ApiResult (res, resCfg){
    let reuslt
    let data = {};

    resCfg = resCfg || {showErr: true}
    if(resCfg.showErr != false){
        resCfg.showErr = true
    }
    // todo 可以自定义 成功code
    if(resCfg.showCodes == null || resCfg.showCodes == undefined || resCfg.showCodes + '' == ''){
        resCfg.showCodes = '1,200'
    }

	if(res.code == 0 || res.code == 200){
		reuslt = true
	}else {
		reuslt = false
	}
		
    data = res

    // todo 失败提示
    let _detErrText = res.msg
    if(!reuslt && resCfg.showErr){
        uni.showToast({
            icon: 'none',
            title: resCfg.errText || _detErrText,
            duration: 1200
        });
    }

    // todo 成功提示
    let _sucText = resCfg.sucText 
    if(reuslt && resCfg.showSuc){
        uni.showToast({
            title: _sucText,
            duration: 1200
        });
    }
    return [reuslt, data]
}


