<template>
  <div class="top-bar">
    <div class="logo">
      <img src="@/assets/images/logo.svg" class="logo-img"/>
      <p class="logo-name">——静水流深</p>
    </div>
    <div class="menu">
      <DogButton  order="cprimary" class="menu-message">留言墙</DogButton>
      <DogButton  order="csecondary" class="menu-photo">照片墙</DogButton>
    </div>
    <div class="user">
      <div class="user-head"></div>
    </div>
  </div>
</template>

<script>
import DogButton from "@/components/DogButton";
export default {
  name: "TopBar",
  data(){
    return{

    }
  },
  components:{
    DogButton
  }
}
</script>

<style scoped lang="less">
@import "../assets/fonts/icon/iconfont.css";
  .top-bar {
    font-family: iconfont;
    width: 100%;
    height: 52px;
    background: rgb(255, 255, 255, 0.53);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;

    .logo {
      display: flex;
      align-items: center;

      .logo-name{
        font-size: 20px;
        font-family: FZRouSJW;
        color: @gray-1;
        font-weight: 600;
        padding-right: 10px;
      }
    }

    .menu {
      .menu-message {
        margin-right: 24px;
      }
    }

    .user {
      width: 200px;

      .user-head {
        float: right;
        border-radius: 50%;
        height: 36px;
        width: 36px;
        background-image: linear-gradient(180deg,#7BE7FF 2%,#1E85E2 100%);
      }
    }
  }

</style>
