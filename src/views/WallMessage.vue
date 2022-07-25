<template>
  <div class="wall-message">
    <p class="title">{{wallType[id].name}}</p>
    <P class="slogan">{{wallType[id].slogan}}</P>
    <div class="label">
      <p class="label-list" :class="{labelSelected:nlabel == -1}" @click="selectNode(-1)">全部</p>
      <p class="label-list" :class="{labelSelected:nlabel == index}" v-for="(e,index) in label[id]" :key="index" @click="selectNode(index)">{{e}}</p>
    </div>
    <div class="card">
      <node-card></node-card>
    </div>
  </div>
</template>

<script>
import {wallType,label} from "@/utils/data";
import nodeCard from "@/components/NodeCard";

export default {
  name: "WallMessage",
  data(){
    return {
      wallType,
      label,
      id: 0, // 留言墙与照片墙的切换id
      nlabel:-1 // 当前对应标签
    }
  },
  methods:{
    // 切换标签
    selectNode(e) {
      this.nlabel = e;
    }
  },
  components:{
    nodeCard,
  }
}
</script>

<style scoped>
  .wall-message {
    /*height: 2000px;*/
    min-height: 650px;
    padding-top: 52px;
    /*display: flex;*/
    /*justify-content: center;*/

  }
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
  }

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
</style>
