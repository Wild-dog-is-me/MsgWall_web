<template>
  <div class="new-card">
    <div class="colors">
      <p class="color-li" v-for="(e,index) in cardColor1" :key="index"
         :style="{background:e}" :class="{colorSelected:index==colorSelected}"
          @click="changeColor(index)"
      ></p>
    </div>
    <div class="card-main" :style="{ background: cardColor[colorSelected]}">
      <textarea placeholder="留言...(96字以内)" class="message" maxlength="96"></textarea>
      <input type="text" placeholder="签名" class="name"/>
    </div>
    <div class="labels">
      <p class="title">选择标签</p>
      <div class="label">
        <p v-for="(e,index) in label[id]" :key="index" class="label-li" :class="{labelSelected:index==labelSelected}" @click="changeLabel(index)">{{e}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {cardColor,cardColor1} from "../utils/utils"
import {label} from "@/utils/data";

export default {
  name: "NewCard",
  data() {
    return {
      cardColor,
      cardColor1,
      colorSelected:0,
      label,
      labelSelected:0
    }
  },
  props: {
    id:{
      default: 0,
    }
  },
  methods:{
    changeColor(e){
      this.colorSelected = e;
    },
    changeLabel(e){
      this.labelSelected = e;
    }
  }
}
</script>

<style scoped lang="less">
@font-face {
  font-family: fa;
  src: url("../assets/fonts/icon/HanziPenSC.ttf");
}

.new-card {
  padding: 0 @padding-20;

  .colors {
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    .color-li {
      width: 24px;
      height: 24px;
      margin-right: @padding-8;
      cursor: pointer;

    }

    .colorSelected {
      border: 1px solid rgba(59, 115, 240, 1);
    }
  }
  .card-main {
    transition: @tr;
    height: 240px;
    width: 100%;
    //background: rgba(252, 175, 162, 0.31);
    padding: 12px;
    box-sizing: border-box;
    .message {
      background: none;
      resize: none;
      height: 172px;
      box-sizing: border-box;
      padding: @padding-8;
      width: 100%;
      border: none;
      font-family: fa;
      font-size: 15px;
    }
    .name {
      width: 100%;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      border: #fff 1px solid;
      line-height: 20px;
      font-family: fa;
      font-size: 15px;
    }
  }
  .title {
    color: @gray-1;
    font-weight: 600;
    padding-top: 30px;
  }
  .label{
    //border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    .label-li {
      padding: 2px 10px;
      border-radius: 20px;
      margin: 16px 4px 0 0;
      cursor: pointer;
      color: @gray-2;
      transition: @tr;
    }
    .labelSelected {
      background: #ebebeb;
      font-weight: 600;
      color: @gray-1;
    }
  }
}
</style>
