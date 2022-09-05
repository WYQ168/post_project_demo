<template>
	<view>
		<view class="header">
			<image src="" mode=""></image>
		</view>
		<view class="phone">
			<image src="" mode=""></image>
			<input type="text" name="" id="" placeholder="199****3920" placeholder-class="plph">
		</view>
		<view class="getcode">
			<view class="code">
				<image src="" mode=""></image>
				<input type="text" name="" id="" placeholder="请输入验证码" placeholder-class="plph">
			</view>
			<button class="button">获取验证码</button>
		</view>
		<view class="phone">
			<image src="" mode=""></image>
			<input type="text" name="" id="" placeholder="身份证后六位" placeholder-class="plph">
		</view>
		<button class="next">下  一  步</button>
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
page {
		background-color: #F0F0F0;
	}
	.header{
		width: 690rpx;
		height: 206rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		border: 1px solid #ccc;
	}
	.header image{
		width: 336rpx;
		height: 162rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}
	.phone {
		width: 687rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-top: 35rpx;
		padding-left: 48rpx;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
	}

	.phone image {
		width: 28rpx;
		height: 32rpx;
		margin-right: 34rpx;
		background-color: aqua;
	}

	.plph {
		font-size: 30rpx;
		color: #CCCCCC;
	}
	.getcode{
		width: 687rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 35rpx;
	}
	
	.code {
		width: 432rpx;
		height: 88rpx;
		padding-left: 48rpx;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
	}
	
	.code image {
		width: 28rpx;
		height: 32rpx;
		margin-right: 34rpx;
		background-color: aqua;
	}
	
	.code input {
		width: 290rpx;
	}
	
	.plph {
		font-size: 30rpx;
		color: #CCCCCC;
	}
	.button{
		width: 229rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		background-color: #3F77EA;
		color: #fff;
		border-radius: 30rpx;
		font-size: 30rpx;
	}
	.next{
		width: 687rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-top: 48rpx;
		background-color: rgb(176,196,238);
		color: #fff;
		border-radius: 30rpx;
		font-size: 20rpx;
		text-align: center;
		line-height: 88rpx;
		
	}
	.next::after{
		display: none;
	}
</style>
