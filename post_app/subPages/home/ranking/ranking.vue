<template>
	<!-- 排行榜 -->
	<view class="page">
		<view class="top">
			<view class="yesterday">昨日个人推广TOP20</view>
			<view class="two">
				<image src="" mode=""></image>
				<text>2.黄海芳</text>
			</view>
			<view class="one">
				<image src="" mode=""></image>
				<text>1.钟永琳</text>
			</view>
			<view class="three">
				<image src="" mode=""></image>
				<text>3.梁亚伯</text>
			</view>
		</view>
		<view class="toplist">
			<view class="list" v-for="(item,index) in topList">
				<view class="num">{{index+4}}</view>
				<view class="name">{{item.name}}</view>
				<view class="much">激活量：{{item.Number}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				topList:[
					{
						name:"廖戴军",
						Number:5
					},
					{
						name:"廖盛",
						Number:50
					},
					{
						name:"廖戴军",
						Number:5
					},
					{
						name:"廖戴军",
						Number:5
					},
					{
						name:"廖戴军",
						Number:5
					},
					{
						name:"廖戴军",
						Number:5
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
		background-color: #1C53DA;
	}
	.page{
		padding-bottom: 40rpx;
	}
	.top{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		padding: 0 30rpx;
		padding-top: 100rpx;
	}
	.yesterday{	
		position: absolute;
		left: 30rpx;
		top: 20rpx;
		width: 264rpx;
		height: 58rpx;
		font-size: 22rpx;
		text-align: center;
		color: #fff;
		padding: 10rpx 18rpx;
		border: #fff 1px solid;
		border-radius: 50rpx;
	}
	.one{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 255rpx;
		height: 315rpx;
		padding: 42rpx;
		background-color: #000;
		border-radius: 20rpx 20rpx 0 0;
	}
	.one image{
		width: 152rpx;
		height: 152rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-bottom: 16rpx;
	}
	.two,.three{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 44rpx;
		width: 188rpx;
		height: 254rpx;
		background-color: #E4BBC5;
		border-radius: 20rpx 20rpx 0 0;
	}
	.one{
		 background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pss93nxioj63moep942g5rtkq6tdq30yo1c701f9279-b177-4847-9dc2-126f5ed16d57)
		    100% no-repeat;
		  background-size: 100% 100%;
	}
	.two{
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psgtkxqumsf8uvrthjcjgvdnrju3rtj9z0ae7ee4a72-e7ec-4875-bbc4-c188bf7f5856)
		    100% no-repeat;
		  background-size: 100% 100%;
	}
	.three{
		 background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psv6zypxnh7s9i956g1glgrtaolx9ks2q3qd4680669-c341-41d8-a9ae-7a073b7465b8)
		    100% no-repeat;
		  background-size: 100% 100%;
	}
	.two image,.three image{
		width: 120rpx;
		height: 120rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-bottom: 16rpx;
	}
	.one text,.two text,.three text{
		font-size: 24rpx;
		color: #fff;
	}
	.toplist{
		width: 690rpx;
		/* height: 736rpx; */
		margin: 0 auto;
		margin-top: 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40rpx 26rpx;
		padding-left: 76rpx;
	}
	.num{
		width: 76rpx;
		height: 76rpx;
		border-radius: 50%;
		background-color: #CCCCCC;
		color: #fff;
		text-align: center;
		line-height: 76rpx;
	}
	.name{
		margin-left: -180rpx;
		font-size: 30rpx;
		color: #666666;
	}
	.much{
		width: 150rpx;
		white-space: nowrap;
		text-align: left;
		font-size: 28rpx;
		color: #FF6600;
	}
	
</style>
