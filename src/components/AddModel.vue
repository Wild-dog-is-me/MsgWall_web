<template>
  <transition name="model">
    <div class="add-model" v-if="!isModel">
      <div class="add-model-head">
        <p class="add-model-name">{{ title }}</p>
        <span class="iconfont icon-guanbi" @click="closeModel"></span>
      </div>
      <div class="add-model-main">
<!--        <div class="slot"></div>-->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
const props = defineProps({
  title:{
    default: '标题'
  },
  isModel:{
    default: false
  }
})
const emit = defineEmits(['close'])

function closeModel() {
  emit('close',"我是关闭");
}

props;
// export default {
//   name: "AddModel"
// }
</script>

<style scoped lang="less">
  .model {
    // 入场
    &-enter{
      &-from{
        transform: translateX(360px);
      }
      &-active{
        transition: all 0.2s ease-out;
      }
      &-to{
        transform: translateX(0px);
      }
    }

    // 出场
    &-leave{
      &-from{
        transform: translateX(0px);
      }
      &-active{
        transition: all 0.2s ease-out;
      }
      &-to{
        transform: translateX(360px);
      }
    }
  }

  .add-model {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(3px);
    padding: @padding-20;

    .add-model-head {
      display: flex;
      justify-content:space-between ;
      align-items: center;
      padding-bottom: @padding-20;
      padding: @padding-20;
      box-sizing: border-box;

      .add-model-name {
        font-size: 16px;
        color: #202020;
        font-weight: 600;
      }

      .icon-guanbi {
        color: @gray-2;
        cursor: pointer;
        padding-left: 8px;
      }
    }

    .add-model-main {
      //border: 1px solid #eee;
      height: 100%;
      overflow-y: auto;
      //padding: @padding-20;
      box-sizing: border-box;
      padding-bottom: 116px;
      overflow-x: auto;
      margin: 2px;
    }

    .slot {
      height: 1200px;
      background: #eee;
    }

    .add-model-main::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    .add-model-main::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
    }

    .add-model-main::-webkit-scrollbar-track {
      border-radius: 4px;
      background: rgba(0, 0, 0, 0);
    }
  }
</style>
