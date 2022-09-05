<template>
	<!-- 投诉工单 -->
	<view>
		<view class="nav">
			<view class="back">
				<image src="/static/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="titleText">
				投诉工单
			</view>
			<view class="nav_riht">
				
			</view>
		</view>
		<view class="head">
			<view class="head_item" :class="current == 0?'head_item_active':''" @click="selectItem(0)">待处理</view>
			<view class="head_item" :class="current == 1?'head_item_active':''" @click="selectItem(1)">待审核</view>
			<view class="head_item" :class="current == 2?'head_item_active':''" @click="selectItem(2)">全部</view>
		</view>
		<view class="" v-if="current == 0">
			1
		</view>
		<view class="" v-if="current == 1">
			2
		</view>
		<view class="" v-if="current == 2">
			3
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
	page{
		background-color: #F0F0F0;
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
	.head{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		height: 88rpx;
		background-color: #fff;
		padding: 0 30rpx;
	}
	.head_item{
		text-align: center;
		padding: 0 30rpx;
		padding-bottom: 16rpx;
		border-bottom: 3px solid transparent;
	}
	.head_item_active{
		color: #48A3FF;
		border-bottom: 3px solid #48A3FF;
	}
</style>
