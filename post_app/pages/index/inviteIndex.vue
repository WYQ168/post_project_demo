<template>
	<!-- 社区 -->
	<view class="page">
		<view class="box_3 flex-col">
			<view class="section_1" :style="{'margin-left':margin+'rpx'}"></view>
		</view>
		<view class="box_4 flex-col">
			<view class="list_1 flex-row">
				<view class="image-text_7 flex-col justify-between" v-for="(item, index) in loopData0" :key="index"
					@click="Community(index,$event)">
					<image class="image_6" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
					<text class="text-group_7" v-html="item.lanhutext0"></text>
				</view>
			</view>
		</view>
		<view class="box_1" v-if="currentIndex == 0">
			<view class="group_1">
				<view class="text_1" :class="current == 0?'active':''" @click="change(0)">
					<text class="">问候图</text>
				</view>
				<view class="text_1" :class="current == 1?'active':''" @click="change(1)">
					<text class="">日常海报</text>
				</view>
			</view>
			<view class="group_2 flex-row justify-between" v-if="current == 0">
				<view class="group_3 flex-row">
					<view class="image-text_1 flex-col justify-between">
						<image class="image_1" referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/pssrdys8yf83mvh2ax9na1zw0ku420ac7238aaf2-7982-4903-b4a6-ea1e8c33406a" />
						<view class="text-group_1 flex-row justify-between">
							<text class="text_3">2022-08-02</text>
							<text class="text_4">浏览99+</text>
						</view>
					</view>
				</view>
				<view class="group_4 flex-row">
					<view class="image-text_2 flex-col justify-between">
						<image class="image_2" referrerpolicy="no-referrer"
							src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0ed4ce85b7a142579687a08e42fcf3a2_mergeImage.png" />
						<view class="text-group_2 flex-row justify-between">
							<text class="text_3">2022-08-02</text>
							<text class="text_4">浏览99+</text>
						</view>
					</view>
				</view>
			</view>
			<view class="poster" v-if="current == 1">
				<view class="poster_image"></view>
				<view class="card">
					<view class="up">
						<text class="time">2022-08-04</text>
						<text class="dowlod">下载量：140</text>
					</view>
					<view class="keyword">
						关键词：喔刷伙伴，人生因为拼搏而精彩，好成绩靠的是持之以恒，好前程来源于永不懈怠。
					</view>
					<view class="yuan">
						<image src="/static/right (2).png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="box_2" v-if="currentIndex == 1">
			<view class="top">
				<image src=""></image>
			</view>
			<view class="dowm">
				<text class="time">2022-08-02</text>
				<text class="look">浏览99+</text>
			</view>
			<text class="past">往期回顾</text>
			<view class="cardList">
				<view class="pastcard" v-for="item in 6">
					<image src="" mode=""></image>
					<view class="catd_text">
						<text class="card_title">哦访谈：第二十六期</text>
						<view class="card_down">
							<text class="card_time">2022-08-02</text>
							<view class="down_right">
								<image class="zan" src="" mode=""></image>
								<text class="">64</text>
							</view>

						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="box_3" v-if="currentIndex == 2">
			222
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loopData0: [{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps87gwaf9c0o3ish9lzff632b8whd4iu26c97964e-1418-41e5-8920-d27b2e04a62a',
						lanhutext0: '宣传材料',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/pspnf0t1kac6nw6wiw2xmhyoy7ru7m3wu2e4c22dde6-500a-4697-907f-a6deeafeabfc',
						lanhutext0: '哦访谈',
					},
					{
						lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psqwm5l687ercir27s0mvj3m98y65eyfee45cc95ae-7c9f-48cd-96b3-5b0f47de715a',
						lanhutext0: '伙伴之声',
					},
				],
				margin: 83,
				current: 0,
				currentIndex: 0
			};
		},
		methods: {
			change(val) {
				this.current = val
			},
			Community(val, e) {
				this.currentIndex = val
				if (val == 0) {
					this.margin = 83
				} else if (val == 1) {
					this.margin = 340
				} else {
					this.margin = 590
				}
			}
		},
	};
</script>
<style>
	page {
		background-color: rgba(242, 242, 242, 1);
	}



	.section_1 {
		width: 68rpx;
		height: 53rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps5bh2djzz7xe4wfmsn2z89vwj5ernllj23bac8e4-1530-460a-ab98-8612f0b1aa0f) -1rpx 0rpx no-repeat;
		background-size: 70rpx 54rpx;
		margin-top: 229rpx;
	}

	.box_4 {
		height: 262rpx;
		background: -webkit-linear-gradient(top, #4580F3, #174ED6);
		background-size: 766rpx 265rpx;
		width: 750rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.section_2 {
		width: 711rpx;
		height: 26rpx;
		margin: 19rpx 0 0 24rpx;
	}

	.label_4 {
		width: 26rpx;
		height: 23rpx;
		margin-top: 2rpx;
	}

	.image_3 {
		width: 26rpx;
		height: 19rpx;
		margin: 4rpx 0 0 12rpx;
	}

	.text_7 {
		width: 59rpx;
		height: 19rpx;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: center;
		white-space: nowrap;
		line-height: 60rpx;
		margin: 3rpx 0 0 255rpx;
	}

	.image_4 {
		width: 20rpx;
		height: 26rpx;
		margin-left: 202rpx;
	}

	.text_8 {
		width: 59rpx;
		height: 20rpx;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 30rpx;
		margin: 2rpx 0 0 6rpx;
	}

	.image_5 {
		width: 36rpx;
		height: 20rpx;
		margin: 3rpx 0 0 10rpx;
	}

	.list_1 {
		justify-content: space-around;
	}

	.image-text_7 {
		align-items: center;
		width: 110rpx;
		height: 94rpx;
		margin: 151rpx 0 0 0;
	}

	.image_6 {
		width: 56rpx;
		height: 53rpx;
		/* margin-left: 27rpx; */
	}

	.text-group_7 {
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 28rpx;
		font-family: Adobe Heiti Std R;
		/* text-align: left; */
		white-space: nowrap;
		/* line-height: 60rpx; */
		/* margin-top: 21rpx; */
	}

	.box_1 {
		width: 750rpx;
		padding: 41rpx 41rpx 0;
	}

	.group_1 {
		display: flex;
		/* background-color: rgba(255, 255, 255, 1); */
		/* border-radius: 34rpx; */
		width: 316rpx;
		height: 68rpx;
		/* border: 1rpx solid rgba(20, 75, 213, 1); */
	}

	.text_1 {
		width: 156rpx;
		height: 100%;
		text-align: center;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 0.67);
		font-size: 32rpx;
		font-family: Adobe Heiti Std R;
		white-space: nowrap;
		line-height: 60rpx;
	}

	.active {
		color: #006DFF;
	}

	.group_2 {
		width: 100%;
		height: 448rpx;
		/* margin-top: 26rpx; */
	}

	.group_3 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		width: 322rpx;
	}

	.image-text_1 {
		width: 274rpx;
		height: 416rpx;
		padding: 17rpx 26rpx 0;
	}

	.image_1 {
		width: 269rpx;
		height: 376rpx;
	}

	.text-group_1,
	.text-group_2 {
		width: 255rpx;
	}

	.text_3 {
		width: 102rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 20rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
		margin-top: 1rpx;
	}

	.text_4 {
		width: 74rpx;
		overflow-wrap: break-word;
		color: rgba(102, 102, 102, 1);
		font-size: 20rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
	}

	.group_4 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		width: 322rpx;
	}

	.image-text_2 {
		width: 274rpx;
		height: 416rpx;
		padding: 17rpx 26rpx 0 26rpx;
	}

	.image_2 {
		width: 269rpx;
		height: 376rpx;
	}

	.group_5 {
		background-color: rgba(255, 255, 255, 1);
		width: 750rpx;
		height: 89rpx;
		margin-top: 403rpx;
	}

	.image-text_3 {
		width: 47rpx;
		height: 63rpx;
		margin: 15rpx 0 0 62rpx;
	}

	.label_1 {
		width: 34rpx;
		height: 30rpx;
		margin-left: 6rpx;
	}

	.text-group_3 {
		width: 47rpx;
		height: 23rpx;
		overflow-wrap: break-word;
		color: rgba(27, 27, 27, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
		margin-top: 10rpx;
	}

	.image-text_4 {
		width: 47rpx;
		height: 60rpx;
		margin: 18rpx 0 0 146rpx;
	}

	.label_2 {
		width: 38rpx;
		height: 27rpx;
		margin-left: 3rpx;
	}

	.text-group_4 {
		width: 47rpx;
		height: 22rpx;
		overflow-wrap: break-word;
		color: rgba(27, 27, 27, 1);
		font-size: 24rpx;
		font-family: Adobe Heiti Std R;
		text-align: left;
		white-space: nowrap;
		line-height: 59rpx;
		margin-top: 11rpx;
	}

	.image-text_5 {
		width: 45rpx;
		height: 63rpx;
		margin: 15rpx 0 0 146rpx;
	}

	.poster{
		padding-bottom: 150rpx;
	}
	.poster_image {
		width: 566rpx;
		height: 705rpx;
		margin: 0 auto;
		border-radius: 50rpx;
		background-color: #006DFF;
	}

	.card {
		position: relative;
		width: 505rpx;
		height: 209rpx;
		margin: 0 auto;
		padding: 40rpx 26rpx;
		background-color: #fff;
		border-radius: 50rpx;
		margin-top: -100rpx;
	}

	.up {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #5E5E5E;
	}

	.keyword {
		margin-top: 16rpx;
		font-size: 24rpx;
		color: #303030;
	}

	.yuan {
		position: absolute;
		right: -34rpx;
		bottom: -44rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pskp0y6nu1p9kbliwt9ja4sxpy48vss1jq905d0a6d-2fc5-45c6-9fc9-b8c9688233e6) 0px 0px no-repeat;
		background-size: 100% 100%;
		border-radius: 50%;
		width: 102rpx;
		height: 102rpx;
	}

	.yuan image {
		width: 64rpx;
		height: 64rpx;
	}

	.top {
		width: 696rpx;
		height: 275rpx;
		margin: 0 auto;
		margin-top: 48rpx;
		/* border-radius: 30rpx; */
	}

	.top image {
		width: 100%;
		height: 100%;
		background-color: #006DFF;
		border-radius: 30rpx;
	}

	.dowm {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 14rpx 30rpx;
		font-size: 20rpx;
		color: #666666;
	}

	.past {
		width: 100%;
		padding: 20rpx 30rpx;
		color: #427CF1;
		font-size: 30rpx;
	}

	.cardList {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		padding: 20rpx 30rpx;
	}

	.pastcard {
		width: 330rpx;
		height: 258rpx;
		background-color: #fff;
		margin-bottom: 30rpx;
	}

	.pastcard>image {
		width: 100%;
		height: 182rpx;
		border-radius: 10rpx 10rpx 0 0;
		background-color: #427CF1;
	}

	.catd_text {
		width: 100%;
		padding: 0 12rpx;
	}

	.card_title {
		font-size: 18rpx;
		color: #333333;
	}

	.card_down {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 16rpx;
	}

	.down_right .zan {
		width: 22rpx;
		height: 22rpx;
		background-color: #303030;
		margin-right: 14rpx;
		vertical-align: middle;
	}
	.box_2{
	}

	.box_3 {
		width: 100%;
		/* height: 260rpx; */
	}
</style>
