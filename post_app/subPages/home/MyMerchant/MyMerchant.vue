<template>
	<!-- 我的商户 -->
	<view class="page flex-col justify-between">
		<view class="group_1 flex-col">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1 flex-col justify-between" @click="back">
					<image class="label_2" referrerpolicy="no-referrer"
						src="/static/arrow-left-bold.png" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">我的商户</text>
				</view>
				<view class="image-wrapper_2 flex-col justify-between">
					<image class="label_3" referrerpolicy="no-referrer"
						src="/static/home/screen_1.png">
				</view>
			</view>
			<view class="box_3 flex-row">
				<view class="image-text_1 flex-row justify-between">
					<image class="label_4" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/psza7ri3wa2s27vdkk1d2dsjq2tw6nvliflbcd36413-3279-43e2-a942-ada1e2ae5cfa" />
					<input class="text-group_1" placeholder="请输入商户姓名或手机号"></input>
				</view>
			</view>
		</view>
		<view class="group_2 flex-col">
			<view class="image-text_2 flex-row justify-between">
				<view class="box_7 flex-col"></view>
				<text class="text-group_2">商户类型</text>
			</view>
			<view class="box_8 flex-col"></view>
			<view class="grid_1 flex-row">
				<view class="text-wrapper_2 flex-col" :class="currentIndex == index? 'active':''"
					v-for="(item,index) in typeList" @click="checkType(index)">
					<text class="text_4">{{item}}</text>
				</view>
			</view>
			<view class="image-text_3 flex-row justify-between">
				<image class="image_4" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psgcgp5los0vd4xviqh0z8nw6t30qkyvn1b40f58c3-1dd4-42d9-bf84-da3a282f8a9d" />
				<text class="text-group_3">类型</text>
			</view>
			<view class="box_9 flex-row justify-between">
				<view class="text-wrapper_8 flex-col" :class="typeIndex == 1? 'active':''" @click="type(1)">
					<text class="text_10">交易额</text>
				</view>
				<view class="text-wrapper_8 flex-col" :class="typeIndex == 2? 'active':''" @click="type(2)">
					<text class="text_10">入网时间</text>
				</view>
			</view>
			<view class="image-text_4 flex-row justify-between">
				<image class="image_5" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psqu9wyvr1s5a4v1957rynwiys1grv3b2ze538bfa0-5b0f-4f00-bb73-6bec02c7c4e9" />
				<text class="text-group_4">排序</text>
			</view>
			<view class="box_10 flex-row justify-between">
				<view class="text-wrapper_10 flex-col"  :class="sortType == 1? 'active':''" @click="sort('1')">
					<text class="text_12">高到低</text>
				</view>
				<view class="text-wrapper_10 flex-col" :class="sortType == 2? 'active':''" @click="sort('2')">
					<text class="text_12">低到高</text>
				</view>
			</view>
			<view class="box_11 flex-row justify-between">
				<view class="text-wrapper_12">
					<text class="text_15">重&nbsp;&nbsp;&nbsp;&nbsp;置</text>
				</view>
				<view class="text-wrapper_12 flex-col">
					<text class="text_16">确&nbsp;&nbsp;&nbsp;&nbsp;认</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				typeList: ['全部', 'MPOS商户', '4G电签商户', '4G电签商户', '电签2.0商户-冻结'],
				currentIndex: 0,
				sortType:1,
				typeIndex:1
			};
		},
		methods: {
			checkType(index) {
				this.currentIndex = index
			},
			sort(val){	
				this.sortType = val
			},
			type(val){
				this.typeIndex = val
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
	};
</script>
<style scoped>
	
	.page {
		background-color: rgba(255, 255, 255, 1);
		position: relative;
		width: 750rpx;
	}
	
	.group_1 {
		background-color: rgba(28, 83, 218, 1);
		position: relative;
		width: 750rpx;
		padding-top: 75rpx;
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
		width: 315rpx;
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
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 0.71);
		font-size: 24rpx;

	}

	.group_2 {
		position: relative;
		background-color: rgba(255, 255, 255, 1);
		width: 750rpx;
		height: 1056rpx;
		border: 10rpx solid rgba(255, 255, 255, 1);
	}

	.image-text_2 {
		width: 175rpx;
		height: 34rpx;
		margin: 66rpx 0 0 43rpx;
	}

	.box_7 {
		width: 38rpx;
		height: 34rpx;
		background: url("/static/home/merchant.png") 100% no-repeat;
		background-size: 100% 100%;
	}

	.text-group_2 {
		width: 125rpx;
		height: 30rpx;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 32rpx;
		margin-top: 3rpx;
	}

	.box_8 {
		background-color: rgba(238, 238, 238, 1);
		width: 666rpx;
		height: 2rpx;
		margin: 14rpx 0 0 43rpx;
	}

	.grid_1 {
		width: 586rpx;
		height: 104rpx;
		flex-wrap: wrap;
		margin: 18rpx 0 0 46rpx;
	}

	.text-wrapper_2 {
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		height: 42rpx;
		border: 1rpx solid rgba(153, 153, 153, 1);
		color: rgba(153, 153, 153, 1);
		padding: 9rpx 22rpx;
		margin: 20rpx 19rpx 0 0;
	}



	.text_4 {
		overflow-wrap: break-word;
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}

	.image-text_3 {
		width: 83rpx;
		height: 31rpx;
		margin: 63rpx 0 0 46rpx;
	}

	.image_4 {
		width: 8rpx;
		height: 30rpx;
	}

	.text-group_3 {
		width: 61rpx;
		height: 30rpx;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 32rpx;
		margin-top: 1rpx;
	}

	.box_9 {
		width: 254rpx;
		height: 42rpx;
		margin: 28rpx 0 0 46rpx;
	}

	.text-wrapper_8 {
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		height: 42rpx;
		/* border: 1rpx solid rgba(255, 65, 2, 1); */
		border: 1rpx solid rgba(153, 153, 153, 1);
		color: rgba(153, 153, 153, 1);
		/* color: rgba(255, 65, 2, 1); */
		width: 120rpx;
	}

	.text_10 {
		overflow-wrap: break-word;
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}

	.image-text_4 {
		width: 81rpx;
		height: 31rpx;
		margin: 65rpx 0 0 46rpx;
	}

	.image_5 {
		width: 8rpx;
		height: 30rpx;
	}

	.text-group_4 {
		width: 61rpx;
		height: 31rpx;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 32rpx;
	}

	.box_10 {
		width: 254rpx;
		height: 42rpx;
		margin: 28rpx 0 0 46rpx;
	}

	.text-wrapper_10 {
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		height: 42rpx;
		color: rgba(153, 153, 153, 1);
		border: 1rpx solid rgba(153, 153, 153, 1);
		width: 120rpx;
	}

	.text_12 {
		overflow-wrap: break-word;
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}	
	.box_11 {
		/* margin: 0 auto; */
		position: absolute;
		bottom: 30rpx;
		left: 20rpx;
		width: 690rpx;
		height: 82rpx;
		
		/* margin-top: 363rpx; */
	}
	.text-wrapper_12 {
		width: 328rpx;
		height: 82rpx;
		border-radius: 10rpx;
		background-color: rgba(204, 204, 204, 1);
	}

	.text_15,.text_16 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		color: rgba(0, 0, 0, 1);
		font-size: 36rpx;
	}
	.text_16{
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psjxc19d0xe2vtvsele0afetrocst767728dcb269-62eb-47fa-b0e9-9a6e6bd407e6)
		    100% no-repeat;
		  background-size: 100% 100%;
		color: #fff;
	}
	.active {
		border: 1rpx solid rgba(255, 65, 2, 1);
		color: rgba(255, 65, 2, 1);
	}
</style>
