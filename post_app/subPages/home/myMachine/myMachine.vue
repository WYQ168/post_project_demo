<template>
	<!-- 我的机具 -->
	<view>
		<view class="nav">
			<view class="back">
				<image src="/static/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="titleText">
				机具类型
			</view>
			<view class="nav_riht" @click="Todeducton">
				扣费管理
			</view>
		</view>
		<view class="inpute">
			<img class="img" src="/static/posSearch.png" alt="">
			<input type="text" placeholder="请输入机具类型" placeholder-class="place">
		</view>
		<view class="posList">
			<view class="posItem" v-for="item in 8" @click="ToMachineInfo">
				<img class="pos_image" src="" alt="">
				<view class="pos_info">
					<text class="pos_name">MPOS</text>
					<text class="pos_num">255</text>
				</view>
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
			ToMachineInfo(){
				uni.navigateTo({
					url:'./MachineInfo'
				})
			},
			Todeducton(){
				uni.navigateTo({
					url:'./Deduction'
				})
			}
		}
	}
</script>

<style scoped>
	.nav{
		position: sticky;
		top: 0;
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
		margin-left: 96rpx;
		font-size: 36rpx;
		color: #fff;
	}
	.nav_riht{
		font-size: 28rpx;
		color: #fff;
	}
	.inpute{
		width: 690rpx;
		height: 90rpx;
		margin: 0 auto;
		margin-top: 25rpx;
		border: 1px solid rgba(53, 151, 249, 1);
		border-radius: 45rpx;
		display: flex;
		align-items: center;
		padding-left: 40rpx;
	}
	.inpute .img{
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
	}
	.place{
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
	}
	.posList{
		margin-top: 25rpx;
		padding: 38rpx 30rpx 0;
		border-top: 1px solid rgba(244, 244, 244, 1);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.posItem{
		width: 335rpx;
		height: 180rpx;
		background-color: rgba(245, 245, 245, 1);
		border-radius: 20rpx;
		margin-bottom: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.pos_image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #144BD5;
		border: none !important;
		margin-right: 36rpx;
	}
	.pos_info{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.pos_name{
		font-size: 30rpx;
		color: rgba(153, 153, 153, 1);
		margin-bottom: 6rpx;
	}
</style>
