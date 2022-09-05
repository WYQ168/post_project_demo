<template>
	<view>
		<view class="header">
			<image src="" mode=""></image>
		</view>
		<view class="line">
			<text class="text">了解汇智管家</text>
			<img src="/static/right.png" mode="" class="right"/>
		</view>
		<view class="line">
			<text class="text">版本信息</text>
			<text class="text1">当前版本1.9.8</text>
		</view>
		<view class="line">
			<text class="text">注销账号</text>
			<img src="/static/right.png" mode="" class="right"/>
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

<style>
page{
	background-color: rgba(240, 240, 240, 1);
}
.header{
	height: 201rpx;
	background: -webkit-linear-gradient(top,rgba(70, 129, 244, 1),rgba(20, 75, 213, 1));
	text-align: center;
	padding-top: 22rpx;
	margin: 25rpx 0 33rpx ;
}
.header image{
	width: 336rpx;
	height: 162rpx;
	border-radius: 20rpx;
	background-color: #fff;
}
.line{
	width: 100%;
	height: 88rpx;
	padding: 0 34rpx 0 20rpx;
	margin-bottom: 1px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
}
.text{
	font-size: 28rpx;
	color: rgba(51, 51, 51, 1);
}
.text1{
	font-size: 28rpx;
	color:rgba(153, 153, 153, 1);
}
.right{
	width: 50rpx;
	height: 50rpx;
}
</style>
