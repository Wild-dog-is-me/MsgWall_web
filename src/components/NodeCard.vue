<template>
  <div class="node-card" :style="{width: width,background:'rgba(252,175,162,0.30)'}">
    <div class="top">
      <p class="time">2022.7.25</p>
      <p class="label">爱情</p>
    </div>
    <p class="message">后来那么悲伤，只是因为相遇的时候那么美，如果悲剧不能逆转，那么你在故事开头所体会到的欢乐，最后都要用双倍的悲伤来偿还。</p>
    <div class="foot">
      <div class="foot-left">
        <div class="icon">
          <span class="iconfont icon-aixin1"></span>
          <span class="value">3</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-liuyan"></span>
          <span class="value">3</span>
        </div>
      </div>
      <div class="name">Odin</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NodeCard",
  props:{
    width:{
      default: '288px'
    }
  }
}
</script>

<style scoped lang="less">
@font-face {
  font-family: fa;
  src: url("../assets/fonts/icon/HanziPenSC.ttf");
}

  .node-card {
    height: 240px;
    padding: 10px 20px;
    box-sizing: border-box;
    position: relative;

    .top {
      display: flex;
      justify-content: space-between;

      p {
        color: @gray-3;
        font-size: 14px;
      }
    }
    .message {
      height: 140px;
      font-size: 16px;
      color: @gray-1;
      font-family: fa;
      cursor: pointer;
    }

    .foot {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      padding: 0 20px;
      bottom: 16px;
      width: 100%;
      box-sizing: border-box;

      .foot-left {
        display: flex;

        .value {
          font-size: @size-12;
          color: @gray-3;
          line-height: 16px;
          padding-left: 4px;
        }

        .iconfont {
          font-size: 16px;
          color: @gray-3;
        }

        .icon {
          padding-right: 8px;
          display: flex;
          align-items: center;
        }

        .icon-aixin1 {
          cursor: pointer;
          transform: @tr;
          &:hover {
            color: @like;
          }
        }
      }
    }
        .name {
          font-family: fa;
          font-size: 17px;
          color: @gray-1;
          font-weight: 600;
        }
  }

</style>
