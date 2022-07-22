<template>
	<div class="wall-index">
    <top-bar></top-bar>
    <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video" ></video>
    <router-view></router-view>
    <foot-bar></foot-bar>
	</div>
</template>

<script>
import topBar from "@/components/TopBar";
import footBar from "@/components/FootBar";
	export default {
		data() {
			return {
				aaa: '',
			}
		},
		components: {
      topBar,
      footBar
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
  .wall-index{
    .bg-video {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      height: 880px
    }
  }
</style>
