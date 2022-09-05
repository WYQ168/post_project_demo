<template>
	<!-- 礼包活动 -->
	<view>
		<view class="bgBox bgBox1">
			<view class="title1">多档礼包政策</view>
			<view class="title2">巨量超值惊喜</view>
			<view class="button">查看详情</view>
		</view>
		<view class="bgBox bgBox2">
			<view class="title3">随机应变</view>
			<view class="title4">我们在等你</view>
			<view class="button">查看详情</view>
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
	page{
		background-color: rgb(244, 244, 244);
	}
.bgBox{
	position: relative;
	width: 692rpx;
	height: 318rpx;
	margin: 0 auto;
	background-color: aqua;
	margin-top: 26rpx;
	border-radius: 10rpx;
}
.bgBox1{
	background-image: url('@/static/home/6img.png');
	background-size: 100% 100%;
}
.bgBox2{
	background-image: url('@/static/home/7img.png');
	background-size: 100% 100%;
}
.title1{
	position: absolute;
	font-size: 36rpx;
	color: #fff;
	left: 230rpx;
	top: 59rpx;
}
.title2{
	position: absolute;
	font-size: 36rpx;
	color: #fff;
	left: 311rpx;
	top: 120rpx;
}
.title3{
	position: absolute;
	font-size: 36rpx;
	left: 366rpx;
	top: 71rpx;
	color: #666;
}
.title4{
	position: absolute;
	font-size: 36rpx;
	left: 366rpx;
	top: 130rpx;
	color: #666;
}
.button{
	position: absolute;
	width: 120rpx;
	height: 44rpx;
	line-height: 44rpx;
	right: 5rpx;
	bottom: 14rpx;
	background-color: #FF9436;
	border-radius: 60rpx;
	font-size: 20rpx;
	text-align: center;
	color: #fff;
}
</style>
