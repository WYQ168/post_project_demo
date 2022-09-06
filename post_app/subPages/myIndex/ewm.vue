<template>
	<view>
		<view class="order">

		</view>
		<view class="ermName">张莉</view>
		<view class="phone">
			<view class="numPhone">15179083759</view>
			<view>推荐码：C6567543</view>
		</view>

		<view class="share">
			<view class="shareDetail">
				<image src="/static/groupHandle.png" mode=""></image>
				<view>分享链接</view>
			</view>
			<view class="shareDetail">
				<image src="/static/groupHandle.png" mode=""></image>
				<view>微信邀请</view>
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

<style lang="less">
	.order {
		width: 713rpx;
		height: 564rpx;
		opacity: 0.8;
		margin: 47rpx auto;
		background: linear-gradient(0deg, #154CD6 0%, #437EF2 100%);
	}

	.ermName {
		width: 290rpx;
		height: 86rpx;
		background: #FFFFFF;
		border: 2px solid #FF6472;
		border-radius: 43rpx;
		font-size: 36rpx;
		text-align: center;
		line-height: 86rpx;
		color: #FF5863;
		margin: 0 auto;

	}

	.phone {
		margin-top: 30rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: normal;
		color: #737373;

	}

	.numPhone {
		line-height: 60rpx;
	}

	.share {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 118rpx;
	}

	.shareDetail {
		display: flex;
		flex-direction: column;
		align-items: center;
		image {
			width: 86rpx;
			height: 86rpx;
			border-radius: 50%;
		}
	}
</style>
