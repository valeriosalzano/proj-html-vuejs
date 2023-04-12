<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="getImgPath(product.img)" :alt="product.name">
    </div>
    <div class="product-infos">
      <h3>{{ product.name }}</h3>
      <h5>{{ product.tags.join(', ') }}</h5>
      <div class="price">
        <span class="original-price" :style="product.discount? 'text-decoration: line-through' : ''">${{ product.price }}</span>
        <span class="discounted-price" v-if="product.discount">${{ product.price - product.discount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product Card',
    props: {
    product: Object,
    },
    methods: {
      getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
    },
    }
  }
  
</script>

<style lang="scss" scoped>
.product-card {
  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>