<template>
  <footer class="page-footer">
    <div class="footer-top">
      <CallToAction></CallToAction>

    </div>
    <div class="footer-bottom">

    </div>
    
  </footer>
</template>

<script>
import CallToAction from './CallToAction.vue';

  export default {
    name: 'Page Footer',
    components: {
      CallToAction,
    }
  }
</script>

<style lang="scss" scoped>
  
</style>