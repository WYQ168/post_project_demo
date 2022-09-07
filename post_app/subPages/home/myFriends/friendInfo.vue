<template>
	<view>
		<view class="box">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer" src="/static/arrow-left-bold.png" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">伙伴详情</text>
				</view>
				<view class="image-wrapper_2">历史数据</view>
			</view>
			<view class="box_3 flex-row">
				<img src="" alt="" class="touxiang">
				<view class="box_right">
					<view class="box_up">
						<view class="box_right_left">
							<text class="box_name">吉安安</text>
							<text class="box_is">已实名</text>
						</view>
						<view class="box_right_right">
							<img src="" alt="">
							<img src="" alt="">
						</view>
					</view>
					<view class="box_down">
						<text class="box_time">注册时间：2022-06-26 11：23：06</text>
					</view>
				</view>
			</view>
		</view>
		<view class="example-body">
			<uni-datetime-picker type="date" v-model="single" />
		</view>
		<view class="header">新增商户数（户）: 0</view>
		<view class="">
			<view class="nums">
				<view class="num_item" v-for="item in 8">
					<view class="much">0</view>
					<view class="mpos">mpos商户</view>
					<view class="line"></view>
				</view>
			</view>
		</view>
		<view class="header">新增商户数（户）: 12</view>
		<view class="bg"></view>
		<view class="header alldata">
			<text>交易数据</text>
			<text class="all">全部数据 ></text>
		</view>
		<view id="echarts">
		</view>
	</view>
</template>

<script>
	// import * as echarts from '@/static/js/echarts.min.js';

	export default {
		data() {
			return {
				single: '',
				option:{}
			}
		},
		methods: {
		}
	}
</script>

<style>
	#echarts {
		width: 100%;
		height: 500rpx;
		background-color: #1C53DA;
	}

	.box {
		background-color: #1C53DA;
		background: -webkit-linear-gradient(left, rgba(69, 128, 244, 1), rgba(23, 78, 214, 1));
		background-size: 100% 100%;
		padding-top: 75rpx;
		padding-bottom: 28rpx;
		margin-bottom: 26rpx;
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
		font-size: 28rpx;
		color: #fff;
	}

	.label_3 {
		width: 30rpx;
		height: 30rpx;
		margin: 33rpx 0 0 6rpx;
	}

	.box_3 {
		width: 100%;
		padding: 0 23rpx 0 66rpx;
		/* display: flex;
		justify-content: space-between; */
	}

	.touxiang {
		width: 76rpx;
		height: 76rpx;
		margin-right: 26rpx;
	}

	.box_right {
		flex: 1;
	}

	.box_up {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.box_right_left {
		display: flex;
		align-items: center;
	}

	.box_name {
		font-size: 30rpx;
		color: #fff;
		margin-right: 22rpx;
	}

	.box_is {
		width: 100rpx;
		height: 30rpx;
		font-size: 18rpx;
		color: rgba(24, 80, 215, 1);
		background-color: #fff;
		border-radius: 15rpx;
		text-align: center;
		line-height: 30rpx;
	}

	.box_right_right img {
		width: 30rpx;
		height: 30rpx;
	}

	.box_right_right img:nth-child(1) {
		margin-right: 22rpx;
	}

	.box_time {
		font-size: 18rpx;
		color: #fff;
	}

	/* 日历 */
	.example-body {
		background-color: #fff;
		padding: 10px;
		margin-bottom: 36rpx;
	}

	/* - */
	.header {
		margin-left: 40rpx;
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
		border-left: 3px solid rgba(53, 151, 249, 1);
		padding-left: 16rpx;
	}

	.nums {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		padding: 40rpx 50rpx;
		/* margin-top: 30rpx; */
	}

	.num_item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 140rpx;
		height: 87rpx;
		border: 1px solid #EEEEEE;
		border-radius: 10rpx;
		text-align: left;
		margin-top: 16rpx;
		padding-left: 26rpx;
	}

	.mpos {
		font-size: 20rpx;
		color: #999;
	}

	.much {
		color: rgba(102, 102, 102, 1);
		font-size: 30rpx;
	}

	.line {
		width: 30rpx;
		height: 2px;
		background-color: rgba(255, 123, 1, 1);
		margin-top: 8rpx;
	}

	.bg {
		width: 100%;
		height: 24rpx;
		margin-top: 32rpx;
		background-color: rgba(240, 240, 240, 1);
	}

	.alldata {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 53rpx;
		margin-top: 28rpx;
	}

	.all {
		font-size: 26 rpx;
		color: rgba(102, 102, 102, .8);
	}
</style>
