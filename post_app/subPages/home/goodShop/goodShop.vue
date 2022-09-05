<template>
	<view>
		<view class="box">
			<view class="box_text">
				<text class="title">100万用户的选择</text>
				<view class="down">
					<text class="partner">选择喔刷 伙伴</text>
					<text class="dream">成就平凡人的梦想</text>
				</view>
			</view>
		</view>
		<view class="Merchant">
			待入网商户
		</view>
		<view class="phone">
			<view class="phonenum">手机号</view>
			<input type="number" name="" id="" placeholder="请输入登入手机号">
			<view class="null"></view>
		</view>	
		<view class="phone">
			<view class="phonenum">图形验证码</view>
			<input type="text" name="" id="" placeholder="请输入图形验证码">
			<view class="button">HU77</view>
		</view>
		<view class="phone">
			<view class="phonenum">短信验证码</view>
			<input type="text" name="" id="" placeholder="请输入短信验证码">
			<view class="button getcode">获取验证码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.box{
	width: 696rpx;
	height: 296rpx;	
	margin: 25rpx auto;
	background-color: #1C53DA;
	padding-top: 108rpx;
	background-image: url("@/static/home/img4.png");
	background-size: 100% 100%;
}
.box_text{
	width: 100%;
	text-align: center;
}
.title{
	font-size: 44rpx;
	color: #fff;
}
.down{
	width: 696rpx;
	color: #fff;
	font-size: 26rpx;
	margin-top: 34rpx;
}
.partner{
	display: inline-block;
	width: 50%;
	text-align: right;
	padding-right: 44rpx;
	border-right: #fff 1px solid;
}
.dream{
	display: inline-block;
	width: 50%;
	text-align: left;
	padding-left: 36rpx;
}
.Merchant{
	margin-top: 40rpx;
	width: 100%;
	padding: 0 0 10rpx 30rpx;
	font-size: 26rpx;
	color: #696969;
}
.phone{
	display: flex;
	justify-content: space-between;
	padding: 28rpx;
	border-bottom: 1rpx solid #696969;
}
.phonenum{
	width: 148rpx;
	white-space:nowrap;
	color: #000;
	font-weight: 500;
}
.null{
	width: 160rpx;
}
.button{
	width: 160rpx;
	height: 52rpx;
	color: #FF4102;
	border: #FF4102 1px solid;
	border-radius: 10rpx;
	text-align: center;
	line-height: 52rpx;
}
input{
	width: 260rpx;
}
.getcode{
	font-size: 24rpx;
	line-height: 52rpx;
}
</style>
