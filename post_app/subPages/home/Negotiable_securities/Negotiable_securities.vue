<template>
	<!-- 流通券 -->
	<view class="group_1">
		<view class="box_1 flex-row">
			<view class="image-wrapper_1 flex-col justify-between">
				<image class="label_2" referrerpolicy="no-referrer"
					src="/static/arrow-left-bold.png" />
			</view>
			<view class="text-wrapper_1">
				<text class="text_2">流通券账户</text>
			</view>
			<view class="text-wrapper_2" @click="Toexchange">
				兑换记录
			</view>
		</view>
		<view class="count">
			<view class="left">
				<view class="text">可用账户余额（元）</view>
				<view class="num">120.00</view>
			</view>
			<view class="right">
				<view class="text">流通券数量（张）</view>
				<view class="num">12</view>
			</view>
		</view>
		<view class="section">
			<view class="sectionItem" :class="current == index?'active':''" :current="current"
				v-for="(item,index) in sectionItems" :key="index" @click="onClickItem(index)">{{item}}
			</view>
		</view>
		<view v-if="current === 0" class="content-text">
			<view class="buyList" v-for="item in buyList">
				<view class="buytext">{{item.name}}</view>
				<view class="button" @click="selectItem(item.path)">查看详情</view>
			</view>
		</view>
		<view v-if="current === 1" class="content-text">选项卡2的内容</view>
		<view v-if="current === 2" class="content-text">选项卡3的内容</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sectionItems: ["购买", "兑换", "兑出"],
				current: 0,
				buyList: [{
					name: "全款购买",
					path:''
				}, {
					name:"积分+现金购买",
					path:'/subPages/myIndex/pointsMony/pointsMony'
					
				}, {
					name: "现金+MPOS购买",
					path:'/subPages/myIndex/MPOSmony/MPOSmony'
				}]
			}
		},
		methods: {
			onClickItem(val) {
				console.log(val);
				if (this.current !== val) {
					this.current = val
				}
			},
			selectItem(path){
				uni.navigateTo({
					url:path
				})
			},
			Toexchange(){
				uni.navigateTo({
					url:'../../myIndex/exchange/exchange'
				})
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #F0F0F0;
	}

	.group_1 {
		background-color: rgba(28, 83, 218, 1);
		position: relative;
		width: 750rpx;
		height: 375rpx;
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

	.text-wrapper_2 {
		font-size: 28rpx;
		color: #fff;
	}

	.label_3 {
		width: 30rpx;
		height: 30rpx;
		margin: 33rpx 0 0 6rpx;
	}

	.count {
		width: 100%;
		display: flex;
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 48rpx;
		width: 50%;
		height: 112rpx;
	}

	.left {
		border-right: 1px solid #fff;
	}

	.text {
		font-size: 24rpx;
		color: #fff;
	}

	.num {
		margin-top: 42rpx;
		font-size: 48rpx;
		color: #fff;
	}

	/* -------------- */
	.section {
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		margin-top: 60rpx;

	}

	.sectionItem {
		width: 135rpx;
		text-align: center;
		padding-bottom: 16rpx;
		font-size: 28rpx;
		color: #666666;
		border-bottom: 3px transparent solid;
	}

	.active {
		border-bottom: 3px #48A3FF solid;
		border-radius: 0 0 3rpx 3rpx;
	}

	.content-text {
		width: 750rpx;
		margin-top: 25rpx;
	}

	.buyList {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		padding: 0 56rpx 0 72rpx;
		margin: 2px 0;
		background-color: #fff;
	}

	.buyList .buytext {
		font-size: 24rpx;
		font-weight: 500;
		color: #666666;
	}

	.buyList .button {
		box-sizing: content-box;
		text-align: center;
		width: 124rpx;
		color: #FF4102;
		border: #FF4102 solid 1px;
		padding: 8rpx 28rpx;
		font-size: 24rpx;
		border-radius: 77rpx;
	}
</style>
