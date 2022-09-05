import {EzRequest, ApiR} from "../../common/request/EzRequset";
import configUrl from "../../config/requestConfig";

export default {
	// async getBanner(param) {
	//     var res = await EzRequest({method: 'POST',url: configUrl.serverUrl + '/getBanner', data: param,isJson:false})
	//     return ApiR(res,{})
	// },
	//测试接口
	async testApi(param){
		var res = await EzRequest({method:'GET',url:'http://127.0.0.1:8082/testApi/test',data:param,isJson:false})
		return ApiR(res,{})
	}
}