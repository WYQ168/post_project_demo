<template>
	<!-- 我的收益 -->
	<view>
		<view class="box" v-for="item in 4">
			<view class="time">2022-05</view>
			<view class="card">
				<view class="up"><text class="add">+</text><text class="num">290.00</text></view>
				<view class="down">
					<view class="left">
						<text class="mony">0.00</text>
						<text class="yuan">可用余额（元）</text>
					</view>
					<view class="right">
						<text class="mony">290.00</text>
						<text class="yuan">结算收益（元）</text>	
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.box{
	width: 100%;
	padding: 0 30rpx;
	margin-top: 32rpx;
}
.time{
	width: 100%;
	text-align: right;
	color: #999999;
	font-size: 18rpx;
}
.card{
	width: 100%;
	height: 198rpx;
	border: #E4E4E4 1px solid;
	padding-top: 40rpx;
}
.up{
	text-align: center;
	font-size: 36rpx;
	color: #FF4102;
	padding-bottom: 14rpx;
}
.up .add{
	border-bottom: #48A3FF 2px solid;
}
.up .num{
	padding-bottom: 1px;
	border-bottom: #48A3FF 1px solid;
}
.down{
	display: flex;
	justify-content: space-between;
	padding: 0 68rpx;
	margin-top: 22rpx;
}
.left,.right{
	display: flex;
	flex-direction: column;
	font-size: 18rpx;
}
.mony{
	color: #48A3FF;
}
.yuan{
	color: #999999;
}
</style>
