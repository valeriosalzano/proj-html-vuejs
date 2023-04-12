<template>
  <!-- products version -->
  <div v-if="products" class="one-slider">
    <span class="arrow left">arrow-left</span>
    <div v-for="product in products" class="img-container" :key="product.name">
      <img :src="getImgPath(product.img)" :alt="product.name">
    </div>
    <span class="arrow right">arrow-right</span>
  </div>
  <!-- testimonials version -->
  <div v-if="people" class="one-slider" :class="people?'people':''">
    <div class="quote-container">
      <img :src="getImgPath(people[personShowing].img)" :alt="people[personShowing].name">
      <p>{{ people[personShowing].text }}</p>
      <p><strong>{{ people[personShowing].name }},</strong> {{ people[personShowing].company }}</p>
      <div>
        <i v-for="(person,index) in people" class="fa-circle" :class="index==personShowing?'fa-solid':'fa-regular'" :key="index" @click="personShowing=index"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'One Slider',
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
.one-slider {
  position: relative;
  width: 100%;
  display: flex;
  .img-container{
    width: 20%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.left {
      left: 0;
    }
    &.right{
      right: 0;
    }
  }
}
.one-slider.people {
  background: url("../assets/images/testimonials_home_1_bg.jpg") center;
  padding-top: 150px;
  text-align: center;
  .quote-container{
    background: url("../assets/images/testimonials_home_1_bg.jpg") center;
    position: relative;
    padding: 75px 50px 0;
    width: 100%;

    img {
      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>