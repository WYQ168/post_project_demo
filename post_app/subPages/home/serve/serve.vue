<template>
	<!-- 服务工单 -->
	<view>
		<view class="card" v-for="(item,index) in loopData">
			<view	>
				<image :src="item.src" mode="" class="img"></image>
			</view>
			<view class="">
				<text class="text_1">{{item.Text}}</text>
				<text class="text_2">{{item.Text2}}</text>
			</view>
			<view class="right">
				<image src="/static/home/right(1).png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loopData:[
					{
						src:"/static/home/edit.png",
						Text:"旺铺驳回修改",
						Text2:"最近记录：无",
						rightImg:''
					},
					{
						src:"/static/home/8wx.png",
						Text:"微信认证",
						Text2:"最近记录：无",
						rightImg:''
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{
		background-color: rgb(244, 244, 244);
	}
.card{
	position: relative;
	display: flex;
	align-items: center;
	width: 690rpx;
	height: 152rpx;
	margin: 0 auto;
	margin-top: 31rpx;
	background-color: #fff;
	padding-left: 44rpx;
}
.card .img{
	width: 78rpx;
	height: 77rpx;
}
..card .img image{
	width: 100%;
	height: 100%;
}
.card .text_1{
	position: absolute;
	top: 45rpx;
	left: 170rpx;
	font-size: 30rpx;
	color: #5A5A5A;
}
.card .text_2{
	position: absolute;
	bottom: 33rpx;
	left: 170rpx;
	font-size: 18rpx;
	color: #5A5A5A;
}
.card .right{
	position: absolute;
	right: 36rpx;
	width: 46rpx;
	height: 46rpx;
	border-radius: 50%;
	background-color: #999;
}
.card .right image{
	width: 100%;
	height: 100%;
}
</style>
