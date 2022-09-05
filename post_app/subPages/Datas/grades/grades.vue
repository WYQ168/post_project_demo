<template>
	<view>
		<!-- 个人业绩 -->
		<view class="header">
			<view class="up">
				<view class="left"><image src="@/static/left.png"></image></view>
				<view class="personal">个人业绩</view>
				<view class="historyData" @click="historical_data">历史数据</view>
			</view>
			<view class="down">
				<view class="button" :class="currents == 0?'active':''" @click="change(0)">日维度</view>
				<view class="button" :class="currents == 1?'active':''" @click="change(1)">月维度</view>
				<view class="button" :class="currents == 2?'active':''" @click="change(2)">累计商户</view>
			</view>
		</view>
		<view class="" v-if="currents == 0">
			<view class="date">
				<view class="example-body">
					<uni-datetime-picker type="date" v-model="single" />
				</view>
			</view>
			<view class="addnum"><text class="text">新增商户数</text>（户）</view>
			<view class="nums">
				<view class="num_item" v-for="item in 8">
					<view class="mpos">mpos商户</view>
					<view class="much">0</view>
				</view>
			</view>
			<view class="partner">
				<view class="addn_partner"><text class="text">新增伙伴数</text>（户）</view>
				<view class="partner_num">14</view>
			</view>
			<view class="datas">
				<view class="transaction" :class="dataindex == 0?'selectData':''" @click="selectDataItem(0)">交易数据</view>
				<view class="all" :class="dataindex == 1?'selectData':''" @click="selectDataItem(1)">全部数据</view>
			</view>
			<view class="" v-if="dataindex==0">
				交易数据1
			</view>
			<view class="" v-if="dataindex==1">
				全部数据2
			</view>
		</view>
		<view class="" v-if="currents == 1">2</view>
		<view class="" v-if="currents == 2">3</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single:'',
				currents:0,
				dataindex:0
			}
		},
		methods: {
			change(val){
				this.currents = val
			},
			selectDataItem(val){
				this.dataindex = val
			},
			historical_data(){
				uni.navigateTo({
					url:'./../historical_data/historical_data'
				})
			}
		}
	}
</script>

<style scoped>
	.example-body {
		/* width: 98%; */
		border-radius:25rpx ;
	}
	.header{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		height: 295rpx;
		background-color: #4580F4;
		padding: 75rpx 15rpx 0 15rpx;
	}
	.up{
		display: flex;
		justify-content: space-between;
		padding-right: 58rpx;
	}
	.up .left{
		width: 58rpx;
		height: 58rpx;
	}
	.up .left image{
		width: 100%;
		height: 100%;
	}
	.personal{
		font-size: 36rpx;
		color: #fff;
	}
	.historyData{
		font-size: 28rpx;
		color: #fff;
	}
	.down{
		width: 100%;
		padding: 0 50rpx;
		display: flex;
		justify-content: space-between;
	}
	.button{
		width: 130rpx;
		height: 54rpx;
		text-align: center;
		line-height: 54rpx;
		background-color: #154CD6;
		font-size: 26rpx;
		border-radius: 27rpx;	
		color: #fff;
		opacity: .8;
	}
	.active{
		opacity: 1;
		color: #fff;
		background-color: #4580F4;
		border: #fff 1px solid;
	}
	.date{
		width: 650rpx;
		/* height: 78rpx; */
		margin: 30rpx auto;
		border: #4578E4 1px solid;
		border-radius: 25rpx;
		padding: 2px;
	}
	/deep/ .uni-date-x--border{
		border: none;
	}
	.addnum{
		width: 100%;
		font-size: 32rpx;
		color: #666;
		padding-left: 50rpx;
	}
	.text{
		padding-bottom: 12rpx;
		border-bottom: 2px solid #FF7B01;
	}
	.nums{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		padding: 40rpx 50rpx;
		/* margin-top: 30rpx; */
	}
	.num_item{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 140rpx;
		height: 87rpx;
		border: 1px solid #EEEEEE;
		border-radius: 10rpx;
		text-align: center;
		margin-top: 16rpx;
	}
	.mpos{
		font-size: 20rpx;
		color: #999s;
	}
	.much{
		color: #FF4702;
		font-size: 30rpx;
	}
	.partner{
		width: 100%;
		height: 126rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 60rpx;
		/* padding-bottom: 20rpx; */
		border-top: 3px solid #E6E6E6;
		border-bottom: 3px solid #E6E6E6;
	}
	.addn_partner{
		margin-top: -12rpx;
		font-size: 32rpx;
		color: #666;
	}
	.partner_num{
		color: #1082FF;
		font-size: 36rpx;
	}
	.datas{
		display: flex;
		width: 100%;
		margin-top: 50rpx;
		padding-left: 50rpx;
	}
	.transaction,.all{
		font-size: 24rpx;
		color: #999;
		margin-right: 32rpx;
	}
	.selectData{
		color: #414141;
	}
	
</style>
