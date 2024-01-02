<template>
	<view class="page">
		<BaseNavigation>
			<template slot="left">首页</template>
		</BaseNavigation>
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
				user:{}
			}
		},

		onLoad() {

		},

		computed:{

		},

		methods:{
			getPhoneNumber(e) {
				const phoneCode = e.detail.code
				wx.login().then(res => {
					const { code:loginCode } = res
					uni.$api.login({ phoneCode, loginCode })
				})
			},
			getUserInfo() {
				wx.getUserProfile({
					desc:"获取你的微信昵称"
				}).then(res => {
					this.user = res.userInfo
				})
			}
		}
	}
</script>

<style lang="less" scoped>
    // 深层样式修改
    // navbar border
    /deep/ .u-navbar .u-navbar__content {
    	border-bottom: 1rpx solid #ccc;
    }
</style>
