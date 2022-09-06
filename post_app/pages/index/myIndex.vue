<template>
	<view class="page flex-col">
		<view class="block_1 flex-col justify-end">
			<view class="section_1 flex-col">
				<view class="list_1 flex-row">
					<view class="image-text_1 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
						<image class="image_1" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
						<text class="text-group_1" v-html="item.lanhutext0"  @click="bank"></text>
					</view>
				</view>
			</view>
			<view class="list_2 flex-col">
				<view class="list-items_1 flex-row" v-for="(item, index) in loopData1" :key="index">
					<image class="label_1" referrerpolicy="no-referrer" :src="item.lanhuimage0"  />
					<text class="text_1" v-html="item.lanhutext0"></text>
					<text class="text_2" v-html="item.lanhutext1"></text>
				</view>
			</view>
			<view class="section_2 flex-col">
				<view class="group_1 flex-row">
					<view class="image-text_2 flex-col justify-between" v-for="(item,index) in dataList" :key="index"
						@click="godataListItem(item.page)">
						<image class="label_2" referrerpolicy="no-referrer" :src="item.img" />
						<text class="text-group_2">{{item.text}}</text>
					</view>
				</view>
			</view>

		</view>
		<view class="block_2 flex-row justify-start">
			<!-- 头像 -->
			<view class="image-wrapper_2 flex-col" @click="Tologin">
				<img class="image_4" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps5spn6vvav1tdiowdmovbzrva6kw9yexg8d901019b-72dc-4cb5-978e-23445870e15b" />
			</view>
			<view class="block_4 flex-col">
				<text class="text_4" @click="userInfo">用户名</text>
				<view class="section_5 flex-row justify-between">
					<view class="image-text_14 flex-row justify-between">
						<image class="image_5" referrerpolicy="no-referrer"
							src="https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/p.png?sign=eed5c9dad163cd4ccac233a61fbb3c81&t=1661137732" />
						<text class="text-group_14">183****2654</text>
					</view>
					<image class="label_13" referrerpolicy="no-referrer"
						src="https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/more.png?sign=174a5ebb99030e8a8af881b85a8e1790&t=1661150532" />
				</view>
			</view>

		</view>
		<text class="text_6">推荐码：C000736</text>
		<view class="block_6">
			<view class="block" @click="Tomywallet">
				<view class="num">0.00</view>
				<view class="text">钱包账户（元）</view>
			</view>
			<view class="block" @click="Tomypoints">
				<view class="num">0</view>
				<view class="text">账户积分</view>
			</view>
			<view class="block" @click="Topoints">
				<view class="num">0</view>
				<view class="text">流通券账户（元）</view>
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
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psabuaqu88ynq1qkjt3u5k7qc82zljyvt551746c453-13c8-46e4-8728-bc99ea754d52',
						lanhutext0: '礼包',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps6weeb29d1ronsq3ue5n6xks6tapwcv0wmd356a5f4-671f-49c9-ac43-95986a059265',
						lanhutext0: '订单',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps9icym94qfu8z4xvz4yvoondamphvbyi9946d6d8-90b1-4c50-ae0d-ff858fe1a17d',
						lanhutext0: '购机',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psblo5phu9a7wpub015cx0pfyj0bfczwdetadbcec2a-23fc-4d8b-a81e-43dfe033aa19',
						lanhutext0: '银行卡',
					},
				],
				loopData1: [{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps5tvu43kzizwkztvya5vb9fqcjn8665lva9877391-82bd-492e-b174-707923973326',
						lanhutext0: '邀请加入',
						lanhutext1: '邀请伙伴有大礼',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps85h5d97ikiapdarns0m6qtrlmguv4fuca1ffe18-5f2d-4969-8341-53b586a75171',
						lanhutext0: '我的邀请人',
						lanhutext1: '江西展源信息公司',
					},
				],
				dataList: [{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/xin.png?sign=233478683dda01e2228cac2b8d73331d&t=1661148229",
						text: "投诉工单",
						page: '/subPages/myIndex/complaint/complaint'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/psq.png?sign=d366c01012afec12327e16436089e2c5&t=1661139836",
						text: "增量奖预估",
						page: '/'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/aa.png?sign=777f4ef42b24a7e5ea8fde3fe5244afe&t=1661148094",
						text: "标签",
						page: '/'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/ab.png?sign=9b368e4f90d75dc7a739dd9c2928f081&t=1661148142",
						text: "授权书",
						page: '/'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/gj.png?sign=a8ca2c58035d3bed94c34b6f59aeda89&t=1661148325",
						text: "设置",
						page: '/subPages/myIndex/Setting/Setting'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/wenhao.png?sign=e98c2ed26dd4c35c3aa872eb77133914&t=1661149782",
						text: "问题与帮助",
						page: '/'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/tanhao.png?sign=774855107c7cf2e9a060f727706bd92b&t=1661149839",
						text: "关于我们",
						page: '/subPages/myIndex/aboutOur/aboutOur'
					},
					{
						img: "https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/edit.png?sign=9cf168b63539f196b268b763c7d4b3dc&t=1661149883",
						text: "意见反馈",
						page: '/subPages/feedback'
					}
				],
				constants: {},
			};
		},
		methods: {
			godataListItem(path) {
				uni.navigateTo({
					url: path
				})
			},
			Tomywallet() {
				uni.navigateTo({
					url: '/subPages/myIndex/mywallet/mywallet'
				})
			},
			Tomypoints() {
				uni.navigateTo({
					url: '/subPages/myIndex/mypoints/mypoints'
				})
			},
			userInfo() {
				uni.navigateTo({
					url: '/subPages/myIndex/userInfo/userInfo'
				})
			},
			Topoints() {
				uni.navigateTo({
					url: '/subPages/myIndex/pointsMony/pointsMony'
				})
			},
			Tologin() {
				uni.navigateTo({
					url: '/subPages/Login_regist/login_1/login_1'
				})
			},
			bank() {
				console.log(0)
				uni.navigateTo({
					url:'/subPages/myIndex/bankCard/bankCard'
				});
			}

		}
	};
</script>
<style>
	page {
		background-color: rgba(242, 242, 242, 1);
	}

	.block_1 {
		background-color: rgba(229, 229, 229, 0.5);
		width: 750rpx;
		height: 993rpx;
		margin-top: 230rpx;
	}

	.section_1 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 19rpx 19rpx 20rpx 20rpx;
		height: 180rpx;
		width: 712rpx;
		margin: 160rpx 0 0 18rpx;
	}

	.list_1 {
		width: 592rpx;
		height: 96rpx;
		margin: 42rpx 0 0 61rpx;
	}

	.image-text_1 {
		width: 52rpx;
		height: 95rpx;
		margin-right: 125rpx;
	}

	.image_1 {
		width: 52rpx;
		height: 59rpx;
	}

	.text-group_1 {
		width: 72rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
		margin: 13rpx 0 0 2rpx;
	}

	.list_2 {
		width: 750rpx;
		height: 190rpx;
		margin-top: 23rpx;
		justify-content: space-between;
	}

	.list-items_1 {
		background-color: rgba(255, 255, 255, 1);
		width: 750rpx;
		height: 88rpx;
		margin-bottom: 14rpx;
	}

	.label_1 {
		width: 38rpx;
		height: 38rpx;
		margin: 25rpx 0 0 76rpx;
	}

	.text_1 {
		width: 118rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		margin: 34rpx 0 0 22rpx;
	}

	.text_2 {
		overflow-wrap: break-word;
		color: rgba(255, 140, 0, 1);
		font-size: 20rpx;
		font-family: Adobe Heiti Std R;
		text-align: right;
		white-space: nowrap;
		margin: 32rpx 0rpx 0 260rpx;
	}

	.section_2 {
		background-color: rgba(255, 255, 255, 1);
		width: 750rpx;
		height: 303rpx;
		margin-top: 24rpx;
	}

	.group_1 {
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		margin: 20rpx auto;
	}

	.image-text_2 {
		align-items: center;
		width: 25%;
		height: 85rpx;
		margin: 20rpx 0;
	}

	.label_2 {
		width: 50rpx;
		height: 48rpx;
	}

	.text-group_2 {
		width: 100%;
		height: 23rpx;
		text-align: center;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
	}

	.block_2 {
		position: absolute;
		left: 0;
		top: 0;
		width: 750rpx;
		height: 399rpx;
		background: url(https://636c-cloud1-4ge04zyie85f8672-1311921377.tcb.qcloud.la/psn.png?sign=80ea7658be1e1df2dc6674349fae2ea7&t=1661138887) 100% no-repeat;
		background-size: 100% 100%;
		padding-left: 40rpx;
	}

	.label_12 {
		width: 26rpx;
		height: 23rpx;
		margin: 32rpx 0 0 19rpx;
	}

	.block_3 {
		width: 91rpx;
		height: 225rpx;
		margin: 34rpx 0 0 12rpx;
	}

	.image_3 {
		width: 26rpx;
		height: 19rpx;
	}

	.image-wrapper_2 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 50%;
		height: 91rpx;
		margin-top: 164rpx;
		margin-right: 30rpx;
		width: 91rpx;
	}

	.image_4 {
		width: 78rpx;
		height: 78rpx;
		margin: 6rpx 0 0 7rpx;
	}

	.block_4 {
		margin: 40rpx 0 0 0rpx;
	}

	.text_3 {
		width: 59rpx;
		height: 19rpx;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: center;
		white-space: nowrap;
		line-height: 60rpx;
		margin-left: 169rpx;
	}

	.text_4 {
		width: 102rpx;
		height: 34rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 36rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
		margin-top: 116rpx;
	}

	.section_5 {
		width: 226rpx;
		height: 27rpx;
		margin: 42rpx 0 0 4rpx;
	}

	.image-text_14 {
		width: 174rpx;
		height: 27rpx;
	}

	.image_5 {
		width: 20rpx;
		height: 27rpx;
		vertical-align: top;
	}

	.text-group_14 {
		height: 19rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
	}

	.label_13 {
		width: 24rpx;
		height: 24rpx;
		margin-top: 2rpx;
	}

	.block_5 {
		position: relative;
		width: 280rpx;
		height: 319rpx;
		margin: 32rpx 0 0 71rpx;
	}

	.image-wrapper_3 {
		position: relative;
		width: 280rpx;
		height: 311rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps0po8foxk7zneexddn48um0q4kv2fr078yy34ad5c8d-84ae-4b80-9001-a5fe37005fed) 0rpx 0rpx no-repeat;
		background-size: 315rpx 311rpx;
		margin-top: 8rpx;
	}

	.image_6 {
		position: absolute;
		left: 129rpx;
		top: -10rpx;
		width: 20rpx;
		height: 26rpx;
	}

	.image_7 {
		position: absolute;
		left: 224rpx;
		top: -7rpx;
		width: 36rpx;
		height: 20rpx;
	}

	.text_5 {
		position: absolute;
		left: 155rpx;
		top: 0;
		width: 59rpx;
		height: 20rpx;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 30rpx;
	}

	.text_6 {
		position: absolute;
		left: 417rpx;
		top: 217rpx;
		width: 190rpx;
		height: 22rpx;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
	}

	.block_6 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 19rpx 19rpx 20rpx 20rpx;
		height: 178rpx;
		width: 712rpx;
		position: absolute;
		left: 18rpx;
		top: 299rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40rpx;
	}

	.block {
		flex: 1;
		text-align: center;
	}

	.num {
		font-size: 36rpx;
		color: #000000;
		font-weight: bold;
	}

	.text {
		font-size: 24rpx;
		color: #666666;
		margin-top: 14rpx;
	}
</style>
