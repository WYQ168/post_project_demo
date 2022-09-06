<template>
	<view>
		<view class="top-about">
			<view class="line">
				<text class="text">持卡人</text>
				<text class="text1">*利</text>
			</view>
			<view class="line">
				<text class="text">手机号码</text>
				<text class="text1">199****3920</text>
			</view>
			<view class="line">
				<text class="text">身份证号码</text>
				<text class="text1">36**************79</text>
			</view>
		</view>
		<view class="center-about">
			<view class="line">
				<text class="text">银行卡</text>
				<text class="text1">
					<input type="text" placeholder="请输入银行卡号">
				</text>
			</view>
			<view class="line">
				<text class="text">开户行</text>
				<text class="text1">
					<input type="text" placeholder="请选择开户行">
				</text>
			</view>
		</view>
		<view class="input_3">
			<input type="text" placeholder="请输入验证码">
			<button class="button">获取验证码</button>
		</view>
		<view class="next">
			<button>下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	/deep/ uni-button{
		border: none;
		border-radius: 0;
	}
	/deep/ uni-button::after{
		border: none;
		border-radius: 0;
	}
	.input_3{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 24rpx 0;
		background-color: #fff;
		
		height: 90rpx;
		input{
			padding-left: 80rpx;
		}
	}
	page {
		background-color: rgba(240, 240, 240, 1);
	}

	.top-about,
	.center-about {
		margin-top: 30rpx;
	}

	.header image {
		width: 336rpx;
		height: 162rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.line {
		width: 100%;
		height: 88rpx;
		padding: 0 34rpx 0 20rpx;
		margin-bottom: 1px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
	}

	.text {
		font-size: 28rpx;
		color: rgba(51, 51, 51, 1);
	}

	.text1 {
		font-size: 28rpx;
		color: rgba(153, 153, 153, 1);
	}

	.right {
		width: 50rpx;
		height: 50rpx;
	}
	.button{
		width: 250rpx;
		color: #fff;
		background: #3F77EA;
	}
	.next>button{
		margin:  0 auto;
		width: 80%;
		color: #fff;
		background: #3F77EA;
		border-radius: 10rpx;
	}
</style>
