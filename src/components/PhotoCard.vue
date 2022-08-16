<template>
 <div class="photo_card">
   <img :src="require('../../static/'+photo.imgUrl+'.jpeg')" class="photo_img"/>
   <div class="photo_bg"></div>
   <div class="photo_like">
     <span class="iconfont icon-aixin1"></span>
     <span class="like_data">{{photo.like}}</span>
   </div>
 </div>
</template>

<script>
import {label} from "@/utils/data";
import {dateOne,cardColor} from "@/utils/utils";

export default {
  name: "PhotoCard",
  data(){
    return{
      label,
      dateOne,
      cardColor
    }
  },
  props:{
     photo:{
      default: {}
    },

  },
  computed:{
    card(){
      return this.note;
    }
  },
  created() {
  }
}
</script>

<style scoped lang="less">
  .photo_card {
    position:relative;


    .photo_img {
      width: 100%;
    }

    .photo_bg {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: @tr;
    }

    .photo_like {
      position: absolute;
      left: 8px;
      top: 8px;
      background: rgba(255,255,255,0.80);
      border-radius: 20px;
      height: 28px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: @tr;
      cursor: pointer;

      .icon-aixin1{
        color: @gray-3;
        padding-right: 4px;
      }

      .like_data{
        color: @gray-1;
      }
    }

    &:hover {
      .photo_bg {
        opacity: 1;
      }

      .photo_like {
        opacity: 1;
      }
    }
  }
</style>
