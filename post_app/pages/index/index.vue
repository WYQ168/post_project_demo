<template>
	<view class="page flex-col">
		<view class="block_1 flex-col">
			<view class="group_2 flex-row">
				<view class="image-wrapper_1 flex-col" @click="Tologin">
					<image class="image_4" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps45x7sqiqm0edyp78cw65097ge7ynil2pe3bbfc70d-8453-4022-a24b-7ebac19b9c11" />
				</view>
				<view class="block_2 flex-col justify-between">
					<text class="text_3" @click="userInfo">用户名</text>
					<view class="image-text_1 flex-row justify-between">
						<image class="image_5" referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9hhlof2fqjdcdhdt8wldnh8pn338vil9hb67e4748-8fc0-4304-b55e-9f4a0167afce" />
						<text class="text-group_1">183****2654</text>
					</view>
				</view>
				<image class="label_2" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psu1w2kjv0mr7c2kk5qckn23jv76mwi4f37c5385b-5130-48b8-956c-2451dc7c9772" />
			</view>
		</view>
		<view class="block_3 flex-col">
			<view class="grid_1 flex-row">
				<view class="image-text_2 flex-col justify-between" @click="gogogo(item.path)" v-for="item in homeItemList">
					<image class="image_6" referrerpolicy="no-referrer"
						:src="item.imgsrc" />
					<text class="text-group_2" >{{item.Text}}</text>
				</view>
			</view>
			<view class="swiper">
				<swiper :indicator-dots="true" :duration="1000" circular>
					<swiper-item v-for="(item,index) in 4" :key="index">
						<view class="block_4 flex-col">
							<text class="text_4">成就平凡人的创业梦想</text>
							<view class="text-wrapper_1 flex-col">
								<text class="text_5">立即查看</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="block_6 flex-col">
			<view class="text-wrapper_2 flex-row">
				<text class="text_6">实时更新&nbsp;&nbsp;只统计自身商户的交易数据</text>
			</view>
			<view class="group_4 flex-row">
				<view class="text_7" :class="dataActive == index?'text-wrapper_3':''" @click="dataType(index)" v-for="(item,index) in dataTy" :key="index">
					<text class="">{{item}}</text>
				</view>
			</view>
			<view class="" v-if="dataActive == 0">
				<view class="text-wrapper_4 flex-row">
					<text class="text_10">本月累计交易（元）</text>
				</view>
				<view class="text-wrapper_5 flex-row">
					<text class="text_11">0.00</text>
				</view>
				<view class="text-wrapper_6 flex-row justify-between">
					<text class="text_12">今日交易金额（元）</text>
					<text class="text_13">今日交易金额（元）</text>
				</view>
				<view class="text-wrapper_7 flex-row justify-between">
					<text class="text_14">0.00</text>
					<text class="text_15">0.00</text>
				</view>
			</view>
			<view class="" v-if="dataActive == 1">
				1
			</view>
			<view class="" v-if="dataActive == 2">
				2
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				dataTy:["交易数据","收益数据","激活数据"],
				dataActive:0,
				homeItemList:[
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/psmvrhk1cj32hgmhmm8pjvg3ek3i7h4ht48c535488-9caa-4a65-9fce-135d870321fb',
						Text:'我的商户',
						path:'/subPages/home/MyMerchant/MyMerchant'
					},
					
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/ps8vnsvknr688joruz8anunvymoqnt2fzedc2444ca-6567-4d49-b963-5222729e9aa4',
						Text:'我的机具',
						path:'/subPages/home/myMachine/myMachine'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/psmqwv7eehjo5kzzu6l0sw8zua0qo7e4c2e22fc87-1474-457d-8766-de754ae1452f',
						Text:'我的伙伴',
						path:'/subPages/home/myFriends/myFriends'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/psgi2rcfc9s4r6u49khbdzyshj6sz847qu6ca2dd0c-3393-48db-a148-feb196135a7a',
						Text:'旺铺入件',
						path:'/subPages/home/goodShop/goodShop'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/ps0ml2ulyu0r5ogu0ghrgpy3tftpgcsjth8d5c907ea5-9a3a-4c4c-bc5d-1fd2293b5717',
						Text:'积分兑换',
						path:'/subPages/home/poins/poins'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/psl9gu3e7kik9y0jcogwv0kq6j0bnv281c5b6c3ace-0a7d-4d9f-b4ac-f1749bc7f9b1',
						Text:'礼包活动',
						path:'/subPages/home/gift/gift'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/pspqh64i5184ks15jm6642icms62ece7hsb9d3626e-4bf2-41fb-95c6-b4c5b0149e49',
						Text:'汇智商城',
						path:'/subPages/home/mall/mall'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/psz7e5c5kn57b8rpc0o0o7n7x0pxeres9fbf1982a7-7cfe-4252-9f11-266d2e957b00',
						Text:'服务工单',
						path:'/subPages/home/serve/serve'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/pshwt9quigjcn2te71qr6atbmx67dov1r7a8d888552-9d30-44e7-85ad-3498535aa6be',
						Text:'排行榜',
						path:'/subPages/home/ranking/ranking'
					},
					{
						imgsrc:'https://lanhu.oss-cn-beijing.aliyuncs.com/pskzsfxpzltxfav2eq0kqn3h10tfuvpp0ypb1b78241d-a1fe-43f4-9bae-9a07d35ff825',
						Text:'流通券',
						path:'/subPages/home/Negotiable_securities/Negotiable_securities'
					}
				]
			};
		},
		methods: {
			gogogo(path){
				uni.navigateTo({
					url: path
				});
			},
			dataType(val){
				this.dataActive = val
				console.log(val);
			},
			userInfo(){
				uni.navigateTo({
					url:'/subPages/myIndex/userInfo/userInfo'
				})
			},
			Tologin(){
				uni.navigateTo({
					url:'/subPages/Login_regist/login_1/login_1'
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
		overflow: hidden;
	}

	.block_1 {
		/* height: 214rpx; */
		padding-top: 50rpx;
		background: -webkit-linear-gradient(left,#4681F4,#144BD5);
		width: 750rpx;
	}

	.group_2 {
		width: 706rpx;
		margin: 70rpx 0 32rpx 23rpx;
	}

	.image-wrapper_1 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 50%;
		height: 91rpx;
		width: 91rpx;
		margin-top: 16rpx;
	}

	.image_4 {
		width: 78rpx;
		height: 78rpx;
		margin: 6rpx 0 0 7rpx;
	}

	.block_2 {
		width: 155rpx;
		height: 79rpx;
		margin: 11rpx 0 0 21rpx;
	}

	.text_3 {
		width: 102rpx;
		height: 34rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 36rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
	}

	.image-text_1 {
		width: 170rpx;
		height: 27rpx;
		margin: 34rpx 0 0 4rpx;
	}

	.image_5 {
		width: 20rpx;
		height: 27rpx;
		vertical-align: middle;
	}

	.text-group_1 {
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 20rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;

	}

	.label_2 {
		width: 32rpx;
		height: 40rpx;
		margin: 2rpx 0 0 407rpx;
	}

	.block_3 {
		width: 100%;
	}

	.grid_1 {
		display: flex;
		justify-content: space-between;
		width: 689rpx;
		height: 200rpx;
		flex-wrap: wrap;
		margin: 38rpx auto;
		margin-bottom: 0;
	}

	.image-text_2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		margin-bottom: 44rpx;
	}

	.image-text_2:nth-last-child(-n + 5) {
		margin-bottom: 37rpx;
	}

	.image_6 {
		width: 72rpx;
		height: 77rpx;
		margin-left: 7rpx;
	}
	.text-group_2 {
		overflow-wrap: break-word;
		color: rgba(27, 27, 27, 1);
		font-size: 23rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}
	.image-text_2:nth-last-child(5) .image_6{
		width: 44rpx;
		height: 50rpx;
	}
	.image-text_2:nth-last-child(4) .image_6{
		width: 43rpx;
		height: 47rpx;
	}
	.image-text_2:nth-last-child(3) .image_6{
		width: 38rpx;
		height: 47rpx;
	}
	.image-text_2:nth-last-child(2) .image_6{
		width: 44rpx;
		height: 46rpx;
	}
	.image-text_2:nth-last-child(1) .image_6{
		width: 56rpx;
		height: 45rpx;
	}

	/deep/	.uni-swiper-dots-horizontal{
		bottom: 40rpx;
	}

	/deep/ .uni-swiper-dot  {
		width: 16rpx !important;
		height: 10rpx !important;
		background-color: rgba(255, 255, 255, .3);
		border-radius: 6rpx;
	}
	/deep/ .uni-swiper-dot-active {
		background-color: rgba(255, 255, 255, 1);
	}
	.swiper{
		border-bottom: solid 8rpx #F2F2F2;
		padding-bottom: 10rpx;
	}

	.block_4 {
		height: 203rpx;
		background-color: rgba(17, 40, 255, 1.0);
		border-radius: 14rpx;
		width: 708rpx;
		margin: 58rpx auto;
		margin-bottom: 0;
		padding-top: 40rpx;
	}

	.text_4 {
		width: 358rpx;
		height: 34rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 36rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		margin-bottom: 10rpx;
		margin-left: 23rpx;
	}

	.text-wrapper_1 {
		height: 61rpx;
		line-height: 61rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps0g08q012l5kzuqc60omy9kkwehowmy7k3b43d210-e896-4783-8873-b9b4e9670742) 0rpx 0rpx no-repeat;
		background-size: 189rpx 61rpx;
		width: 188rpx;
		margin: 22rpx 0 0 16rpx;
	}

	.text_5 {
		width: 100%;
		height: 100%;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		text-align: center;
		white-space: nowrap;
	}

	.group_3 {
		width: 74rpx;
		height: 10rpx;
		margin: 0 auto;
		margin-top: 17rpx;
	}
	.block_6 {
		box-shadow: 0rpx 1rpx 27rpx 0rpx rgba(4, 0, 0, 0.12);
		background-color: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		height: 408rpx;
		width: 705rpx;
		margin: 28rpx auto;
	}

	.text-wrapper_2 {
		justify-content: center;
		margin-top: 22rpx;
		width: 100%;
	}

	.text_6 {
		overflow-wrap: break-word;
		color: rgba(151, 185, 252, 1);
		font-size: 18rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}

	.group_4 {
		justify-content: space-between;
		width: 652rpx;
		margin: 0 auto;
		margin-top: 24rpx;
	}
	.text_7 {
		width: 183rpx;
		height: 55rpx;
		line-height: 55rpx;
		overflow-wrap: break-word;
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		text-align: center;
		white-space: nowrap;
		color: rgba(102, 102, 102, 1);
	}
	.text-wrapper_3 {
		color: #1082FF;
		background-image: linear-gradient(93deg,
				rgba(165, 196, 248, 1) 0,
				rgba(165, 196, 248, 1) 0,
				rgba(243, 246, 249, 1) 100%,
				rgba(243, 246, 249, 1) 100%);
		border-radius: 5rpx;
	}

	.text-wrapper_4 {
		width: 200rpx;
		height: 23rpx;
		margin: 46rpx 0 0 41rpx;
	}

	.text_10 {
		width: 200rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.text-wrapper_5 {
		width: 89rpx;
		height: 38rpx;
		margin: 23rpx 0 0 42rpx;
	}

	.text_11 {
		width: 89rpx;
		height: 38rpx;
		overflow-wrap: break-word;
		color: rgba(255, 140, 0, 1);
		font-size: 48rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.text-wrapper_6 {
		width: 490rpx;
		height: 23rpx;
		margin: 55rpx 0 0 43rpx;
	}

	.text_12 {
		width: 199rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.text_13 {
		width: 199rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.text-wrapper_7 {
		width: 336rpx;
		height: 19rpx;
		margin: 17rpx 0 44rpx 44rpx;
	}

	.text_14 {
		width: 45rpx;
		height: 19rpx;
		overflow-wrap: break-word;
		color: rgba(255, 140, 0, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.text_15 {
		width: 45rpx;
		height: 19rpx;
		overflow-wrap: break-word;
		color: rgba(255, 140, 0, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 36rpx;
	}

	.block_7 {
		background-color: rgba(242, 242, 242, 1);
		width: 750rpx;
		height: 10rpx;
		margin: 30rpx 0 30rpx 0;
	}
</style>
