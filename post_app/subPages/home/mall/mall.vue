<template>
	<!-- 汇智商城 -->
	<view>
		<view class="lunbobox">
			<view class="lunbo">
				<swiper :indicator-dots="true" :interval="3000" :duration="1000" circular>
					<swiper-item>
						<view class="swiper-item"><image src="/static/home/20220901152654.jpg"></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"><image src="/static/home/20220901152654.jpg"></image></view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="list">
			<view class="itemList">
				<view class="item" @click="changeList(0)" :class="current == 0?'active':''">推荐</view>
				<view class="item" @click="changeList(1)" :class="current == 1?'active':''">嘉联支付</view>
				<view class="item" @click="changeList(2)" :class="current == 2?'active':''">现代金控</view>
			</view>
			<view class="right">
				<view class="item_right1">
					<text class="time">按时间</text>
					<image class="img" src="" mode=""></image>
				</view>
				<view class="item_right2">
					<text class="price">按价格</text>
					<image class="img" src="" mode=""></image>
				</view>
			</view>

		</view>
		<view class="" v-if="current == 0">
			<view class="phoneList" v-for="item in phoneList" @click="product_details">
				<view class="phoneImg">
					<image :src="item.imgPath" mode=""></image>
				</view>
				<view class="phone_right">
					<view class="title">{{item.title}}</view>
					<view class="Details">
						<view class="Details_text">{{item.Details_text}}</view>
						<view class="Details_num">已售{{item.Details_num}}台</view>
					</view>
					<view class="num">
						<view class="much"><text>￥{{item.much}}</text>起</view>
						<view class="star_box">
							<image
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/psc28q72vwn8ehpkl2vbb87vwcz258aonoo84755e98-45d4-4f5e-9d90-69796288fea0"
								mode="" class="star" v-for="item in 4"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="" v-if="current == 1">2</view>
		<view class="" v-if="current == 2">3</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				phoneList:[
					{
						imgPath:'/static/home/8img_2.png',
						title:'立刷4G非押版',
						Details_text:'使用方便 收益清晰',
						Details_num:'52',
						much:'280'
					},
					{
						imgPath:'/static/home/8img_2.png',
						title:'立刷4G非押版',
						Details_text:'使用方便 收益清晰',
						Details_num:'52',
						much:'280'
					},
					{
						imgPath:'/static/home/8img_2.png',
						title:'立刷4G非押版',
						Details_text:'使用方便 收益清晰',
						Details_num:'52',
						much:'280'
					},
					{
						imgPath:'/static/home/8img_2.png',
						title:'立刷4G非押版',
						Details_text:'使用方便 收益清晰',
						Details_num:'52',
						much:'280'
					}
				]
			}
		},
		methods: {
			changeList(val) {
				this.current = val
			},
			product_details(){
				uni.navigateTo({
					url:'product_details'
				})
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #F1F1F1;
	}

	.lunbobox {
		width: 100%;
		padding: 30rpx 0 50rpx 0;
		background-color: #fff;
	}

	.lunbo {
		position: relative;
		width: 636rpx;
		height: 290rpx;
		margin: 0 auto;
	}

	.lunbo .swiper-item {
		width: 100%;
		height: 290rpx;
		border-radius: 20rpx;
		background-color: aqua;
	}
	.lunbo .swiper-item image{
		width: 100%;
		height: 100%;
	}

	/* /deep/ .uni-swiper-dots ,.uni-swiper-dots-horizontal{
		position: absolute;
		z-index: 100;
		bottom: -30px;
	} */
	/* /deep/ .uni-swiper-slide-frame{
		height: 80% !important;
	} */
	.list {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 96rpx;
		background-color: #fff;
		padding: 0 32rpx;
		margin: 1px 0 2px 0;
	}

	.itemList {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 404rpx;
	}

	.item {
		font-size: 28rpx;
		color: #999999;
		padding-bottom: 12rpx;
		border-bottom: transparent 2px solid;
	}

	.active {
		color: #48A3FF;
		border-bottom: #48A3FF 2px solid;
	}
	.right{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 200rpx;
	}

	.item_right1,
	.item_right2 {
		padding-bottom: 16rpx;
	}

	.time,
	.price {
		font-size: 24rpx;
	}

	.img {
		width: 11rpx;
		height: 15rpx;
		background-color: aqua;
		margin-left: 6rpx;
		vertical-align: middle;
	}
	.phoneList{
		display: flex;
		align-items: center;
		width: 100%;
		height: 250rpx;
		background-color: #fff;
		padding: 0 32rpx;
		margin-bottom: 16rpx;
	}
	.phoneList .phoneImg{
		width: 256rpx;
		height: 200rpx;
		background-color: #48A3FF;
		border-radius: 16rpx;
	}
	.phoneList .phoneImg image{
		width: 100%;
		height: 100%;
	}
	.phone_right{
		width: 398rpx;
		height: 100%;
		margin-left: 32rpx;
		padding-top: 72rpx;
	}
	.title{
		width: 100%;
		color: #333333;
		font-size: 28rpx;
	}
	.Details{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 24rpx;
	}
	.Details_text{
		font-size: 24rpx;
		color: #7B889B;
	}
	.Details_num{
		width: 130rpx;
		text-align: center;
		font-size: 18rpx;
		color: #5C95F2;
		background: -webkit-linear-gradient(top,#8FC1FF,#7AAFFA);
	}
	.num{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 8rpx;
	}
	.much{
		font-size: 27rpx;
		color: #7B889B;
	}
	.star {
		width: 33rpx;
		height: 33rpx;
		margin-right: 9rpx;
	}
	.much text{
		font-size: 46rpx;
		color: #2F70FF;
		padding-right: 14rpx;
	}
	.xing{
		width: 202rpx;
		height: 32rpx;
		background-color: #2F70FF;
	}
	
</style>
