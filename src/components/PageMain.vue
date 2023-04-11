<template>
  <main class="page-main">
    <MainJumbotron></MainJumbotron>

    <section class="featured-products">

    </section>
    <section class="collections">

    </section>
    <section class="best-sellers">

    </section>
    <section class="pricing">

    </section>
    <section class="new-arrivals">

    </section>
    <section class="quotes">

    </section>
    <section class="blog">

    </section>

    <div class="main-bottom">
      <section class="products-lists">

      </section>
      <BrandsList></BrandsList>

    </div>
    
  </main>
</template>

<script>
  import MainJumbotron from './MainJumbotron.vue';
  import BrandsList from './BrandsList.vue';
  import CallToAction from './CallToAction.vue';

  export default {
    name: 'Page Main',
    components: {
    MainJumbotron,
    BrandsList,
    CallToAction,
    },
  }
</script>

<style lang="scss" scoped>
  
</style>