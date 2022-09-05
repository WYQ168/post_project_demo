<template>
	<view>
		<view class="text">
			<text class="">1.请选择您要反馈的问题类型(必填)</text>
		</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd itemList" v-for="(item, index) in items" :key="item.value">
					<view class="itemtext">{{item.name}}</view>
					<view>
						<radio :value="item.value" :checked="index === current" color="rgba(255, 140, 0, 1)" class="itemRadio" />
					</view>
				</label>
			</radio-group>
		</view>
		<view class="text">
			<text class="">2.补充详细问题或意见(必填)</text>
		</view>
		<view class="textarea">
			<textarea class="mytext" name="" id="" cols="30" rows="10" maxlength="200" placeholder="请输入您的描述" placeholder-class="textpla"></textarea>
		</view>
		<view class="text">
			<text class="">3.请提供相关问题的截图或照片（0/4）</text>
		</view>
		<view class="img">
			<view class="addimg" @click="addimg">
				<text class="text11">+</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: 'USA',
						name: '功能问题',
						checked: 'true'
					},
					{
						value: 'CHN',
						name: '体验问题'
					},
					{
						value: 'BRA',
						name: '新功能建议'
					}
				],
				current: 0
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},
			addimg(){
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: rgba(240, 240, 240, 1);
	}
.text{
	padding: 38rpx 0 0 25rpx;
	color: rgba(63, 119, 234, 1);
	font-size: 24rpx;
}
.itemList{
	display: flex;
	justify-content: space-between;
	padding: 0 28rpx;
	height: 88rpx;
	line-height: 88rpx;
	background-color: #fff;
	margin-bottom: 1px;
}
.itemList:nth-of-type(1){
	border-top: 1px solid rgba(204, 204, 204, 1);
}
.itemList:last-child{
	border-bottom: 1px solid rgba(204, 204, 204, 1);
}
.itemtext{
	color: rgba(102, 102, 102, 1);
	font-size: 30rpx;
}
/deep/ uni-radio .uni-radio-input{
	width: 32rpx;
	height: 32rpx;
}
/deep/ uni-radio .uni-radio-input.uni-radio-input-checked:before{
	font-size: 16rpx;
}
.textarea{
	width: 100%;
	height: 264rpx;
	background-color: #fff;
	padding: 29rpx 28rpx;
	border-top: 1px solid rgba(204, 204, 204, 1);
	border-bottom: 1px solid rgba(204, 204, 204, 1);
}
.mytext{
	width: 100%;
	height: 100%;
}
.textpla{
	font-size: 30rpx;
	color: rgba(204, 204, 204, 1);
}
.img{
	width: 100%;
	height: 264rpx;
	padding: 28rpx 0 36rpx 30rpx;
	background-color: #fff;
}
.addimg{
	width: 160rpx;
	height: 200rpx;
	border: 1px dashed rgba(220, 220, 220, 1);
	text-align: center;
}
.text11{
	  width: 160rpx !important;
	  height: 100%;
	  color: rgba(217, 217, 217, 1);
	  font-size: 72px;
	  font-family: Adobe Heiti Std R;
	  white-space: nowrap;
	  line-height: 90px;
}
</style>
