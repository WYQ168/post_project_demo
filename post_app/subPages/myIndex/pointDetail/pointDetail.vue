<template>
	<!-- 哦积分明细 -->
	<view>
		<view class="nav">
			<view class="back">
				<image src="/static/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="titleText">哦积分明细</view>
			<view class="nav_riht"></view>
		</view>
		<view>
			<view class="exchange">
				<view class="change" :class="current == 0?'active':''" @click="select(0)">全部</view>
				<view class="out" :class="current == 1?'active':''" @click="select(1)">收入</view>
				<view class="out" :class="current == 2?'active':''" @click="select(2)">支出</view>
			</view>
			<view class="" v-if="current == 0">
				111
			</view>
			<view class="" v-if="current == 1">
				222
			</view>
			<view class="" v-if="current == 2">
				333
			</view>
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
			select(val){
				this.current = val
			}
		}
	}
</script>

<style>
	page{
		background-color: rgba(240, 240, 240, 1);
	}
.nav{
		width: 100%;
		height: 190rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 30rpx;
		padding-bottom: 22rpx;
		background-image: url("@/static/home/bg_2.png");
		background-size: 100% 100%;
		background-color: #144BD5;
	}
	.back image{
		width: 21rpx;
		height: 35rpx;
		/* background-color: #FF4102; */
	}
	.titleText{
		font-size: 36rpx;
		color: #fff;
	}
	.nav_riht image{
		width: 31rpx;
		height: 31rpx;
	}
	.exchange{
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		width: 100%;
		height: 88rpx;
		background-color: #fff;
	}
	.change,.out{
		padding: 0 40rpx;
		font-size: 28rpx;
		color: #666666;
		padding-bottom: 20rpx;
		border-bottom: 3px solid transparent;
	}
	.active{
		color: #48A3FF;
		border-bottom: 3px solid #48A3FF;
	}
</style>
