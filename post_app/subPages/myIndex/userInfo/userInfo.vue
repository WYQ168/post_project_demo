<template>
	<view>
		<view class="box">
			<view class="card">
				<image src="" mode="" class="userImg"></image>
				<view class="userName">
					<text class="name">朱吉利</text>
					<text class="is">已实名</text>
				</view>
				<view class="ewm">
					<image src="" mode=""></image>
				</view>
				<view class="authentication">
					<view class="left">
						<view class="authentication_img">
							<image></image>
						</view>
						<view class="text">企业认证</view>
					</view>
					<view class="right">未认证</view>
				</view>
			</view>

		</view>
		<view class="box_down">
			<view class="phone">
				<view class="left_1">
					<image src="" mode=""></image>
					<text class="text_0">手机号</text>
				</view>
				<text class="num_0">199****4672</text>
			</view>	
			<view class="recommend">
				<view class="left_1">
					<image src="" mode=""></image>
					<text class="text_0">推荐码</text>
				</view>
				<text class="num_0">C146789</text>
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

		}
	}
</script>

<style scoped>
	.box {
		position: relative;
		width: 100%;
		height: 500rpx;
		background-color: #3A79FF;
	}

	.card {
		position: absolute;
		left: 30rpx;
		bottom: -80rpx;
		margin: 0 auto;
		width: 690rpx;
		height: 355rpx;
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow: 1px 2rpx 5px #ccc;
	}

	.userImg {
		width: 168rpx;
		height: 168rpx;
		border-radius: 50%;
		background-color: aqua;
		margin-left: 64rpx;
		margin-top: -53rpx;
	}

	.userName {
		margin-left: 306rpx;
		margin-top: -80rpx;
		display: flex;
		flex-direction: column;
	}

	.name {
		font-size: 32rpx;
		color: black;
	}

	.is {
		color: #999999;
		font-size: 28rpx;
	}

	.ewm {
		width: 52rpx;
		height: 52rpx;
		background-color: aqua;
		margin-left: 576rpx;
		margin-top: -50rpx;
	}

	.ewm image {
		width: 100%;
		height: 100%;

	}

	.authentication {
		position: absolute;
		bottom: 38rpx;
		width: 100%;
		height: 105rpx;
		background-color: #FFF1E1;
		padding: 0 20rpx 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		display: flex;
		align-items: center;
	}

	.authentication_img {
		width: 52rpx;
		height: 52rpx;
		border-radius: 50%;
		background-color: #3A79FF;
		margin-right: 38rpx;
	}

	.authentication_img image {
		width: 100%;
		height: 100%;
	}

	.text {
		color: #FF6600;
		font-size: 30rpx;
	}

	.right {
		width: 133rpx;
		height: 42rpx;
		text-align: center;
		line-height: 42rpx;
		font-size: 20rpx;
		color: #fff;
		background-color: #FF6600;
		border-radius: 10rpx;
	}
	.box_down{
		margin-top: 150rpx;
	}
	.phone,
	.recommend {
		display: flex;
		justify-content: space-between;
		width: 660rpx;
		margin: 0 auto;
		padding: 30rpx 5rpx;
		border-bottom: #F1EFEF 1px solid;
		
	}

	.left_1 image {
		width: 30rpx;
		height: 30rpx;
		background-color: #3A79FF;
		margin-right: 42rpx;
	}
	.text_0{
		color: #000;
		font-size: 32rpx;
	}
	.num_0{
		font-size: 30rpx;
		color: #999999;
	}
</style>
