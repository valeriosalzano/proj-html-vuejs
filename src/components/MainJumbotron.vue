<template>
  <div class="main-jumbotron">
    <h1>Brand New Arrivals</h1>
    <h2>NEW COLLECTION FROM NEW YORK</h2>
    <div>
      <OneButton class="transparent">VIEW ALL</OneButton>
      <OneButton class="transparent">LOOKBOOK</OneButton>
    </div>
  </div>
</template>

<script>
import OneButton from './OneButton.vue';

  export default {
    name: 'Main Jumbotron',
    components: {
      OneButton,
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.main-jumbotron {
  height: 650px;
  background: url('../assets/images/home1_slide_three_bg_2.jpg') center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  color: $jumbo-text;
}
</style>