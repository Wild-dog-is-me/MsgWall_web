<template>
  <div class="foot-bar">
    <div>
      <div>
        <h1 style="color: #000000">不管是快乐，还是欣喜，全都……全都不可能永远延续，即使是这样，你也会喜欢这里吗</h1>
      </div>
      <div>
        <a href="http://ice.code-farmer.cloud/">Odin の 博客 || 希望每个来到这儿的人，都能感到放松</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FootBar",
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
