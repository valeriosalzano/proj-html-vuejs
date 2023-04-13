<template>
  <div class="product-card" :class="compact? 'compact':'large'">
    <div class="img-container">
      <img :src="getImgPath(product.img)" :alt="product.name">
    </div>
    <div class="product-infos">
      <h3>{{ product.name }}</h3>
      <h5 v-if="!compact" class="tags">{{ product.tags.join(', ') }}</h5>
      <div v-if="compact && product.reviews.length" v-show="getAverageRating(product)" class="stars">
        <i v-for="n in 5" class="fa-star" :class="n <= Math.ceil(getAverageRating(product))? 'fa-solid':'fa-regular'"></i>
      </div>
      <span class="original-price" :class="product.discount? 'erased' : ''"> ${{ product.price }} </span>
      <span class="discounted-price" v-if="product.discount"> ${{ product.price - product.discount }} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product Card',
    props: {
    product: Object,
    compact: Boolean,
    },
    methods: {
      getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
      },
      getAverageRating(product){
        let sum = 0;
        let reviews = 0;
        product.reviews.forEach(review => {
          review.rating? sum += review.rating : '';
          reviews++;
        })
        return sum ? sum/reviews : '';
      }
    }
  }
  
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
h3 {
  text-transform: capitalize;
  color: $featured-title;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}
h5 {
  text-transform: capitalize;
  font-weight: 400;
  color: $featured-tags;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
.original-price, .discounted-price {
  color: $featured-price;
  font-size: 1.2rem;
  font-family: serif;
  font-weight: 500;
}
.stars {
  color: $card-stars;
}
.original-price.erased{
  position: relative;
  font-size: 0.9rem;
  margin-right: 0.25rem;
  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: black;
  }
}
.product-card.large {
  .img-container {
    margin-bottom: 1rem;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  
}
.product-card.compact {
  display: flex;
  flex-direction: row-reverse;
  height: 100px;
  padding: 0.5rem 0;
  margin: 0 1.2rem;
  border-bottom: 1px solid $light-gray-line;
  .img-container {
    height: 100%;
    aspect-ratio: 62/80;
    img {
    height: 100%;
    }
  }
  .product-infos{
    width: 100%;
    color: $card-dark-text ;
    h3 {
      display: inline-block;
      font-weight: 300;
      font-size: 1.1rem;
      margin: 0 0.25rem 0.5rem 0;
    }
    .stars {
      margin-bottom: 0.5rem;
    }
    .original-price, .discounted-price {
      color: $card-dark-text ;
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .discounted-price {
      text-decoration: underline;
    }
  }
}
</style>