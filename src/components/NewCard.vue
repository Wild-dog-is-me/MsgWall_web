<template>
  <div class="new-card">
    <div class="colors">
      <p class="color-li" v-for="(e,index) in cardColor1" :key="index"
         :style="{background:e}" :class="{colorSelected:index==colorSelected}"
          @click="changeColor(index)"
      ></p>
    </div>
    <div class="card-main" :style="{ background: cardColor[colorSelected]}">
      <textarea placeholder="留言...(96字以内)" class="message" maxlength="96" v-model="message"></textarea>
      <input type="text" placeholder="签名" class="name" v-model="name"/>
    </div>
    <div class="labels">
      <p class="title">选择标签</p>
      <div class="label">
        <p v-for="(e,index) in label[id]" :key="index" class="label-li" :class="{labelSelected:index==labelSelected}" @click="changeLabel(index)">{{e}}</p>
      </div>
    </div>
    <div>
      <p class="t_title">注意事项</p>
      <p class="mzsm">
        留言墙是本人独自开发，用于个人留言交流的平台。请勿上传不良信息,发布内容请勿与以下相关:<br/>
        1.反对宪法所确定的基本原则的；<br/>
        2.危害国家安全，泄漏国家机密的；<br/>
        3.损害国家荣誉与利益的；<br/>
        4.煽动民族仇恨、歧视，破坏民族团结的；<br/>
        5.宣扬邪教和封建迷信；<br/>
        6.散布谣言，扰乱社会秩序，破坏社会稳定的；<br/>
        7.散步色情，赌博，暴力或教唆犯罪的；<br/>
        8.侮辱诽谤他人，侵害他人合法权益的；<br/>
        9.含有法律，行政法规定禁止的其他内容的信息。
      </p>
    </div>
    <div class="footbtn">
      <dog-button size="max" order="secondary" @click="closeModel(0)">丢弃</dog-button>
      <dog-button size="max" class="submit">确定</dog-button>
    </div>
  </div>
</template>

<script>
import {cardColor,cardColor1} from "../utils/utils"
import {label} from "@/utils/data";
import dogButton from "./DogButton"

export default {
  name: "NewCard",
  data() {
    return {
      cardColor,
      cardColor1,
      colorSelected:0,
      label,
      labelSelected:0,
      message: "",
      name:"匿名"
    }
  },
  components:{
    dogButton
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
    },
    closeModel(data){
      this.$emit('addClose', data);
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
  padding: 0 @padding-20 120px;
  position: relative;

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
      border: 1px solid @primary-color;
    }
  }

  .card-main {
    transition: @tr;
    height: 240px;
    width: 100%;
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
    padding-top: 20px;
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
  .t_title{
    padding-top: 20px;
  }

  .mzsm {
    padding-top: 10px;
    font-size: 12px;
    color: @gray-3;
    line-height: 20px;
  }

  .footbtn {
    padding: 20px ;
    position: fixed;
    bottom: 100px;
    left: 0;
    background: rgba(255, 255, 255,0.5);
    width: 100%;
    backdrop-filter: blur(10px);
    box-sizing: border-box;
    .submit {
      margin-left: @padding-20;
      width: 200px;
    }
  }
}
</style>
