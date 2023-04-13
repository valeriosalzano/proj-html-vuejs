<template>
  <div class="main-jumbotron">
    <h1>Brand New Arrivals</h1>
    <h2>NEW COLLECTION FROM NEW YORK</h2>
    <div>
      <OneButton class="transparent big">VIEW ALL</OneButton>
      <OneButton class="transparent big">LOOKBOOK</OneButton>
    </div>
    <div class="squares">
      <div class="demos square">
        <i class="fa-solid fa-images"></i>
        Demos
      </div>
      <div class="sale square">
        <p><sup>$</sup>39</p> 
        On Sale
      </div>
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
  position: relative;
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
  .squares {
    position: absolute;
    top: -10px;
    right: 1rem;
    color: #54686c;
    .square {
      aspect-ratio: 1;
      height: 70px;
      padding: 0.25rem;
      background-color: white;
      margin-bottom: 0.5rem;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);
      text-align: center;
    }
  }
  .demos {
    i {
      font-size: 1.8rem;
      margin: 0.25rem;
    }
  }
  .sale {
    p {
      vertical-align:super;
      color: #66bd7c;
      font-size: 2.2rem;
      font-weight: 500;
      sup {
        font-size: 1rem;
      }
    }
  }
}
</style>