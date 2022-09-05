<template>
	<!-- 我的账单 -->
	<view>
		<view class="selectDate">
			<view class="example-body">
				<uni-datetime-picker type="date" v-model="single" />
			</view>
		</view>
		<text class="type_text">类型</text>
		<view class="types">
			<view class="type_item" v-for="(item,index) in types" :key="index" :class="isActive == index?'active':''" @click="select(index)">{{item}}</view>
		</view>
		<view class="button">
			<view class="reset">重置</view>
			<view class="confirm">确认</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '',
				isActive:0,
				types: ['结算款', '激活奖励金', '提现', '收益出款', '风控冻结', '风控冻结']
			}
		},
		methods: {
			// maskClick(e) {
			// 	console.log(e);
			// }
			select(index){
				this.isActive = index
			}
		}
	}
</script>

<style scoped>
	.example-body {
		background-color: #fff;
		padding: 10px;
	}

	.selectDate {
		width: 100%;
	}

	.type_text {
		width: 100%;
		font-size: 28rpx;
		padding-left: 32rpx;
		margin: 16rpx 0;
		color: #302F2F;
	}

	.types {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 16rpx 0;
		display: flex;
		;
		padding-left: 32rpx;
	}

	.type_item {
		padding: 10rpx 26rpx;
		text-align: center;
		font-size: 20rpx;
		color: #999999;
		border: 1px solid #999999;
		border-radius: 10rpx;
		margin: 8rpx;
	}
	.active{
		color: rgba(78, 110, 255, 1);
		border: 1px solid rgba(78, 110, 255, 1);
	}
	.button {
		width: 100%;
		height: 88rpx;
		display: flex;
	}

	.reset {
		width: 50%;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		color: #666666;
		background-color: #CBCBCB;
	}

	.confirm {
		width: 50%;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
		background-color: #77A0FD;
	}
</style>
