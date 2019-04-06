<template>
  <div class="content">
    <!--    <div class="loading-container">-->
    <!--      <me-loading/>-->
    <!--    </div>-->
    <div class="content-item">
      <div class="content-item_1">
        <span class="content-price">¥<strong class="content-price-text">{{contentData.priceText}}</strong></span>
        <span class="content-soldCount">{{contentData.soldCount}}件已售</span>
      </div>
      <div class="content-item_2">
        <p class="content-title">{{contentData.title}}</p>
        <p class="content-info">
          <span class="content-postage">{{contentData.postage}}</span>
          <span class="content-sellCount">月销量{{contentData.sellCount}}件</span>
          <span class="content-from">{{contentData.from}}</span>
        </p>
      </div>
      <div class="content-item_3">
        <p class="content-rateCount">商品评价({{contentData.rateTotalCount}})</p>
        <ul class="content-rateLabel">
          <li
            class="content-rateLabel-item"
            v-for="(item,index) in contentData.rateKeywords"
            :key="index"
          >{{item.word}}({{item.count}})
          </li>
        </ul>
        <p class="content-rateUser">
          <img class="content-rateHeadPic" :src="contentData.rateHeadPic" alt="">
          <span class="content-rateUserName">{{contentData.rateUserName}}</span>
        </p>
        <p class="content-rateContent">{{contentData.rateContent}}</p>
        <p class="content-rateInfo">
          <span class="content-rateDateTime">{{contentData.rateDateTime}}</span>
          <span class="content-rateSkuInfo">{{contentData.rateSkuInfo}}</span>
        </p>
      </div>
      <div class="content-item_4">
        <div class="content-shopIcon">
          <img :src="contentData.shopIcon" alt="">
        </div>
        <p class="content-shopName">{{contentData.shopName}}</p>
        <p class="content-tianMao">天猫</p>
        <ul class="content-evaluates">
          <li class="content-evaluates-item" v-for="(item,index) in contentData.evaluates" :key="index">
            <span class="content-evaluates-title">{{item.title}}</span>
            <span class="content-evaluates-score">{{item.score}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';

  export default {
    name: 'ProductContent',
    components: {
      MeLoading
    },
    props: {
      contentData: {
        type: [Array, Object]
      }
    },
    watch: {
      contentData() {
        this.$emit('loaded');
      }
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content {
    &-item_1 {
      width: 100%;
      height: 45px;
      padding: 0 10px;
      color: #fff;
      background-color: #ef3473;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      @include flex-between();
    }

    &-price {
      font-size: 8px;

      &-text {
        font-size: $font-size-l;
      }
    }

    &-soldCount {
      width: 82px;
      height: 28px;
      font-size: 11px;
      background-color: #cc2e42;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      @include flex-center();
    }

    &-item_2 {
      width: 100%;
      /*min-height: 62px;*/
      padding: 0 10px;
      font-size: $font-size-base;
      color: #000;
      background-color: #fff;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-title {
      line-height: 1.5em;
      padding: 10px 0;
    }

    &-info {
      color: #999;
      padding: 10px 0;
      @include flex-between();
    }

    &-item_3 {
      background-color: #fff;
      padding: 12px 10px;
      font-size: $font-size-base;
      color: #000;
      margin-bottom: 8px;
    }

    &-rateLabel {
      padding-top: 12px;
      display: flex;
      flex-wrap: wrap;

      &-item {
        padding: 8px;
        background-color: #ffeeee;
        border-radius: 8px;
        margin-right: 9px;
        margin-bottom: 10px;
        @include flex-center();
      }
    }

    &-rateUser {
      margin-top: 12px;
    }

    &-rateHeadPic {
      width: 23px;
      height: 23px;
      border-radius: 50%;
    }

    &-rateUserName {
      line-height: 23px;
    }

    &-rateContent {
      padding-top: 12px;
      line-height: 1.5em;
    }

    &-rateInfo {
      padding-top: 12px;
      color: #999;
      line-height: 1.5em;
    }

    &-item_4 {
      padding: 12px;
      background-color: #fff;
      position: relative;
      margin-bottom: 46px;
    }

    &-shopIcon {
      width: 49px;
      height: 49px;
      position: absolute;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-shopName {
      margin-left: 58px;
      margin-top: 9px;
      color: #000;
      font-size: $font-size-l;
    }

    &-tianMao {
      width: 35px;
      height: 18px;
      font-size: 8px;
      margin-left: 58px;
      margin-top: 5px;
      border-radius: 10px;
      background-color: #ff012e;
      color: #fff;
      @include flex-center();
    }

    &-evaluates {
      height: 53px;
      display: flex;

      &-item {
        flex: 1;
        @include flex-center();
      }

      &-title {
        margin-right: 3px;
      }
    }
  }
</style>
