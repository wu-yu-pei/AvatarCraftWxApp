<template>
	<view class="page">
		<BaseNavigation name="我的"></BaseNavigation>
		<view class="top">
			<view class="top-av">
				<u-avatar :src="userInfo.avatarUrl" size="50" shape="square"></u-avatar>
			</view>
			<view class="top-name" v-if="userInfo">
				{{userInfo.nickName}}
			</view>
			<view class="top-button" v-else>
				<button @click="getUserInfoAndLogin">登陆</button>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseNavigation from '@/components/base/BaseNavigation.vue'

	export default {
		components:{
			BaseNavigation
		},
		data() {
			return {
			}
		},
		methods:{
			getUserInfoAndLogin() {
				wx.getUserProfile({
					lang:"zh_CN",
					desc:"完善你的登陆信息"
				}).then(({ userInfo }) => {
					this.$store.state.userInfo = userInfo
					uni.setStorageSync("userInfo", userInfo)
					
					wx.login().then(res => {
						const { code:loginCode } = res
						uni.$api.login({ loginCode }).then(res => {
							this.$store.state.token = res.token
							uni.setStorageSync("token", res.token)
						})
					})
				})
			},
		},
		onLoad() {

		}
	}
</script>

<style lang="less" scoped>
	// 深层样式修改
	// navbar border
	/deep/ .u-navbar .u-navbar__content {
		border-bottom: 1rpx solid #ccc;
	}
	
	.page {
		background-color: #fff;
	}
	
	.top-av {
		display: flex;
		padding: 20rpx 0;
		justify-content: center;
		align-items: center;
	}
	
	.top-name {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-button {
		button {
			width: 200rpx;
			outline: none;
			border: none;
			background-color: transparent;
			background-color: #fff;
			box-shadow: none;
		}
	}
</style>

