<template>
	<!-- 设置 -->
	<view>
		<view class="line" v-for="(item) in lines">
			<text class="text">{{item.Text}}</text>
			<img src="/static/right.png" mode="" class="right" @click="topage(item.path)"/>
		</view>
		<view class="line clean" >
			<text class="text">清理缓存</text>
			<img src="/static/right.png" mode="" class="right"/>
		</view>
		<view class="exit">退 出 登 录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lines:[
					{
						Text:'个人信息',
						path:''
					},
					{
						Text:'修改登录密码',
						path:'/subPages/myIndex/Setting/rechangePassword'
					},
					{
						Text:'设置支付密码',
						path:'/subPages/myIndex/Setting/rePaypassword'
					},
					{
						Text:'我的地址',
						path:''
					}
				]
			}
		},
		methods: {
			topage(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: rgba(240, 240, 240, 1);
	}
.line{
	width: 100%;
	height: 88rpx;
	padding: 0 45rpx 0 60rpx;
	margin-bottom: 1px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
}
.text{
	font-size: 28rpx;
	color: rgba(102, 102, 102, 1);
	
}
.right{
	width: 50rpx;
	height: 50rpx;
}
.line:nth-of-type(1){
	margin-top: 36rpx;
}
.clean{
	margin-top: 34rpx;
}
.exit{
	height: 106rpx;
	line-height: 106rpx;
	text-align: center;
	background-color: #fff;
	margin-top: 36rpx;
	color: rgba(255, 140, 0, 1);
}
</style>
