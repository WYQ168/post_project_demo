<template>
	<!-- 我的机具 -->
	<view>
		<view class="nav">
			<view class="back">
				<image src="/static/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="titleText">
				我的机具
			</view>
			<view class="nav_riht">
				<image src="/static/home/sweep.png" mode="" class="sweep"></image>
				<image src="/static/home/write.png" mode="" @click="Toliudong"></image>
			</view>
		</view>
		<!-- <view class="null" style="height: 196rpx;"></view> -->
		<view class="header">
			<view class="input">
				<image class="search" referrerpolicy="no-referrer"
					src="@/static/search.png" />
				<input class="text-group_1" placeholder="请输入机身号" placeholder-class="plainpute"></input>
			</view>
			<view class="downheader">
				<view class="over" @click="activation(1)" :class="currentindex == 1?'active':''">已激活(212)</view>
				<view class="no" @click="activation(2)" :class="currentindex == 2?'active':''">未激活(5)</view>
				<view class="img">
					<view class="left">
						<image src="@/static/home/up_2.png" mode=""></image>
					</view>
					<view class="right">
						<image src="@/static/home/screen_2.png" mode=""></image>
					</view>
				</view>
				
			</view>
		</view>
		<view class="text">
			<text>机身编号</text>
			<text>操作</text>
		</view>
		<view class="Activated" v-if="currentindex == 1">
			<view class="machines" v-for="item in 4">
				<text class="num_1">372618621</text>
				<text class="num_2">3726</text>
				<image class="right" src="@/static/right.png" mode=""></image>
			</view>
			<view class="bottom">
				<view class="many">8</view>
				<view class="chose">批 量 选 中</view>
				<button class="dowm">下 发</button>
			</view>
		</view>
		<view class="unActivated" v-if="currentindex == 2">
			222222222
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentindex:1
			}
		},
		methods: {
			activation(val){
				this.currentindex = val
			},
			Toliudong(){
				uni.navigateTo({
					url:'./liudong'
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: rgb(244, 244, 244);
	}
	.nav{
		/* position: fixed;
		top: 0; */
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
		font-size: 36rpx;
		color: #fff;
	}
	.nav_riht image{
		width: 31rpx;
		height: 31rpx;
	}
	.sweep{
		margin-right: 30rpx;
	}
	/* ------------ */
	.header{
		width: 100%;
		height: 210rpx;
		background-color: #fff;
		padding-top: 26rpx;
	}
	.input{
		position: relative;
		width: 690rpx;
		margin: 0 auto;
	}
	.search{
		position: absolute;
		top: 18rpx;
		left: 30rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.text-group_1{
		width: 690rpx;
		height: 78rpx;
		border: 1px solid #3597F9;
		border-radius: 40rpx;
		padding-left: 92rpx;
	}
	/deep/ .text-group_1 .uni-input-input{
		width: 90%;
	}
	.plainpute{
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
	}
	.downheader{
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		margin-top: 36rpx;
		justify-content: space-between;
	}
	.over,.no{
		padding-bottom: 15rpx;
		border-bottom: 3px solid transparent;
	}
	.active{
		color: #3597F9;
		border-bottom: 3px solid #3597F9;
	}
	.downheader .img{
		display: flex;
		justify-content: space-between;
		width: 94rpx;
		padding-bottom: 15rpx;
	}
	.downheader .left,.downheader .right{
		width: 26rpx;
		height: 26rpx;
		/* background-color: #3597F9; */
	}
	.img .right image,.img .left image{
		width: 100%;
		height: 100%;
	}
	.text{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 30rpx 30rpx 0;
		font-size: 24rpx;
		color: #999999;
	}
	.Activated{
		width: 100%;
	}
	.machines{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 0 32rpx;
		height: 88rpx;
		margin: 2px;
	}
	.num_1{
		font-size: 32rpx;
		color: #666666;
	}
	.num_2{
		font-size: 32rpx;
		color: #FF4102;
		margin-left: -360rpx;
	}
	.right{
		width: 32rpx;
		height: 32rpx;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.many{
		width: 88rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		border-radius: 50%;
		border: 1px solid rgba(135, 173, 240, 1);
		color: rgba(21, 76, 214, 1);
		font-size: 36rpx;
	}
	.chose{
		width: 243rpx;
		height: 88rpx;
		text-align: center;
		border-radius: 20rpx;
		line-height: 88rpx;
		font-size: 34rpx;
		border:1px solid rgba(31, 86, 219, 1);
		color: rgba(102, 102, 102, 1);
	}
	.dowm{
		width: 243rpx;
		height: 88rpx;
		color: #fff;
		background: -webkit-linear-gradient(top,rgba(53, 172, 255, 1),rgba(40, 150, 253, 1));
	}
</style>
