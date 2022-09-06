<template>
	<!-- 商品详情 -->
	<view>
		<view class="product_img">
			<image src="" mode=""></image>
		</view>
		<view class="product_detail">
			<view class="left">
				<text class="title">立刷4G非押</text>
				<text class="left_text">使用方便 收益清晰</text>
				<view class="star_box">
					<image
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/psc28q72vwn8ehpkl2vbb87vwcz258aonoo84755e98-45d4-4f5e-9d90-69796288fea0"
						mode="" class="star" v-for="item in 4"></image>
				</view>
			</view>
			<view class="right">
				<text class="right_text">评分</text>
				<text class="score">4.9</text>
			</view>
		</view>
		<view class="goodlist">
			<view class="good_item" v-for="item in 4">
				<image src="" mode=""></image>
				<text class="good_text">一诺千金</text>
			</view>
		</view>
		<view class="down">
			<text class="down_text">产品品牌</text>
			<text class="down_text">嘉联支付</text>
		</view>
		<view class="down">
			<text class="down_text">产品型号：</text>
			<text class="down_text"></text>
		</view>
		<button class="buy" @click="TocreateOrder">立即购买</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			TocreateOrder(){
				uni.navigateTo({
					url:'./create_order'
				})
			}
		}
	}
</script>

<style>
	.product_img {
		width: 100%;
		height: 365rpx;
		background-color: aqua;
	}

	.product_img image {
		width: 100%;
		height: 100%;
	}

	.product_detail {
		width: 100%;
		padding: 60rpx 46rpx 0 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.left {
		display: flex;
		flex-direction: column;
	}

	.title {
		color: title;
		font-size: 38rpx;
	}

	.left_text {
		color: rgba(123, 136, 155, 1);
		font-size: 28rpx;
		margin: 10rpx 0;
	}

	.star_box {}

	.star {
		width: 33rpx;
		height: 33rpx;
		margin-right: 9rpx;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 97rpx;
		height: 132rpx;
		background-color: rgba(63, 119, 234, 1);
		color: #fff;
		font-size: 34rpx;
		border-radius: 20rpx;
	}

	.score {
		font-size: 43rpx;
	}
	.goodlist{
		width: 100%;
		margin: 60rpx 0;
		display: flex;
		justify-content: space-around;
	}
	.good_item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 129rpx;
		height: 133rpx;
		border: 1px solid rgba(191, 191, 191, 1);
		border-radius: 10rpx;
	}
	.good_item image{
		width: 40rpx;
		height: 48rpx;
		background-color: aqua;
	}
	.good_item .good_text{
		font-size: 28rpx;
		color: rgba(123, 136, 155, 1);
	}
	.down{
		width: 716rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin: 0 auto;
		margin-bottom: 16rpx;
		/* border: 1px solid rgba(123, 136, 155, 1); */
		border-radius: 10rpx;
		box-shadow: rgba(92, 149, 242, 0.1700) 1px 1px 5px;
		display: flex;
		justify-content: space-between;
		padding: 0 16rpx;
	}
	.down_text{
		font-size: 30rpx;
		color: rgba(123, 136, 155, 1);
	}
	.buy{
		position: fixed;
		bottom: 0;
		left: 28rpx;
		margin: 0 auto;
		width: 694rpx;
		height: 72rpx;
		background-color: rgba(63, 119, 234, 1);
		color: #fff;
		text-align: center;
		line-height: 72rpx;
	}
	/deep/ uni-button{
		border: none;
	}
</style>
