<template>
	<view>
		<view class="group_1 flex-col">
			<view class="box_1 flex-row">
				<view class="image-wrapper_1">
					<image class="label_2" referrerpolicy="no-referrer" src="/static/arrow-left-bold.png" />
				</view>
				<view class="text-wrapper_1">
					<text class="text_2">创建订单</text>
				</view>
				<view>

				</view>
			</view>
			<view class="box_3 flex-row">
				<img src="" alt="">
				<view class="title">
					<text class="title_1">立刷4G非押</text>
					<text class="title_2">嘉联支付</text>
				</view>
				<text class="title_num">￥680</text>
			</view>
		</view>
		<view class="label_1">
			<view class="left">购买数量</view>
			<view class="right">
				<view class="subtract" @click="subtract">-</view>
				<text class="num">{{count}}</text>
				<view class="add" @click="add">+</view>
			</view>
		</view>
		<view class="left2">
			收货地址
		</view>
		<view class="label_4">
			<view class="up">
				<img src="" alt="">
				<text class="name">张晓庆</text>
				<text class="phone">189*****269</text>
			</view>
			<view class="down">
				<img src="" alt="">
				<text class="adress">上海市/XX区X/XX路/步行街</text>
			</view>
		</view>
		<view class="textarea">
			<textarea class="texts" name="" id="" cols="30" rows="10" maxlength="-1" placeholder="请输入备注(选填)"
				placeholder-class="tt"></textarea>
			<text class="textarea_text">——喔刷伙伴 值得信赖——</text>
		</view>
		<view class="null">

		</view>
		<view class="order">
			<text class="order_text">订单金额</text>
			<text class="mony">￥680</text>
			<button class="order_button">立即申请</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 2
			}
		},
		methods: {
			subtract(){
				if(this.count==0) {
					this.count = 0
				}else{
					this.count--
				}
				
			},
			add(){
				this.count++
			}
		}
	}
</script>

<style>
	/deep/ uni-button {
		border: 0;
	}

	.group_1 {
		background-color: rgba(28, 83, 218, 1);
		position: relative;
		width: 750rpx;
		height: 340rpx;
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

	.label_3 {
		width: 30rpx;
		height: 30rpx;
		margin: 33rpx 0 0 6rpx;
	}

	.box_3 {
		position: absolute;
		background-color: #fff;
		border-radius: 18rpx;
		box-shadow: rgba(4, 0, 0, 0.1200) 1px 1px 10px;
		width: 690rpx;
		height: 340rpx;
		margin: 84rpx 0 28rpx 30rpx;
		padding: 0 42rpx;
		justify-content: space-between;
		align-items: center;
	}

	.box_3 img {
		width: 176rpx;
		height: 170rpx;
	}

	.title {
		display: flex;
		flex-direction: column;
		margin-left: -90rpx;
	}

	.title_1 {
		font-size: 30rpx;
		color: rgba(153, 153, 153, 1);
	}

	.title_2 {
		font-size: 28rpx;
		color: rgba(153, 153, 153, 1);
	}

	.title_num {
		font-size: 46rpx;
		color: rgba(255, 140, 0, 1);
	}

	.label_1 {
		margin-top: 160rpx;
		width: 100%;
		padding: 50rpx 32rpx;
		display: flex;
		justify-content: space-between;
	}

	.left {
		font-size: 38rpx;
	}

	.right {
		display: flex;
		align-items: center;
	}

	.subtract {
		width: 41rpx;
		height: 41rpx;
		font-size: 44rpx;
		border: 1px solid rgba(92, 149, 242, 1);
		color: rgba(92, 149, 242, 1);
		border-radius: 50%;
		text-align: center;
		line-height: 30rpx;
	}

	.num {
		width: 60rpx;
		text-align: center;
		/* margin: 0 20rpx; */
		font-size: 38rpx;
	}

	.add {
		width: 41rpx;
		height: 41rpx;
		font-size: 44rpx;
		background-color: rgba(92, 149, 242, 1);
		border: 1px solid rgba(92, 149, 242, 1);
		color: #fff;
		border-radius: 50%;
		text-align: center;
		line-height: 38rpx;
	}

	.left2 {
		font-size: 38rpx;
		padding-left: 32rpx;
	}

	.label_4 {
		width: 690rpx;
		height: 174rpx;
		margin: 0 auto;
		padding: 0 20rpx;
		margin-top: 20rpx;
		border: 1px solid rgba(191, 191, 191, 1);
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.up img {
		width: 49rpx;
		height: 49rpx;

	}

	.down img {
		width: 36rpx;
		height: 51rpx;
	}

	.up,
	.down {
		display: flex;
		align-items: center;
	}

	.name {
		font-size: 32rpx;
		color: rgba(102, 102, 102, 1);
		margin: 0 42rpx;
	}

	.phone {
		font-size: 32rpx;
		color: rgba(102, 102, 102, 1);
	}

	.adress {
		font-size: 32rpx;
		color: rgba(153, 153, 153, 1);
		margin-left: 42rpx;
	}

	.texts {
		padding: 25rpx 14rpx;
		width: 694rpx;
		height: 150rpx;
		border: 1px solid rgba(191, 191, 191, 1);
		border-radius: 10rpx;
		margin: 0 auto;
	}

	.tt {
		font-size: 28rpx;
		color: rgba(123, 136, 155, 1);
	}

	.buy_down {}

	.textarea {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 96rpx;
		height: 220rpx;
	}

	.textarea_text {
		text-align: center;
		font-size: 18rpx;
		color: rgba(123, 136, 155, 1);
	}

	.null {
		height: 180rpx;
	}

	.order {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 123rpx;
		box-shadow: rgba(4, 0, 0, 0.1800) 0px 9px 22px;
		background-color: #fff;
		padding: 0 30rpx 0 72rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.order_text {
		font-size: 28rpx;
		color: rgba(63, 119, 234, 1);
	}

	.mony {
		font-size: 46rpx;
		color: rgba(255, 140, 0, 1);
	}

	.order_button {
		width: 229rpx;
		height: 72rpx;
		text-align: center;
		line-height: 72rpx;
		background-color: rgba(63, 119, 234, 1);
		color: #fff;
	}

	.order_button::after {
		display: none;
	}
</style>
