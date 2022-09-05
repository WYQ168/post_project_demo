<template>
	<view>
		<view class="nav">
			<view class="day" :class="current == 0?'active':''" @click="change(0)">日维度</view>
			<view class="month" :class="current == 1?'active':''" @click="change(1)">月维度</view>
		</view>
		<view class="" v-if="current == 0">
			11111
		</view>
		<view class="" v-if="current == 1">
			222222
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
			change(val){
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
	height: 86rpx;
	background-color: #fff;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
}
.day,.month{
	width: 135rpx;
	text-align: center;
	font-size: 28rpx;
	color: #666666;
	padding-bottom: 20rpx;
	border-bottom: 3px solid transparent;
}
.active{
	border-bottom: 3px solid #48A3FF;
}
</style>
