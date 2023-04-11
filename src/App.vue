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

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
