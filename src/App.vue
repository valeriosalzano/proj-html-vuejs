<script>
import {store} from './store/store.js';


import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components : {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>
  <PageHeader></PageHeader>
  <PageMain
    :products="store.productsData"
    :people="store.testimonialsData"
    :posts="store.blogData">
  </PageMain>
  
  <PageFooter
    :products="store.productsData"
    :posts="store.blogData">
  </PageFooter>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
