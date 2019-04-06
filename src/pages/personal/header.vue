<template>
  <me-navbar class="header">
    <div class="header-title" slot="title">我的慕淘</div>
    <i class="iconfont icon-setting" slot="right"></i>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      /*background-color: $header-bgc-translucent; */
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    &-title {
      color: #fff;
      font-size: $font-size-base;
    }

    .icon-setting {
      margin-right: 8px;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size-sm;
    }
  }

</style>
