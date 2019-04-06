<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders"/>
    <me-slider
      :data="sliders.sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <swiper-slide
        v-for="(item, index) in sliders.sliders"
        :key="index"
      >
        <a href="www.imooc.com" alt="" class='slider-link'>
          <img :src="item" alt="" class='slider-img'>
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import MeLoading from 'base/loading';

  export default {

    name: 'ProductSlider',
    components: {
      MeSlider,
      MeLoading,
      swiperSlide
    },
    props: {
      sliders: {
        type: [Array, Object]
      }
    },
    watch: {
      sliders() {
        this.$emit('loaded');
      }
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination
      };
    }
  };
</script>

<style lang="scss" scoped>

  .slider-wapper {
    width: 100%;
    height: 360px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

</style>
