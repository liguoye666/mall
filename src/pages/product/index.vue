<template>
  <transition name="product">
    <div class="product">
      <header class="g-header-container">
        <product-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
      </header>
      <me-scroll>
        <product-slider ref="slider" :sliders="contentData" @loaded="getContentData(this.itemNumId)"/>
        <product-content ref="content" :contentData="contentData" @loaded="getContentData(this.itemNumId)"/>
      </me-scroll>
      <footer class="g-footer-container">
        <product-footer ref="footer"/>
      </footer>
    </div>
  </transition>
</template>

<script>
  import MeScroll from 'base/scroll';
  import ProductHeader from './header';
  import ProductSlider from './slider';
  import ProductContent from './content';
  import ProductFooter from './footer';
  import {getProductData} from 'api/product';
  import storage from 'assets/js/storage';
  import {PRODUCT_CONTENT_KEY, PRODUCT_CONTENT_UPDATE_TIME_INTERVAL} from './config';

  export default {
    name: 'Product',
    components: {
      MeScroll,
      ProductHeader,
      ProductSlider,
      ProductContent,
      ProductFooter
    },
    data() {
      return {
        isHeaderTransition: true,
        itemNumId: '',
        contentData: {}
      };
    },
    created() {
      this.itemNumId = this.$route.params.id;
      this.getContentData(this.itemNumId);
    },
    methods: {
      getContentData(id) {
        let contents = storage.get(PRODUCT_CONTENT_KEY);
        let updateTime;
        const curTime = new Date().getTime();

        if (contents && contents[id]) {
          updateTime = contents[id].updateTime || 0;
          if (curTime - updateTime <= PRODUCT_CONTENT_UPDATE_TIME_INTERVAL) {
            return this.getContentByLocalStorage(contents[id]);
          } else {
            return this.getContentByHTTP(id).then(() => {
              this.updateLocalStorage(contents, id, curTime);
            });
          }
        } else {
          return this.getContentByHTTP(id).then(() => {
            this.updateLocalStorage(contents, id, curTime);
          });
        }
      },
      getContentByLocalStorage(content) {
        this.contentData = content.data;
        return Promise.resolve();
      },
      getContentByHTTP(id) {
        if (!id) {
          return;
        }
        return getProductData(id).then(data => {
          return new Promise(resolve => {
            if (data) {
              this.apiStack = JSON.parse(data.apiStack[0].value);
              this.contentData.sliders = data.item.images;
              this.contentData.priceText = this.apiStack.price.price.priceText;
              this.contentData.soldCount = this.apiStack.vertical.jhs.soldCount;
              this.contentData.title = this.apiStack.item.title;
              this.contentData.postage = this.apiStack.delivery.postage;
              this.contentData.sellCount = this.apiStack.item.sellCount;
              this.contentData.from = this.apiStack.delivery.from;
              this.contentData.rateTotalCount = data.rate.totalCount;
              this.contentData.rateKeywords = data.rate.keywords;
              this.contentData.rateContent = data.rate.rateList[0].content;
              this.contentData.rateUserName = data.rate.rateList[0].userName;
              this.contentData.rateHeadPic = data.rate.rateList[0].headPic;
              this.contentData.rateDateTime = data.rate.rateList[0].dataTime;
              this.contentData.rateSkuInfo = data.rate.rateList[0].skuInfo;
              this.contentData.shopName = data.seller.shopName;
              this.contentData.shopIcon = data.seller.shopIcon;
              this.contentData.evaluates = data.seller.evaluates;
              resolve();
            }
          });
        });
      },
      updateLocalStorage(contents, id, curTime) {
        contents = contents || {};
        contents[id] = {};
        contents[id].data = this.contentData;
        contents[id].updateTime = curTime;
        storage.set(PRODUCT_CONTENT_KEY, contents);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

  .product-enter-active,
  .product-leave-active {
    transition: all 0.3s;
  }

  .product-enter,
  .product-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
