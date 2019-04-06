<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <div class="header-title" slot="center">商品详情</div>
    <i class="iconfont icon-cart" slot="right" @click="goToCart"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'ProductHeader',
    components: {
      MeNavbar
    },
    data() {
      return {};
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      goToCart() {
        this.$router.push('/cart');
      }
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
      color: $icon-color-default;
      font-size: $font-size-l;
      text-align: center;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }

  }
</style>
