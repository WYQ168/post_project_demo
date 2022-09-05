<template>
	<view>
		<view class="point">
			<text class="text">当前剩余积分</text>
			<text class="num">0</text>
		</view>
		<view class="point">
			<text class="text">购买数量（张）</text>
			<text class="num">2张起购</text>
		</view>
		<view class="point">
			<text class="text">使用积分</text>
			<text class="num">0</text>	
		</view>
		<view class="point point_1">
			<view class="left">
				<image src="" mode=""></image>
				<text class="pay">支付方式</text>
			</view>
			<text class="right">银行卡支付</text>
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
	background-color: #F0F0F0;
	padding-top: 25rpx;
}
.point{
	width: 100%;
	height: 88rpx;
	padding: 0 30rpx;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1px;
}
.text{
	font-size: 30rpx;
	color: #333333;

}
.num{
	font-size: 30rpx;
	color: #999999;
}
.left image{
	width: 40rpx;
	height: 40rpx;
	background-color: #FF6600;
	margin-right: 30rpx;
	vertical-align: middle;
	border-radius: 50%;
}
.pay{
	font-size: 30rpx;
	color: #FF6600;
}
.right{
	font-size: 30rpx;
	color: #666666;
}
.point_1{
	margin-top: 34rpx;
}
</style>
