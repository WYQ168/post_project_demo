
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/myIndex","pages/index/groupIndex","pages/index/inviteIndex","subPages/home/poins/poins","subPages/home/gift/gift","subPages/home/MyMerchant/MyMerchant","subPages/home/serve/serve","subPages/home/Negotiable_securities/Negotiable_securities","subPages/home/myMachine/myMachine","subPages/home/myFriends/myFriends","subPages/home/goodShop/goodShop","subPages/home/mall/mall","subPages/home/ranking/ranking","subPages/Datas/grades/grades","subPages/Datas/income/income","subPages/Datas/mybill/mybill","subPages/Datas/invoice/invoice","subPages/Datas/historical_data/historical_data","subPages/myIndex/complaint/complaint","subPages/myIndex/mywallet/mywallet","subPages/myIndex/userInfo/userInfo","subPages/myIndex/pointsMony/pointsMony","subPages/myIndex/MPOSmony/MPOSmony","subPages/myIndex/exchange/exchange","subPages/Login_regist/login_1/login_1","subPages/Login_regist/forgetPsssword/forgetPsssword"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"rgba(70, 129, 244, 1)","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/home.png","selectedIconPath":"static/homeHandle.png","text":"首页"},{"pagePath":"pages/index/groupIndex","iconPath":"static/group.png","selectedIconPath":"static/groupHandle.png","text":"数据"},{"pagePath":"pages/index/inviteIndex","iconPath":"static/zp.png","selectedIconPath":"static/zpHandle.png","text":"社区"},{"pagePath":"pages/index/myIndex","iconPath":"static/user.png","selectedIconPath":"static/userHandle.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"pos","compilerVersion":"3.4.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","titleNView":false}},{"path":"/pages/index/myIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":false}},{"path":"/pages/index/groupIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"数据","titleNView":false}},{"path":"/pages/index/inviteIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"社区","titleNView":false}},{"path":"/subPages/home/poins/poins","meta":{},"window":{"navigationBarTitleText":"积分兑换","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#1C53DA","navigationBarTextStyle":"white"}},{"path":"/subPages/home/gift/gift","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"礼包活动","navigationBarBackgroundColor":"#4681F4","navigationBarTextStyle":"white"}},{"path":"/subPages/home/MyMerchant/MyMerchant","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/subPages/home/serve/serve","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/home/Negotiable_securities/Negotiable_securities","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/subPages/home/myMachine/myMachine","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/subPages/home/myFriends/myFriends","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/subPages/home/goodShop/goodShop","meta":{},"window":{"navigationBarTitleText":"创建入网账户","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#1C53DA","navigationBarTextStyle":"white"}},{"path":"/subPages/home/mall/mall","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/home/ranking/ranking","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/Datas/grades/grades","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/subPages/Datas/income/income","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/Datas/mybill/mybill","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/Datas/invoice/invoice","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/Datas/historical_data/historical_data","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subPages/myIndex/complaint/complaint","meta":{},"window":{"navigationBarTitleText":"投诉工单","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#1C53DA","navigationBarTextStyle":"white"}},{"path":"/subPages/myIndex/mywallet/mywallet","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/subPages/myIndex/userInfo/userInfo","meta":{},"window":{"navigationBarTitleText":"个人信息","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#3A79FF","navigationBarTextStyle":"white"}},{"path":"/subPages/myIndex/pointsMony/pointsMony","meta":{},"window":{"navigationBarTitleText":"现金+积分","enablePullDownRefresh":false}},{"path":"/subPages/myIndex/MPOSmony/MPOSmony","meta":{},"window":{"navigationBarTitleText":"现金+MPOS","enablePullDownRefresh":false}},{"path":"/subPages/myIndex/exchange/exchange","meta":{},"window":{"navigationBarTitleText":"兑换记录","enablePullDownRefresh":false,"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#1C53DA","titleNView":true}},{"path":"/subPages/Login_regist/login_1/login_1","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#1C53DA","titleNView":false}},{"path":"/subPages/Login_regist/forgetPsssword/forgetPsssword","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});