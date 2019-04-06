<template>
  <div class="footer">
    <div class="footer-left">
      <div class="footer-left-item">
        <i class="iconfont icon-shop"></i>
        <span class="title">店铺</span>
      </div>
      <div class="footer-left-item">
        <i class="iconfont icon-service1"></i>
        <span class="title">客服</span>
      </div>
      <div class="footer-left-item">
        <i class="iconfont icon-collect"></i>
        <span class="title">收藏</span>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-right-item footer-right-cart">加入购物车</div>
      <div class="footer-right-item footer-right-buy">马上抢</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductFooter'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .footer {
    width: 100%;
    height: 46px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff;
    display: flex;

    &-left {
      flex: 4;
      display: flex;

      &-item {
        flex: 1;
        @include flex-center(column);

        .iconfont {
          font-size: $icon-font-size;
          margin-bottom: 2px;
        }
      }
    }

    &-right {
      flex: 6;
      display: flex;

      &-item {
        flex: 1;
        color: #fff;
        @include flex-center();
      }

      &-cart {
        background-color: #ff9500;
      }

      &-buy {
        background-color: #ff0036;
      }
    }
  }
</style>
