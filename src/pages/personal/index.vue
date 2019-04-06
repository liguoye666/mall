<template>
  <div class="personal">
    <header class="g-header-container">
      <personal-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
    </header>
    <me-scroll ref="scroll">
      <personal-nav/>
      <personal-content/>
    </me-scroll>
  </div>
</template>

<script>
  import PersonalHeader from './header';
  import MeScroll from 'base/scroll';
  import PersonalNav from './nav';
  import PersonalContent from './content';

  export default {
    name: 'Personal',
    components: {
      PersonalHeader,
      MeScroll,
      PersonalNav,
      PersonalContent
    },
    data() {
      return {
        isHeaderTransition: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .personal {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
