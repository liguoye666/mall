<template>
  <div class="content">
    <div class="content-order">
      <me-navbar class="content-order-header">
        <i class="iconfont icon-shop" slot="left"></i>
        <div class="title header-title" slot="center">我的订单</div>
        <div class="header-right" slot="right">查看我的全部订单</div>
        <i class="iconfont icon-right" slot="right"></i>
      </me-navbar>
      <ul class="content-order-ul">
        <li class="content-order-ul-item" v-for="(item,index) in order" :key="index">
          <i class="iconfont" :class="[item.iconClass]"></i>
          <p class="word">{{item.word}}</p>
        </li>
      </ul>
    </div>
    <div class="content-money">
      <me-navbar class="content-money-header">
        <i class="iconfont icon-moneybag" slot="left"></i>
        <div class="title header-title" slot="center">我的资产</div>
      </me-navbar>
      <ul class="content-money-ul">
        <li class="content-money-ul-item" v-for="(item,index) in money" :key="index">{{item}}</li>
      </ul>
    </div>
    <ul class="content-ul">
      <li class="content-ul-item" v-for="(item,index) in ul" :key="index">
        <me-navbar>
          <i class="iconfont" :class="[item.iconClass]" slot="left"></i>
          <div class="title" slot="center">{{item.word}}</div>
          <i class="iconfont icon-right" slot="right"></i>
        </me-navbar>
      </li>
    </ul>
    <div class="content-phone">
      <p>客服热线400-123-8888(8:00-22:00)</p>
      <p>拨打前请记录您的UID 0</p>
    </div>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalContent',
    components: {
      MeNavbar
    },
    data() {
      return {
        order: [],
        money: [],
        ul: []
      };
    },
    created() {
      this.order = [
        {
          iconClass: 'icon-pay',
          word: '待付款'
        },
        {
          iconClass: 'icon-send',
          word: '待收货'
        },
        {
          iconClass: 'icon-comment',
          word: '待评价'
        },
        {
          iconClass: 'icon-redpacket',
          word: '退货/退款'
        }
      ];
      this.money = ['现金券', '红包', '余额', '礼品卡'];
      this.ul = [
        {
          iconClass: 'icon-service',
          word: '售后服务'
        },
        {
          iconClass: 'icon-mail',
          word: '意见反馈'
        },
        {
          iconClass: 'icon-deliver',
          word: '收货地址'
        },
        {
          iconClass: 'icon-exit',
          word: '退出登录'
        },
        {
          iconClass: 'icon-phone',
          word: '400-123-8888'
        }
      ];
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content {

    .iconfont {
      font-size: $icon-font-size;
    }

    .title {
      font-size: 18px;
      color: #000;
    }

    &-order {
      margin-bottom: 20px;

      &-header {
        width: 100%;
        height: 55px;
        background-color: #fff;
        border-bottom: 1px solid #efefef;

        .header-right {
          font-size: $font-size-l + 2;
          margin-right: 10px;
          color: #999;
        }

        .icon-right {
          color: #999;
          font-size: $icon-font-size-sm;
        }
      }

      &-ul {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;

        &-item {
          flex: 1;
          @include flex-center(column);

          .iconfont {
            font-size: 32px;
            margin-bottom: 12px;
          }

          .word {
            font-size: 16px;
          }
        }
      }
    }

    &-money {

      &-header {
        border-bottom: 1px solid #efefef;
      }

      &-ul {
        height: 66px;
        display: flex;
        background-color: #fff;
        font-size: 16px;

        &-item {
          flex: 1;
          @include flex-center();
        }
      }
    }

    &-phone {
      padding: 20px;
      line-height: 1.5em;
    }

  }
</style>
