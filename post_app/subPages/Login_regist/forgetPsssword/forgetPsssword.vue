<template>
	<!-- 忘记密码 -->
	<view>
		<view class="nav">
			<view class="back">
				<image src="/static/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="titleText">
				忘记密码
			</view>
			<view class="nav_riht">
			</view>
		</view>
		<view class="findway findway1" @click="fromcode">
			<view class="phone">
				<image src="" mode=""></image>
			</view>
			<view class="text">
				<text class="useing">手机号使用中</text>
				<text class="unused">验证码找回</text>
			</view>
		</view>
		<view class="findway findway2" @click="fromid">
			<view class="phone">
				<image src="" mode=""></image>
			</view>
			<view class="text">
				<text class="useing">手机号不使用</text>
				<text class="unused">身份验证找回</text>
			</view>
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
			fromcode(){
				uni.navigateTo({
					url:'../codeRetrieve/codeRetrieve'
				})
			},
			fromid(){
				uni.navigateTo({
					url:'../idRetrieve/idRetrieve'
				})
			}
		}
	}
</script>

<style>
	.nav{
		width: 100%;
		height: 190rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 30rpx;
		padding-bottom: 22rpx;
		background-image: url("@/static/home/bg_2.png");
		background-size: 100% 100%;
		background-color: #144BD5;
	}
	.back image{
		width: 21rpx;
		height: 35rpx;
		/* background-color: #FF4102; */
	}
	.titleText{
		font-size: 36rpx;
		color: #fff;
	}
	.findway{
		display: flex;
		justify-content: space-between;
		width: 690rpx;
		height: 222rpx;
		border-radius: 30rpx;
		margin: 0 auto;
		margin-top: 34rpx;
		padding: 67rpx 286rpx 78rpx 118rpx;
	}
	.findway1{
		background-color: #4194F6;
	}
	.findway2{
		background-color: #B3B3B3;
	}
	.phone image{
		width: 61rpx;
		height: 77rpx;
		background-color: #fff;
	}
	.text{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.useing{
		font-size: 30rpx;
		color: #fff;
	}
	.unused{
		font-size: 24rpx;
		color: #fff;
	}
</style>
