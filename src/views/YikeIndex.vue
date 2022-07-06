<template>
	<div>
		<p class="test">indexindexindex</p>
		<span class="iconfont icon-aixin1"></span>
		<p class="ad">dwadadw</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				aaa: '',
			}
		},
		components: {

		},
		computed: {

		},
		created() {
			this.getUser();
		},
		methods: {
			getUser() {
				this.axios.post("http://182.61.20.123:3001/singin/match", {
					data: 'aaa',
					pwd: 'bbb',
				}).then((res) => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.test {
		font-size: 50px;
	}
	.ad{
		font-size: @size-16;
		color: @warning-color;
		background: @gray-2;
	}
	.icon-aixin1{
		font-size: 40px;
		color: @primary-color;
	}
</style>
