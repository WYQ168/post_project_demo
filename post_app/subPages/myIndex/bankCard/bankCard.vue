<template>
	<view>
		<view class="bankCard">
			<view class="mounth">本月流水</view>
			<view><text class="bankMoney">2,600</text>.23</view>
			<view class="lastMoney">最近一笔交易：<text>1,000.00</text></view>
		</view>
		<view class="MyBankCard">
			<view class="myBank">我的银行卡</view>
			<view class="mybank">
				<view class="moren">默认此卡</view>
				<view class="cardName">农村商业银行</view>
				<view class="cardType">储蓄卡</view>
				<view>1234********1234</view>
			</view>
			<view class="mybank">
				<view class="moren">默认此卡</view>
				<view class="cardName">农村商业银行</view>
				<view class="cardType">储蓄卡</view>
				<view>1234********1234</view>
			</view>
			<view class="bankCardButton" @click="changeCard">
				<button class="button">更换银行卡</button>
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
			changeCard(){
				uni.navigateTo({
					url:'./changeCard'
				})
			}
		}
	}
</script>

<style>
	.bankCard {
		width: 750rpx;
		height: 289rpx;
		color: #fff;
		background: #1C53DA;
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding-left: 42rpx;
	}

	.mounth {
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}

	.bankMoney {
		font-size: 48rpx;
	}

	.lastMoney {
		opacity: 0.8;
		margin: 13rpx 0 46rpx 0;
	}


	.MyBankCard {
		padding: 45rpx 36rpx 0 29rpx;

		.myBank {
			color: #262626;
			font-size: 32rpx;
		}
	}

	.mybank {
		margin-top: 30rpx;
		padding-left: 20rpx;
		position: relative;
		width: 685rpx;
		height: 272rpx;
		background: linear-gradient(45deg, #FF9D4A 0%, #FFBE57 100%);
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		color: #fff;
	}

	.moren {
		text-align: center;
		top: 0;
		left: 0;
		width: 145rpx;
		height: 47rpx;
		background: #AC6A00;
		opacity: 0.7;
		border-radius: 20rpx 0 20rpx 0;
		position: absolute;
	}

	.cardName {
		font-size: 32rpx;
		margin-top: 20rpx;
	}

	.cardType {
		width: 91rpx;
		height: 46rpx;
		font-size: 24rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 10rpx;
		text-align: center;
		line-height: 46rpx;
	}
	.bankCardButton{
		margin-top: 180rpx;
		
		
	}
	.button{
			color: #fff;
			background: linear-gradient(0deg, #2373DE 0%, #41ACFF 100%);
			border-radius: 15rpx;
		}
</style>
