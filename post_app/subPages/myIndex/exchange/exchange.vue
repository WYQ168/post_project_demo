<template>
	<!-- 兑换记录 -->
	<view>
		<view class="exchange">
			<view class="change" :class="current == 0?'active':''" @click="select(0)">兑换</view>
			<view class="out" :class="current == 1?'active':''" @click="select(1)">兑出</view>
		</view>
		<view class="" v-if="current == 0">
			111
		</view>
		<view class="" v-if="current == 1">
			222
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
		background-color: #F0F0F0;
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
