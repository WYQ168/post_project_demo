<template>
	<!-- 我的商户 -->
	<view>
		<view class="group_1 flex-col">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer" src="/static/arrow-left-bold.png" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">我的商户</text>
				</view>
				<view class="image-wrapper_2" @click="filter">
					<image class="label_3" referrerpolicy="no-referrer" src="/static/home/screen_1.png">
				</view>
			</view>
			<view class="box_3 flex-row">
				<view class="image-text_1 flex-row justify-between">
					<image class="label_4" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/psza7ri3wa2s27vdkk1d2dsjq2tw6nvliflbcd36413-3279-43e2-a942-ada1e2ae5cfa" />
					<input class="text-group_1" placeholder="请输入商户姓名或手机号"></input>
				</view>
			</view>
		</view>
		<text class="all">共7户</text>
		<view class="merchantList" v-for="item in 7" @click="merchantInfo">
			<view class="merchantLeft">
				<img src="" alt="">
				<text class="merchantName">吉安安</text>
			</view>
			<view class="merchantRight">
				<text class="merchant_num">0.00元</text>
				<text class="merchant_text">本月商户交易额</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			filter() {
				uni.navigateTo({
					url: './filterMerchant'
				})
			},
			merchantInfo(){
				uni.navigateTo({
					url:'./mechantInfo'
				})
			}
		},
	};
</script>
<style scoped>
	page {
		background-color: rgb(244, 244, 244);
	}

	.group_1 {
		background-color: rgba(28, 83, 218, 1);
		position: relative;
		width: 750rpx;
		padding-top: 75rpx;
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

	.image-wrapper_2 {
		width: 36rpx;
		height: 83rpx;
		margin: 3rpx 0 0 10rpx;
	}

	.label_3 {
		width: 30rpx;
		height: 30rpx;
		margin: 33rpx 0 0 6rpx;
	}

	.box_3 {
		background-color: rgba(122, 156, 235, 1);
		border-radius: 38rpx;
		width: 690rpx;
		height: 77rpx;
		margin: 64rpx 0 28rpx 30rpx;
	}

	.image-text_1 {
		width: 315rpx;
		height: 32rpx;
		margin: 25rpx 0 0 40rpx;
	}

	.label_4 {
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
	}

	.text-group_1 {
		width: 150%;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 0.71);
		font-size: 24rpx;
	}
/* ---------- */
	.all {
		display: inline-block;
		font-size: 24rpx;
		color: rgba(153, 153, 153, 1);
		padding-top: 22rpx;
		padding-left: 32rpx;
	}

	.merchantList {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 106rpx;
		padding: 0 30rpx;
		background-color: #fff;
		margin-bottom: 1px;
	}

	.merchantLeft img {
		width: 65rpx;
		height: 65rpx;
		background-color: aqua;
		margin-right: 25rpx;
		vertical-align: middle;
	}

	.merchantName {
		font-size: 30rpx;
		color: rgba(102, 102, 102, 1);
	}

	.merchantRight {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.merchant_num {
		font-size: 30rpx;
		color: rgba(255, 65, 2, 1);
	}

	.merchant_text {
		font-size: 16rpx;
		color: rgba(102, 102, 102, 1);
	}
</style>
