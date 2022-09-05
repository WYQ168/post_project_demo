<template>
	<view>
		<!-- 积分兑换 -->
		<view class="pointimg">
			<view class="title_1">成就平凡人的创业梦想 将财富装进口袋</view>
			<view class="title_2">更方便 更稳定</view>
		</view>
		<view title="实心标签" type="line">
			<view class="uni-padding-wrap">
				<view class="title" :class="current == index?'title_avtive':''" v-for="(item,index) in items" :key="index" @click="onClickItem(index)"	>{{item}}</view>
			</view>
			<view class="content">
				<view v-if="current === 0">
					<view class="appList">
						<view class="possapp" v-for="(item,index) in 6" :key="index">
							<view class="up">
								<image src="@/static/home/POS.png" mode=""></image>
								<text>MPOS</text>
							</view>
							<view class="down">
								<view class="num">120<text>积分/台</text></view>
								<view class="button">立即兑换</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
				<view v-if="current === 3"><text class="content-text">选项卡4的内容</text></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['全部', 'MPOS', '点签', '旺铺'],
				current: 0,
			}
		},
		methods: {
			onClickItem(val) {
				this.current = val
			},
		}
	}
</script>

<style scoped>
	.pointimg {
		position: relative;
		margin: 0 auto;
		margin-top: 32rpx;
		width: 690rpx;
		height: 168rpx;
		background-color: aqua;
		background-image: url("@/static/home/5img.png");
		background-size: 100% 100%;
	}

	.title_1 {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 61rpx;
		font-size: 24rpx;
		color: #fff;
	}

	.title_2 {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 107rpx;
		font-size: 18rpx;
		color: #fff;
	}
	.uni-padding-wrap{
		width: 100%;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title{
		color: #666666;
		font-size: 30rpx;
	}
	,.title_avtive{
		color: #333333;
		font-size: 36rpx;
		border-bottom: solid 3px #FF4102;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-padding-wrap {
		width: 690rpx;
		margin: 0 auto;
		margin-top: 57rpx;
	}

	.content {
		height: 150px;
		width: 750rpx;
		text-align: center;
	}

	.content-text {
		font-size: 14px;
		color: #666;
	}

	.appList {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.possapp {
		width: 320rpx;
		height: 258rpx;
		margin-top: 42rpx;
	}

	.up {
		position: relative;
		background-color: rgba(47, 162, 254, .6);
		height: 50%;
		line-height: 129rpx;
	}

	.up image {
		position: absolute;
		left: 56rpx;
		bottom: 5rpx;
		width: 75rpx;
		height: 140rpx;
		background-color: #666;
	}

	.up text {
		color: #fff;
		margin-left: 120rpx;
		font-size: 30rpx;
	}

	.down {
		height: 50%;
		width: 103%;
		border: #666 1px solid;
		border-radius: 5px;
		margin-left: -5rpx;
		padding-top: 30rpx;
	}

	.down .num {
		font-size: 30rpx;
		color: #999;
	}

	.down .num text {
		font-size: 10rpx;
		padding-left: 10rpx;
	}

	.down .button {
		height: 36rpx;
		width: 160rpx;
		margin: 0 auto;
		line-height: 32rpx;
		font-size: 24rpx;
		margin-top: 12rpx;
		border: 1px solid #FF4102;
		color: #FF4102;
		border-radius: 80rpx;
	}
</style>
