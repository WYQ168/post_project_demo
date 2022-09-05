<template>
	<view>
		<view class="header">
			<view class="up">
				<image src="" mode=""></image>
				<text>智能客服</text>
			</view>
			<view class="middle">
				<view class="logoImg">
					<image src="" mode=""></image>
				</view>
				<view class="text">
					<text class="text_up">欢迎来到</text>
					<text>汇智管家</text>
				</view>
			</view>
			<view class="dowm">
				<view class="down_left" :class="current==0?'active':''" @click="select(0)">登陆</view>
				<view class="down_right" :class="current==1?'active':''" @click="select(1)">注册</view>
			</view>
		</view>
		<view class="" v-if="current == 0">
			<view class="login_input">
				<image src="" mode=""></image>
				<input class="input" type="number	" name="" id="" placeholder="请输入您的手机号" placeholder-class="pla">
			</view>
			<view class="login_input" v-if="show">
				<image src="" mode=""></image>
				<input class="input" type="text" name="" id="" placeholder="请输入密码" placeholder-class="pla">
			</view>
			<view class="login_input" v-if="!show">
				<image src="" mode=""></image>
				<view class="Code1">
					<view class="code-errow" v-if="codeclolor == '#ff0000'">验证码输入错误</view>
					<input class="cinput" adjust-position="false" auto-blur="true" @blur="blur" @input="codenum"
						:focus="focus" value="code" v-model="code" type="number" maxlength="6" />
					<view class="code-input">
						<view v-for="(item,index) in 4" :key="index" @click="codefocus(index)"
							:style='(index == code.length? "border-bottom: 4rpx solid #000000;width: 53rpx;":"color: " + codeclolor + ";" +"border: 2rpx solid" + codeclolor)'>
							{{code[index]}}
						</view>
					</view>
				</view>


				<button class="getcode">发送验证码</button>
			</view>
			<view class="code" @click="loginCode" v-if="show">验证码登录</view>
			<view class="code" @click="loginCode" v-if="!show">账号密码登陆</view>
			<button class="login_button">立即登陆</button>
			<view class="forget" @click="forget" v-if="show">忘记密码</view>
			<view class="agreen">
				<view class="yuan" :class="isagreen?'addagreen':''" @click="addagreen"></view>
				<text>我已阅读并同意《用户协议》和隐私协议</text>
			</view>
		</view>
		<view class="" v-if="current == 1">
			<view class="login_input">
				<image src="" mode=""></image>
				<input class="input" type="number" name="" id="" placeholder="请输入您的手机号" placeholder-class="pla">
			</view>
			<view class="login_input">
				<image src="" mode=""></image>
				<view class="Code1">
					<view class="code-errow" v-if="codeclolor == '#ff0000'">验证码输入错误</view>
					<input class="cinput" adjust-position="false" auto-blur="true" @blur="blur" @input="codenum"
						:focus="focus" value="code" v-model="code" type="number" maxlength="6" />
					<view class="code-input">
						<view v-for="(item,index) in 4" :key="index" @click="codefocus(index)"
							:style='(index == code.length? "border-bottom: 4rpx solid #000000;width: 53rpx;":"color: " + codeclolor + ";" +"border: 2rpx solid" + codeclolor)'>
							{{code[index]}}
						</view>
					</view>
				</view>

				<button class="getcode">发送验证码</button>
			</view>
			<view class="code" @click="login">已有账号 立即登录</view>
			<button class="login_button">立即注册</button>
			<view class="agreen">
				<view class="yuan" :class="isagreen?'addagreen':''" @click="addagreen"></view>
				<text>我已阅读并同意《用户协议》和隐私协议</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				show: true,
				isagreen: false,
				// 验证码输入聚焦
				focus: true, //input焦点，用于键盘隐藏后重新唤起
				// 验证码框颜色
				codeclolor: "#313131", //自定义光标的颜色
				// 验证码获取秒数
				code: '', //这是用户输入的验证码

			}
		},
		watch: {
			value(newVal) {
				this.code = newVal.split('');
			},
			code(newVal) {
				this.$emit('input', newVal.join(''));
			}
		},
		methods: {
			select(val) {
				this.current = val
			},
			loginCode() {
				this.show = !this.show
			},
			login() {
				this.current = 0
			},
			forget() {
				uni.navigateTo({
					url: '../forgetPsssword/forgetPsssword'
				})
			},
			addagreen() {
				this.isagreen = !this.isagreen
			},
			// 输入验证码
			codenum: function(event) {
				var that = this
				var code = event.target.value
				that.code = code
				if (code.length == 4) {
					if (code == '1234') {
						//输入六位验证码后自动进行验证并执行验证成功的函数
					} else {
						that.codeclolor = "#ff0000"
						setTimeout(function() {
							that.code = ""
							event.target.value = ""
							that.codeclolor = " #313131"
						}, 1500)
					}
				}
			},
			// 键盘隐藏后设置失去焦点
			blur: function() {
				var that = this
				that.focus = false
			},
			// 点击自定义光标显示键盘
			codefocus: function(e) {
				var that = this
				if (e == that.code.length) {
					that.focus = true
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	/* -------------- */
	/deep/ uni-button {
		border: none;
	}

	.Code1 {
		margin: 0 auto;
		position: relative;
		height: auto;
	}



	.code-errow {
		position: absolute;
		bottom: -50rpx;
		width: 650rpx;
		height: 50rpx;
		line-height: 25rpx;
		font-size: 28rpx;
		font-weight: normal;
		color: #ff0000;
	}

	.code-tip>text {
		padding: 0 20rpx;
		width: 650rpx;
		font-size: 30rpx;
		font-weight: normal;
		color: #ff5500;
	}

	.code-input {
		margin: auto;
		height: 70rpx;
		display: flex;
	}

	.code-input>view {
		margin-top: 5rpx;
		margin-left: 15rpx;
		width: 53rpx;
		height: 66rpx;
		line-height: 66rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: #313131;
		text-align: center;
		border: none !important;
		border-bottom: #D2D2D2 1px solid !important;
	}

	.code-input>view:nth-child(1) {
		margin-left: 0rpx;
	}

	.cinput {
		position: fixed;
		left: -100rpx;
		width: 53rpx;
		height: 40rpx;
	}

	.header {
		width: 100%;
		height: 445rpx;
		background: -webkit-linear-gradient(top, #4681F4, #144BD5);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 80rpx 30rpx 40rpx;
	}

	.up {
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.up image {
		width: 37rpx;
		height: 38rpx;
		background-color: #fff;
		border-radius: 50%;
	}

	.up text {
		margin-top: 16rpx;
		font-size: 18rpx;
		color: #fff;
	}

	.middle {
		width: 250rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.middle .logoImg {
		width: 87rpx;
		height: 87rpx;
		background-color: #fff;
		border-radius: 50%;
	}

	.middle .logoImg image {
		width: 100%;
		height: 100%;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 30rpx;
		color: #fff;
	}

	.text_up {
		margin-bottom: 16rpx;
	}

	.dowm {
		width: 100%;
		display: flex;
		justify-content: space-around;
		color: rgba(255, 255, 255, .7);
		font-size: 36rpx;
	}

	.dowm .active {
		color: rgba(255, 255, 255, 1);
	}

	.login_input {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		padding: 0 90rpx;
		margin-top: 100rpx;
	}

	.login_input image {
		width: 42rpx;
		height: 52rpx;
		background-color: #4681F4;
		margin-right: 10rpx;
		align-self: flex-start;
	}

	.pla {
		color: #454545;
		font-size: 24rpx;
		font-weight: 500;
	}

	.login_input .input {
		height: 70rpx;
		padding: 10rpx 42rpx 26rpx;
		border-bottom: #D2D2D2 solid 1px;
	}

	.codeitem {
		width: 53rpx;
		height: 70rpx;
		margin-right: 27rpx;
		padding-bottom: 26rpx;
		border-bottom: #D2D2D2 solid 1px;
		text-align: center;
	}

	.getcode {
		width: 173rpx;
		height: 70rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius: 40rpx;
		color: #fff;
		background: -webkit-linear-gradient(top, #A5C0F4, #316AE7);
	}

	.getcode::after {
		display: none;
		content: "";
	}

	.code {
		font-size: 24rpx;
		text-align: center;
		margin: 0 auto;
		margin-top: 84rpx;
		background: linear-gradient(180deg, #888AFF 100%, #888AFF 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.agreen {
		position: fixed;
		bottom: 94rpx;
		left: 110rpx;
		display: flex;
		align-items: center;

		/* justify-content: center; */
		font-size: 24rpx;
		text-align: center;
		margin-top: 44rpx;
		background: linear-gradient(180deg, #888AFF 100%, #888AFF 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.agreen .yuan {
		width: 22rpx;
		height: 22rpx;
		margin-right: 30rpx;
		border: solid 1px #959595;
		border-radius: 50%;
	}

	.addagreen {
		background-color: #506FFF;
		border: none !important;
	}

	.login_button {
		width: 392rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background: -webkit-linear-gradient(top, #9DBAF3, #3069E6);
		border-radius: 44rpx;
		margin: 34rpx auto;
		color: #fff;
	}

	.forget {
		margin-top: 126rpx;
		text-align: center;
		font-size: 24rpx;
		/* color: #506FFF; */
		background: linear-gradient(180deg, #888AFF 100%, #888AFF 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
