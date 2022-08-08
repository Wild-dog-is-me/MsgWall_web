<template>
  <div class="wall-message">
    <p class="title">{{wallType[id].name}}</p>
    <P class="slogan">{{wallType[id].slogan}}</P>
    <div class="label">
      <p class="label-list" :class="{labelSelected:nlabel == -1}" @click="selectNode(-1)">全部</p>
      <p class="label-list" :class="{labelSelected:nlabel == index}" v-for="(e,index) in label[id]" :key="index" @click="selectNode(index)">{{e}}</p>
    </div>
      <div class="card" :style="{width:nWidth+'px'}">
        <node-card v-for="(e,index) in note" :key="index" :note="e" class="card-inner" :width="'288px'"></node-card>
      </div>
    <div class="add" :style="{bottom:addButton+'px'}" @click="changeModel" v-show="model">
      <span class="iconfont icon-tianjia" ></span>
    </div>
    <AddModel :title="title" @close="changeModel" :isModel="model" >
      <new-card :id="id"></new-card>
    </AddModel>
  </div>
</template>

<script>
import {wallType,label} from "@/utils/data";
import nodeCard from "@/components/NodeCard";
import {note} from "../../mock/index";
import AddModel from "@/components/AddModel";
import newCard from "@/components/NewCard";

export default {
  name: "WallMessage",
  data(){
    return {
      wallType,
      label,
      id: 0, // 留言墙与照片墙的切换id
      nlabel:-1, // 当前对应标签
      note:note.data,
      nWidth: null,
      addButton:30,
      title:'写留言', // 标题
      model:true // 切换开关状态
    }
  },
  methods:{
    // 切换标签
    selectNode(e) {
      this.nlabel = e;
    },
    // note的宽度
    notewidth() {
      // 页面宽度
      let wWidth = document.body.clientWidth;
      this.nWidth = Math.floor((wWidth - 120) / 300) * 300;
    },
    scrollButton(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if(scrollTop+clientHeight+120 >= scrollHeight){
        this.addButton = scrollTop + clientHeight + 120 - scrollHeight;
      }else {
        this.addButton = 30;
      }
    },
    changeModel(){
      this.model = !this.model;
    }
   },
  components:{
    nodeCard,
    AddModel,
    // eslint-disable-next-line vue/no-unused-components
    newCard
  },
  mounted() {
    this.notewidth();
    window.addEventListener('resize',this.notewidth)
    window.addEventListener('scroll',this.scrollButton)
  },
  unmounted() {
    window.addEventListener('resize',this.notewidth)
    window.addEventListener('scroll',this.scrollButton)
  }
}
</script>

<style scoped lang="less">
  .wall-message {
    /*height: 2000px;*/
    min-height: 650px;
    padding-top: 52px;
    /*display: flex;*/
    /*justify-content: center;*/
    .title {
      padding-top: 48px;
      padding-bottom: 8px;
      font-size: 56px;
      color: #202020;
      text-align: center;
      font-weight: 600;
      font-family: FZZJ;
    }

    .slogan {
      color: #5B5B5B;
      text-align: center;
    }

    .label {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      .label-list {
        padding: 0 14px;
        line-height: 28px;
        margin: 4px;
        color: #5B5B5B;
        align-items: center;
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
      }

      .labelSelected {
        color: #202020;
        font-weight: 600;
        border: 1px solid #202020;
        border-radius: 16px;
      }
    }
    .card {
         margin: auto;
         justify-content: center;
         align-items: center;
         display: flex;
         flex-wrap: wrap;
         width: 100%;
         //border: 1px solid skyblue;
         padding-top: 28px;
         margin: auto;
         .card-inner {
           margin: 6px;
         }
       }
    .add {
      width: 56px;
      height: 56px;
      background: #202020;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 28px;
      position: fixed;
      right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: @tr;
      .icon-tianjia {
        color: white;
        font-size: 24px;
      }
    }
  }

</style>
