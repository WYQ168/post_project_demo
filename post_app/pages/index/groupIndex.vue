<template>
	<!-- 数据 -->
	<view class="page flex-col justify-between">
		<view class="section_1 flex-row">
			<view class="section_2 flex-col" @click="myIncome">
				<image class="image_6" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psebnhe6j9wb5w6l77ea0wha8cowhadytov6bddd962-e21c-4f6c-9aa0-290b0bb9b736" />
				<text class="text_1">我的收益</text>
			</view>
			<view class="section_2 flex-col" @click="mybill">
				<image class="image_2" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psu7ur8ypudxokm722zshyziljpyo4yyt259508cbe-eaff-473e-b343-b57a9503d43b" />
				<text class="text_3">我的账单</text>
			</view>
			<view class="section_2 flex-col" @click="toinvoice">
				<image class="image_4" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/psy2xe3e3yoe9ref28iq6ei3c4k860lsfab310b0-b2c2-4c14-a9d6-3d97d46c34fc" />
				<text class="text_5">发票助手</text>
			</view>
		</view>
		<view class="section_5 flex-col">
			<view class="list_1 flex-col">
				<view class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index">
					<view class="text-wrapper_1 flex-row">
						<text class="text_6" v-html="item.lanhutext0"></text>
					</view>
					<view class="group_2 flex-row justify-between">
						<!-- 个人业绩 -->
						<view class="text-wrapper_2" @click="Togrades">
							<text class="text_7" v-html="item.lanhutext1"></text>
						</view>
						<text class="text_8" v-html="item.lanhutext2"></text>
					</view>
					<view class="text-wrapper_3 flex-row justify-between">
						<text class="text_9" v-html="item.lanhutext3"></text>
						<text class="text_10" v-html="item.lanhutext4"></text>
					</view>
					<view class="text-wrapper_4 flex-row justify-between">
						<text class="text_11" v-html="item.lanhutext5"></text>
						<text class="text_12" v-html="item.lanhutext6"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loopData0: [{
						lanhutext0: '本月直营商户交易金额(元)',
						lanhutext1: '个人业绩',
						lanhutext2: '0.00',
						lanhutext3: '本月新增商户（户)',
						lanhutext4: '本月新增商户（户)',
						lanhutext5: '0',
						lanhutext6: '0',
					},
					{
						lanhutext0: '本月直营商户交易金额(元)',
						lanhutext1: '个人业绩',
						lanhutext2: '0.00',
						lanhutext3: '本月新增商户（户)',
						lanhutext4: '本月新增商户（户)',
						lanhutext5: '0',
						lanhutext6: '0',
					},
					{
						lanhutext0: '本月直营商户交易金额(元)',
						lanhutext1: '个人业绩',
						lanhutext2: '0.00',
						lanhutext3: '本月新增商户（户)',
						lanhutext4: '本月新增商户（户)',
						lanhutext5: '0',
						lanhutext6: '0',
					},
				],
				constants: {},
			};
		},
		methods: {
			myIncome(){
				uni.navigateTo({
					url:"/subPages/Datas/income/income"
				})
			},
			mybill(){
				uni.navigateTo({
					url:'/subPages/Datas/mybill/mybill'
				})
			},
			toinvoice(){
				uni.navigateTo({
					url:'/subPages/Datas/invoice/invoice'
				})
			},
			// 跳转到个人业绩页面
			Togrades(){
				uni.navigateTo({
					url:'/subPages/Datas/grades/grades'
				})
			}
		},
	};
</script>
<style>
	page{
		background-color: #E5E5E5;
	}
	.page {
		/* background-color: rgba(242, 242, 242, 1); */
		width: 100%;
	}

	.section_1 {
		align-items: flex-end;
		justify-content: space-around;
		width: 750rpx;
		height: 351rpx;
		padding-bottom: 60rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps63jdrnl9ksa7qx3nktgylvgb86cjausa71266c91-52a4-430e-91db-97a5cc967e34)
		    100% no-repeat;
		background-size: 100% 100%;
	}

	.section_2 {
		justify-content: flex-end;
		align-items: center;
		width: 125rpx;
	}

	.text_1 {
		width: 110rpx;
		height: 26rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
	}
	.image_6 {
		width: 58rpx;
		height: 60rpx;
	}


	.image_2 {
		width: 47rpx;
		height: 54rpx;
	}

	.text_3 {
		width: 110rpx;
		height: 27rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
		line-height: 60rpx;
	}


	.image_4 {
		width: 63rpx;
		height: 52rpx;
	}

	.text_5 {
		width: 110rpx;
		height: 27rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
		line-height: 60rpx;
	}

	
	.section_5 {
		/* background-color: rgba(229, 229, 229, 0.5); */
		/* height: 983rpx; */
		margin-left: 4rpx;
		width: 746rpx;
		position: relative;
	}

	.list_1 {
		width: 717rpx;
		height: 753rpx;
		margin: 24rpx 0 0 13rpx;
	}

	.list-items_1 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 15rpx;
		height: 234rpx;
		margin-bottom: 21rpx;
		width: 717rpx;
	}

	.text-wrapper_1 {
		width: 254rpx;
		height: 22rpx;
		margin: 32rpx 0 0 322rpx;
	}

	.text_6 {
		width: 254rpx;
		height: 22rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 22rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}

	.group_2 {
		width: 450rpx;
		height: 56rpx;
		margin: 25rpx 0 0 41rpx;
	}

	.text-wrapper_2 {
		background-image: linear-gradient(93deg,
				rgba(165, 196, 248, 1) 0,
				rgba(165, 196, 248, 1) 0,
				rgba(243, 246, 249, 1) 100%,
				rgba(243, 246, 249, 1) 100%);
		border-radius: 5rpx;
		height: 55rpx;
		line-height: 55rpx;
		margin-top: 1rpx;
		width: 183rpx;
		text-align: center;
	}

	.text_7 {
		overflow-wrap: break-word;
		color: rgba(16, 130, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}

	.text_8 {
		width: 67rpx;
		height: 28rpx;
		overflow-wrap: break-word;
		color: rgba(255, 140, 0, 1);
		font-size: 35rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}

	.text-wrapper_3 {
		width: 436rpx;
		height: 22rpx;
		margin: 2rpx 0 0 236rpx;
	}

	.text_9 {
		width: 181rpx;
		height: 22rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 22rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}

	.text_10 {
		width: 181rpx;
		height: 22rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 22rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}

	.text-wrapper_4 {
		width: 270rpx;
		height: 23rpx;
		margin: 17rpx 0 35rpx 318rpx;
	}

	.text_11 {
		width: 15rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(32, 32, 32, 1);
		font-size: 29rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}

	.text_12 {
		width: 15rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(32, 32, 32, 1);
		font-size: 29rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
	}
</style>
