<template>
  <!-- PRODUCTS VERSION-->
  <div v-if="products" class="one-slider">
    <span class="arrow left"><i class="fa-solid fa-chevron-left"></i></span>
    <div v-for="product in products" class="img-container" :key="product.name">
      <img :src="getImgPath(product.img)" :alt="product.name">
      <ImgHover :product="product"></ImgHover>
    </div>
    <span class="arrow right"><i class="fa-solid fa-chevron-right"></i></span>
  </div>
  <!-- TESTIMONIALS VERSION -->
  <div v-if="people" class="one-slider" :class="people?'people':''">
    <div class="quote-container">
      <img :src="getImgPath(people[personShowing].img)" :alt="people[personShowing].name">
      <p class="text">{{ people[personShowing].text }}</p>
      <p class="author"><strong>{{ people[personShowing].name }},</strong> {{ people[personShowing].company }}</p>
      <div class="dots">
        <i v-for="(person,index) in people" class="fa-circle" :class="index==personShowing?'fa-solid':'fa-regular'" :key="index" @click="personShowing=index"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ImgHover from './ImgHover.vue';

  export default {
    name: 'One Slider',
    components: {
    ImgHover
},
    props: {
      products: Array,
      people: Array,
    },
    data() {
      return {
        personShowing: 0,
      }
    },
    methods: {
      getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
      },
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

// GENERIC STYLE
.one-slider {
  position: relative;
  width: 100%;
  display: flex;
  .img-container{
    position: relative;
    width: 20%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }

  // PRODUCTS VERSION STYLE 
  .arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 1.5rem 0.75rem;
    background-color: $slider-arrow-bg;
    color: $slider-arrow-color;
    font-size: 0.6rem;
    z-index: 9;
    &.left {
      left: 0;
    }
    &.right{
      right: 0;
    }
  }
}

// TESTIMONIALS VERSION STYLE
.one-slider.people {
  background: url("../assets/images/testimonials_home_1_bg.jpg") center;
  background-size: cover;
  background-position-y: -350px ;
  padding-top: 160px;
  text-align: center;
  .quote-container{
    background: url("../assets/images/testimonials_home_1_bg.jpg") center;
    background-size: cover;
    position: relative;
    padding: 75px 50px 100px;
    width: 100%;
    line-height: 1.8rem;
    font-size: 1.2rem;
    letter-spacing: 2px;

    img {
      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50%,-50%);
    }
    .text {
      font-style: italic;
      max-width: 1000px;
      width: 60%;
      margin: auto;
      margin-bottom: 2rem;
    }
    .author {
      margin-bottom: 2rem;
    }
    .dots {
      font-size: 0.8rem;
      i{
        cursor: pointer;
        margin: 0 0.3rem;
      }
    }
  }
}
</style>