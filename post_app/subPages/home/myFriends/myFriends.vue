<template>
	<!-- 我的伙伴 -->
	<view>
		<view class="box">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer"
						src="/static/arrow-left-bold.png" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">我的伙伴</text>
				</view>
				<view class="image-wrapper_2">
					<image class="label_3" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/psr6t3enmtc2t3os865q3m7bdl5u699zbab0b3e32-3c23-4ce6-a94d-862c3c2bab23" />
				</view>
			</view>
			<view class="box_3 flex-row">
				<view class="image-text_1 flex-row justify-between">
					<image class="label_4" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/psza7ri3wa2s27vdkk1d2dsjq2tw6nvliflbcd36413-3279-43e2-a942-ada1e2ae5cfa" />
					<input class="text-group_1" placeholder="请输入伙伴姓名"></input>
				</view>
			</view>
		</view>
		<view class="friends" v-for="item in 9" @click="Tofriendinfo">
			<view class="friends_left">
				<view class="headimgbox">
					<image class="headimg" src="headimg" mode=""></image>
				</view>
				<view class="friendInfo">
					<text class="name">朱秀龙</text>
					<text class="users">本月新增用户 0</text>
				</view>
			</view>
			<view class="friends_right">
				<text class="mony">46824.00</text>
				<text class="momytext">本月交易金额 (元)</text>
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
			Tofriendinfo(){
				uni.navigateTo({
					url:'./friendInfo'
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: rgb(244, 244, 244);
	}
	.box{
		background-color: #1C53DA;
		background-image: url('@/static/home/bg_1.png');
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
		color: rgba(255, 255, 255, 0.71);
		font-size: 24rpx;

	}
	.friends{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		margin: 1px;
		padding: 0 30rpx;
	}
	.friends_left{
		display: flex;
		justify-content: space-between;
		width: 170rpx;
	}
	.headimgbox{
		width: 82rpx;
		height: 82rpx;
		background-color: #1C53DA;
		border-radius: 50%;
	}
	.headimgbox .headimg{
		width: 100%;
		height: 100%;
	}
	.friends .friendInfo{
		display: flex;
		flex-direction: column;
		justify-content: end;
		margin-left: 30rpx;
	}
	.name{
		font-size: 28rpx;
	}
	.users{
		font-size: 20rpx;
		color: #C1C1C1;
	}
	.friends_right{
		display: flex;
		flex-direction: column;
		text-align: right;
	}
	.mony{
		font-size: 28rpx;
		color: #FF4102;
	}
	.momytext{
		font-size: 20rpx;
		color: #C1C1C1;
	}
</style>
