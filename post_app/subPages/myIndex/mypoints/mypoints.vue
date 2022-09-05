<template>
	<!-- 积分账户-----我的积分 -->
	<view>
		<view class="box">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps93ruylb30u50ds5dpzneu860fxgfp4cghrj35d6a8b5-66ce-4ff3-a4b8-c2595fb38509" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">我的积分</text>
				</view>
				<view class="" @click="Todetail">
					<text class="text_3">明细</text>
				</view>
			</view>
			<view class="box_2">
				<view class="text_4">总可用积分</view>
				<view class="num_1">164</view>
			</view>
		</view>
		<view class="lists">
			<view class="item" :class="current == 0?'item_active':''" @click="selectItem(0)">通用积分</view>
			<view class="item" :class="current == 1?'item_active':''" @click="selectItem(1)">活动积分</view>
		</view>
		<view class="" v-if="current == 0">
			<view class="pointList" v-for="item in pointLists">
				<text class="listTitle">{{item.listTitle}}</text>
				<view class="listRight">
					<text class="listpoint">{{item.listpoint}}</text>
					<text class="num">{{item.num}}</text>
				</view>
			</view>
		</view>
		<view class="" v-if="current == 1">
			2
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				pointLists:[
					{
						listTitle:'MPOS普通积分',
						listpoint:'可用积分：',
						num:'0'
					},
					{
						listTitle:'电签普通积分',
						listpoint:'可用积分：',
						num:'0'
					},
					{
						listTitle:'传统旺铺POS',
						listpoint:'可用积分：',
						num:'0'
					},
					{
						listTitle:'旺铺智能POS',
						listpoint:'可用积分：',
						num:'0'
					},
					
					{
						listTitle:'电签普通积分',
						listpoint:'可用积分：',
						num:'0'
					},
					{
						listTitle:'传统旺铺POS',
						listpoint:'可用积分：',
						num:'0'
					}
				]
			}
		},
		methods: {
			selectItem(val){
				this.current = val
			},
			Todetail(){
				uni.navigateTo({
					url:"/subPages/myIndex/pointDetail/pointDetail"
				})
			}
		}
	}
</script>

<style>
	.box{
		padding-top: 75rpx;
		background-color: #1C53DA;
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
	.text_3{
		display: flex;
		line-height: 83rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	.box_2{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 200rpx;
	}
	.text_4{
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.num_1{
		color: #FFFFFF;
		font-size: 60rpx;
		margin-top: 32rpx;
	}
	.lists{
		width: 100%;
		height: 114rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		border-bottom: 22rpx solid #F0F0F0;
	}
	.item{
		font-size: 28rpx;
		color: #999999;
		padding-bottom: 16rpx;
		border-bottom:  3px solid transparent;
	}
	.item_active{
		color: #48A3FF;
		border-bottom:  3px solid #48A3FF;
	}
	.pointList{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 88rpx;
		padding: 0 32rpx;
		border-bottom: 1px solid rgba(240, 240, 240, 1);
	}
	.listTitle{
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
	}
	.listpoint{
		font-size: 28rpx;
		color:rgba(153, 153, 153, 1);
	}
	.num{
		font-size: 28rpx;
		color: rgba(255, 140, 0, 1);
	}
</style>
