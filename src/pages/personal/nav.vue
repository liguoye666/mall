<template>
  <div class="nav">
    <div class="nav-icon">
      <i class="iconfont icon-personal"></i>
    </div>
    <div class="nav-item">
      <span class="nav-register">注册</span>
      <span class="nav-line">|</span>
      <span class="nav-login">登录</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalNav'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .nav {
    width: 100%;
    height: 240px;
    background-color: $header-bgc;
    position: relative;
    margin-bottom: 20px;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 96px;
      height: 96px;
      background-color: #fff;
      border-radius: 50%;

      .iconfont {
        font-size: 96px;
        color: $header-bgc;
      }
    }

    &-item {
      width: 100%;
      position: absolute;
      top: 187px;
      font-size: 28px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }

    &-line {
      margin: 0 40px;
    }

  }

</style>
