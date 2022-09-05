<template>
	<view>
		<view class="box">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps93ruylb30u50ds5dpzneu860fxgfp4cghrj35d6a8b5-66ce-4ff3-a4b8-c2595fb38509" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">我的钱包</text>
				</view>
				<view class="">
					<text class="text_3">账单</text>
				</view>
			</view>
			<view class="box_2">
				<view class="text_4">账户总余额（元）</view>
				<view class="num_1">12000.00</view>
			</view>
		</view>
		<view class="lists">
			<view class="item" :class="current == 0?'item_active':''" @click="selectItem(0)">结算款账户</view>
			<view class="item" :class="current == 1?'item_active':''" @click="selectItem(1)">激活奖励账户</view>
			<view class="item" :class="current == 2?'item_active':''" @click="selectItem(2)">旺铺结算</view>
			<view class="item" :class="current == 3?'item_active':''" @click="selectItem(3)">旺铺激活</view>
		</view>
		<view class="" v-if="current == 0">
			<view class="box_3">
				<view class="left">
					<text class="text_5">可用余额（元）</text>
					<text class="num_2">0.00</text>
				</view>
				<view class="right">
					<text class="text_5">应纳税金额（元）</text>
					<text class="num_2">0.00</text>
				</view>
			</view>
			<view class="Withdrawal">去提现</view>
		</view>
		<view class="" v-if="current == 1">
			2
		</view>
		<view class="" v-if="current == 2">
			3
		</view>
		<view class="" v-if="current == 3">
			4
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0
			}
		},
		methods: {
			selectItem(val){
				this.current = val
			}
		}
	}
</script>

<style>
	.box{
		padding-top: 75rpx;
		background-color: #1C53DA;
	}
	.box_1 {
		width: 100%;
		justify-content: space-between;
		height: 87rpx;
		align-items: center;
		padding: 0 30rpx;
	}

	.image-wrapper_1 {
		width: 26rpx;
		height: 84rpx;
		margin-top: 2rpx;
	}

	.label_2 {
		width: 21rpx;
		height: 35rpx;
		margin-top: 26rpx;
	}

	.text-wrapper_1 {
		width: 140rpx;
		height: 84rpx;
		line-height: 84rpx;
	}

	.text_2 {
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 36rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
		line-height: 48rpx;
	}
	.text_3{
		display: flex;
		line-height: 83rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.box_2{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 200rpx;
	}
	.text_4{
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.num_1{
		color: #FFFFFF;
		font-size: 60rpx;
		margin-top: 32rpx;
	}
	.lists{
		width: 100%;
		height: 114rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		border-bottom: 22rpx solid #F0F0F0;
	}
	.item{
		font-size: 24rpx;
		color: #999999;
		padding-bottom: 16rpx;
		border-bottom:  3px solid transparent;
	}
	.item_active{
		color: #48A3FF;
		border-bottom:  3px solid #48A3FF;
	}
	.box_3{
		width: 100%;
		padding: 60rpx 35rpx;
		display: flex;
		justify-content: space-between;
	}
	.left,.right{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 330rpx;
		height: 180rpx;
		border: 1rpx solid #E4E4E4;
	}
	.text_5{
		font-size: 24rpx;
		color: #999999;
	}
	.num_2{
		margin-top: 34rpx;
		font-size: 36rpx;
		color: #FF8C00;
	}
	.Withdrawal{
		margin: 0 auto;
		width: 532rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background-color: #87C5FB;
		font-size: 38rpx;
		color: #48A3FF;
		border-radius: 44rpx;
	}
</style>
