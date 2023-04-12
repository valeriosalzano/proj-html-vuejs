<template>
  <div class="one-slider">
    <span class="arrow left">arrow-left</span>
    <div v-for="product in products" class="img-container">
      <img :src="getImgPath(product.img)" :alt="product.name">
    </div>
    <span class="arrow right">arrow-right</span>
  </div>
</template>

<script>
  export default {
    name: 'One Slider',
    props: {
      products: Array,
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
</style>