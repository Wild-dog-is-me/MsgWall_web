<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke">联系管理员</p>
      <p class="report">举报</p>
    </div>
    <node-card :note="card"></node-card>
    <div class="form">
      <textarea class="message" placeholder="请输入..."></textarea>
      <div class="bt">
        <input type="text" class="name" placeholder="签名"/>
        <dog-button>确定</dog-button>
      </div>
    </div>
    <p class="title">评论{{card.comment}}</p>
    <div class="comment">
      <div class="comment-li" v-for="(e,index) in comment" :key="index">
        <div class="user-header" :style="{backgroundImage:portraint[e.imgUrl]}"></div>
        <div  class="comm-m">
          <div class="m-top">
            <p>{{e.name}}</p>
            <p class="time">{{dateOne(e.moment)}}</p>
          </div>
          <div class="mm">{{e.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NodeCard from "@/components/NodeCard";
import DogButton from "@/components/DogButton";
import {comment} from "../../mock";
import {portraint} from "@/utils/data";
import {dateOne} from "@/utils/utils";
export default {
  data(){
    return {
      comment:comment.data,
      portraint,
      dateOne
    }
  },
  components:{
    NodeCard,
    DogButton
  },
  props:{
    card:{
      default: {},
    }
  }
}
</script>

<style scoped lang="less">
 .card-detail {
   position: relative;
   padding: 0 @padding-20 ;
   .top-bt {
     //border: 1px solid red;
     position: fixed;
     top: 0;
     left: 0;
     padding: 20px;
     display: flex;
     .revoke {
       color: @primary-color;
       cursor: pointer;
       padding-right: 30px;
       font-size: @size-16;
     }
     .report {
       font-size: @size-16;
       color: @warning-color;
       cursor: pointer;
     }
   }

   .form {
     .message {
       background: none;
       resize: none;
       height: 56px;
       border: 1px solid rgba(148, 148, 148, 1);
       box-sizing: border-box;
       padding: @padding-8;
       width: 100%;
       margin-top: @padding-12;
     }

     .bt {
       display: flex;
       padding-top: 6px;
       justify-content: space-between;
     }

     .name {
       width: 200px;
       box-sizing: border-box;
       padding: @padding-8;
       background: none;
       border: 1px solid rgba(148, 148, 148, 1);
       line-height: 20px;
     }
   }

   .title {
     font-weight: 600;
     padding-top: 30px;
     padding-bottom: 20px ;
   }

   .comment-li {
     display: flex;
     padding-bottom: 30px;
     .user-header {
       flex: none;
       width: 28px;
       height: 28px;
       border-radius: 20px;
       //background-image: linear-gradient(180deg, #92FDFF 0%, #14B2DD 100%);
       overflow:hidden;
     }
     .comm-m {
       padding-left: @padding-8;
     }
     .m-top {
       display: flex;
       align-items: center;
       .name {
         font-weight: 600;
       }
       .time {
         font-size: @size-12;
         padding-left: 4px;
         color: @gray-3;
       }
     }
     .mm {
       padding-top: 4px;
     }
   }
 }
</style>
