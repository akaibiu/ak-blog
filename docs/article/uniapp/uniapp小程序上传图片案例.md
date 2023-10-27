

# :apple: uniapp小程序上传图片案例



>在日常小程序开发中，经常会遇到上传图片的问题，接下来这个案例带大家展示一下如何做图片上传，一起看看吧....

>fileList就是图片上传图片成功后的数组，后面的photos是base64的图片数组，看自己情况所需，下面的大小控制，图片张数等你需要自己改一下哦。



```vue
<template>
	<view class="imgUploadBox">
		<view class="houseImg" v-for="(item,index) in fileList" :key="index">
			<image :src="item" @click="preViewImg(item)" mode="widthFix" class="img"></image>
			<text class="deleteImg" @click="deletePic(index)">删除</text>
			<!-- 删除这个地方自行替换成自己的样式 -->
		</view>
		<view class="addImg" style="display: flex;justify-content: center;align-items: center;" @click="addPic()"
			v-if="fileList.length <9">
			<view class="txt">添加图片</view>
		</view>
	</view>
</template>
<script>
	// 若后接口需要base编码的且无单独图片上传接口,实现图片上传预览等一系列操作可用详读此篇文章
	photos: [
		'fsdfssfsf/fsfwerwe/aerrw/.jpg',
		'fsdfssfsf/fsfwerwe/aerrw/.ppg',
		'fsdfssfsf/fsfwerwe/aerrw/.jpg',
	];
	export default {
		data() {
			return {
				fileList: [], // 图片上传过后的展示数组
				photos: [], // 请求接口的参数数组
			};
		},
		methods: {
			addPic() {
				let that = this;
				uni.chooseImage({
					sizeType: ["original", "compressed"],
					sourceType: ["album"],
					extension: ["jpg", "png"],
					count: 3, // 上传照片数量限制
					success: (res) => {
						uni.showLoading({
							title: "图片上传中...",
							mask: true,
						});
						console.log(res, "图片上传文件数组");
						res.tempFiles.forEach((item, index) => {
							// 判断上传照片大小是否超多2mb
							if (item.size >= 2097152) {
								uni.showToast({
									title: "图片上传限制在2MB以内哦 ~",
									icon: "none",
									duration: 1500,
								});
								res.tempFiles.splice(index, 1);
							}
							if (
								item.path.indexOf(".png") != -1 ||
								item.path.indexOf(".jpg") != -1
							) {
								uni.showToast({
									title: "图片格式正确!",
									icon: "none",
									duration: 1500,
								});
							} else {
								uni.showToast({
									title: "请您上传正确的图片格式!(只允许上传后缀名为.png或者.jpg)",
									icon: "none",
									duration: 2000,
								});
								res.tempFiles.splice(index, 1);
							}
						});
						res.tempFilePaths.forEach((item, index) => {
							if (item.indexOf(".png") != -1 || item.indexOf(".jpg") != -1) {} else {
								res.tempFilePaths.splice(index, 1);
							}
						});
						let tempList = [...that.fileList, ...res.tempFilePaths]; //临时显示
						if (tempList.length > 3) {
							//提示用户 最多只能上传3张
							uni.showToast({
								title: "最多只能上传3张图片哦～",
								icon: "none",
								duration: 1500,
							});
						} else {
							that.fileList = tempList;
							that.fileList.forEach((item, index) => {
								// 图片转base64格式
								uni.getFileSystemManager().readFile({
									filePath: that.fileList[index], //选择图片返回的相对路径
									encoding: "base64", //编码格式
									success: (res) => {
										//成功的回调
										// that.photos[0] = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
										that.photos[index] = res.data;
									},
									fail: (e) => {
										console.log("图片转换失败");
									},
								});
							});
							uni.hideLoading();
						}
					},
				});
			},
			//删除上传
			deletePic(index) {
				this.fileList.splice(index, 1);
				this.photos.splice(index, 1);
			},
			//点击打开预览
			preViewImg(currentSrc) {
				uni.previewImage({
					current: currentSrc,
					urls: this.fileList
				});
			},
		},
	};
</script>
<style lang="less" scoped>
	.imgUploadBox {
		padding: 10rpx;
		box-sizing: border-box;
		.houseImg {
			width: 160rpx;
			height: 160rpx;
			border-radius: 10rpx;
			position: relative;
			float: left;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			.img {
				width: 160rpx !important;
				height: 160rpx !important;
			}
			.deleteImg {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				right: -10rpx;
				top: -10rpx;
			}
		}
		.addImg {
			width: 160rpx;
			height: 160rpx;
			background: #f6f6f6;
			margin-bottom: 20rpx;
			flex-direction: column;
			.txt {
				font-size: 24rpx;
				color: #999999;
			}
		}
	}
</style>

```


![alt 示例图片](/img/study/uniapp/uniapp小程序上传图片案例/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸