<template>
  <div class="foot-bar">
    <div>
      <div>
        <h1 style="color: #000000">一言: {{sentence}}</h1>
      </div>
      <div>
        <a href="http://ice.code-farmer.cloud/">Odin の 博客 || 希望每个来到这儿的人，都能感到放松</a>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "FootBar",
  data(){
    return{
      sentence:null
    }
  },
  mounted() {
    axios
      .get('https://api.vvhan.com/api/ian')// 一言接口
      .then(response => (this.sentence = response.data),
        reason => {
          console.log('error')
        })
  }
}

</script>

<style scoped lang="less">
@import "../assets/fonts/icon/font.css";
h1 {
  text-align: center;
  font-family: FZZJ;
}

div {
  text-align: center;
}

a {
  font-size: 20px;
}

.foot-bar {
  width: 100%;
  height: 100px;
  background: #a5ccd5;
}
</style>
