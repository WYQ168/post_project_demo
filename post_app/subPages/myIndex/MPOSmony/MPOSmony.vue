<template>
	<view>
		<view class="point">
			<text class="text">购买数量（张）</text>
			<input type="number" name="" id="" placeholder="请输入2的倍数" class="input" placeholder-class="pcs">
		</view>
		<view class="point">
			<text class="text">寄回数量</text>
			<input type="number" name="" id="" placeholder="选择SN" class="input" placeholder-class="pcs">
		</view>	
		<view class="point">
			<text class="text">机具号</text>
			<text></text>
		</view>
		<view class="point">
			<text class="text">快递公司</text>
			<input type="number" name="" id="" placeholder="请输入快递公司" class="input" placeholder-class="pcs">
		</view>
		<view class="point">
			<text class="text">快递公司</text>
			<input type="number" name="" id="" placeholder="请输入快递单号" class="input" placeholder-class="pcs">
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
.input{
	width: 210rpx;
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
.pcs{
	font-size: 30rpx;
	text-align: right;
}
</style>
