<template>
  <div class="main-jumbotron">
    <h1>Brand New Arrivals</h1>
    <h2>NEW COLLECTION FROM NEW YORK</h2>
    <div>
      <OneButton class="transparent big">VIEW ALL</OneButton>
      <OneButton class="transparent big">LOOKBOOK</OneButton>
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
  width: 100%;
  aspect-ratio: 1900/650;
  background: url('../assets/images/home1_slide_three_bg_2.jpg') center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  color: $jumbo-text;

  h1 {
    font-size: 5.2rem;
    font-family: sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    // text-shadow: 0 2px 2px black;
  }
  h2{
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
}
</style>