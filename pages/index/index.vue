<template>
	<view class="content">
        <div>
			<img :src="imgUrl" alt="" class='imgStyle'>
			<button type="primary" class="btnStyle" @click="changePic">切换图片</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:''
			}
		},
		onLoad() {

		},
		onShow(){
			this.getImg()
			this.login()
		},
		methods: {
			login(){
				let that = this;
				wx.login({
					success(res) {
						console.log(res.code)
						console.log(typeof res.code)
						uni.request({
							url:that.api+'/Api/Login/Login?code='+res.code,
							method:'GET',
							success:function(res){
								console.log(res)
								console.log('请求成功')
							},
							fail:function(err){
								console.log(err)
								console.log('请求')
							}
						})
					}
				})
			},
			// 请求图片
			getImg(){
				let that = this;
				uni.request({
					url:that.api+'/Api/Index/getImg',
					dataType:'json',
					data:{
						
					},
					method:'POST',
					success:function(res){
						if(res.data.status == 100000){
							that.imgUrl = res.data.info.img_url
						}else{
							uni.showToast({ title: res.data.msg, icon: "none" });
						}
					},
					fail:function(err){
						console.log(err)
					}
				})
			},
			changePic(){
				this.getImg()
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		.imgStyle{
			width: 100%;
			height: 500px
		}
		.btnStyle{
			width: 120px;
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			position: fixed;
			bottom: 20px;
			left: 32%
		}
	}
	
	
</style>
