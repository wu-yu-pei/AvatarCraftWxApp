<template>
	<view class="page">
		<BaseNavigation name="我的"></BaseNavigation>
		<view class="user">
			
			<view class="user-avatar">
				<u-avatar :src="userInfo.avatarUrl" size="130rpx" shape="square"></u-avatar>
			</view>
			<view class="user-info" v-if="userInfo">
				<view class="user-info-name">
					<span>{{userInfo.nickName}}</span>
				</view>
				<view class="user-info-phone">
					<span>18338323927</span>
				</view>
			</view>
			
			<view class="user-info none" v-else>
				<view class="user-info-name none">
					用户名:<span> --- </span>
				</view>
				<view class="user-info-phone none">
					手机号:<span> --- </span>
				</view>
			</view>
			
			<view class="user-cilck" @click="getUserInfoAndLogin" v-if="!userInfo">
				点击登陆<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
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
		padding: 20rpx;
	}
	.user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 130rpx;
	}
	
	.user-avatar {
		
	}
	
	.user-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex: 1;
		margin-left: 20rpx;
		&.none {
			gap: 20rpx 0;
		}
		&-name {
			font-size: 60rpx;
			font-weight: bold;
		}
		&-phone {
			
			span {
				color: #ccc;
			}
		}
	}
	
	.user-cilck {
		color: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.none {
		font-size: 30rpx;
		font-weight: normal;
		color: #ccc !important;
	}
</style>

