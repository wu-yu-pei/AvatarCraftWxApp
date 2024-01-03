<template>
	<view class="page">
		<BaseNavigation>
			<template slot="left">
				<u-avatar src="/static/image/use/logo.jpg" size="40"></u-avatar>
			</template>
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
			}
		},
		
		created() {

		},

		onLoad() {

		},
		onPageScroll(e) {
			
		},

		computed:{

		},

		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
    // 深层样式修改
    // navbar border
    /deep/ .u-navbar .u-navbar__content {
    	border-bottom: 1rpx solid #ccc;
    }
	
	.content {
		height: 9999rpx;
	}
</style>
