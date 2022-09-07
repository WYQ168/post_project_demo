<template>
	<view>
			<view class="group_1 flex-col">
				<view class="box_1 flex-row">
					<view class="image-wrapper_1">
						<image class="label_2" referrerpolicy="no-referrer" src="/static/arrow-left-bold.png" />
					</view>
					<view class="text-wrapper_1">
						<text class="text_2">我的商户</text>
					</view>
					<text class="image-wrapper_2" @click="filter">商户转移</text>
				</view>
				<view class="box_3">
					<img src="" alt="" class="">
					<view class="box_3_text">
						<text class="name">吉安安</text>
						<text class="text_1">MPOS商户</text>
						<text class="time">入网时间：2022-06-26 11：23：06</text>
					</view>
				</view>
			</view>
			<view class="bar">
				<view class="shebei bar_text" :class="current == 0?'active':''" @click="select(0)">他/她的设备</view>
				<view class="jiaoyi bar_text" :class="current == 1?'active':''" @click="select(1)">他/她的交易</view>
			</view>
			<view class="" v-if="current == 0">
				<view class="info">
					<view class="mpos">
						MPOS
					</view>
					<view class="info_text">
						<text class="info_title">设备编号：</text>
						<text class="info_num">86836022880773</text>
						<text class="info_title">激活时间：</text>
						<text class="info_num">2022-06-26 11：23：05</text>
					</view>
				</view>
			</view>
			<view class="" v-if="current == 1">
				2
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0
			}
		},
		methods: {
			select(val) {
				this.current = val
			}
		}
	}
</script>

<style>

	.group_1 {
		justify-content: space-between;
		background-color: rgba(28, 83, 218, 1);
		position: relative;
		width: 750rpx;
		height: 414rpx;
		padding-top: 75rpx;
		padding-bottom: 60rpx;
	}

	.box_1 {
		position: sticky;
		top: 0;
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
		color: rgba(255, 255, 255, 1);
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
		overflow-wrap: break-word;
		font-size: 28rpx;
	}

	.label_3 {
		width: 30rpx;
		height: 30rpx;
		margin: 33rpx 0 0 6rpx;
	}

	.box_3 {
		display: flex;
	}

	.box_3 img {
		width: 98rpx;
		height: 98rpx;
		margin-left: 70rpx;
		margin-right: 60rpx;
	}

	.box_3_text {
		display: flex;
		flex-direction: column;
		color: #fff;
	}

	.name {
		font-size: 30rp;
	}

	.text_1 {
		margin-top: 3rpx;
		font-size: 18rpx;
	}

	.time {
		font-size: 18rpx;
	}

	.bar {
		width: 100%;
		background-color: #fff;
		padding: 42rpx 0 0;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		border-bottom: 24rpx solid rgba(240, 240, 240, 1);
	}

	.bar_text {
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
		padding-bottom: 10rpx;
		border-bottom: 3px solid transparent;
	}

	.active {
		color: rgba(55, 167, 254, 1);
		border-bottom: 3px solid rgba(72, 163, 255, 1);
	}

	.info {
		width: 678rpx;
		height: 197rpx;
		margin: 0 auto;
		margin-top: 33rpx;
		border: 1px solid rgba(228, 228, 228, 1);
		display: flex;
		align-items: center;
	}

	.mpos {
		width: 121rpx;
		height: 44rpx;
		text-align: center;
		line-height: 44rpx;
		margin: 0 56rpx;
		color: #fff;
		font-size: 20rpx;
		border-radius: 22rpx;
		background-color: rgba(255, 148, 54, 1);
	}

	.info_text {
		display: flex;
		flex-direction: column;
	}

	.info_title {
		font-size: 24rpx;
		color: rgba(153, 153, 153, 1);
	}

	.info_num {
		font-size: 24rpx;
		color: rgba(255, 65, 2, 1);
		padding-bottom: 14rpx;
	}
</style>
