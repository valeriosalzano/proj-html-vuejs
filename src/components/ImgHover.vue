<template>
  <div class="img-hover">

    <div v-show="!checked" class="product-info">
      <h2>{{ product.name }}</h2>
      <h4>{{ product.tags.join(', ') }}</h4>
      <h3>${{ product.price }}</h3>
      <button type="button" class="cart btn" @click.stop="toggleChecked"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
      <button type="button" class="details btn"><i class="fa-solid fa-list"></i> Details</button>
    </div>

    <div v-show="checked" class="product-checked">
      <i class="fa-regular fa-square-check check" @click.stop="toggleChecked"></i>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Img Hover',
    props:{
      product: Object,
    },
    data() {
      return {
        checked: false,
      }
    },
    methods: {
      toggleChecked(){
        this.checked = !this.checked;
      }
    }
  }
</script>

<style lang="scss" scoped>
.img-container{
  .img-hover {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(rgba(66, 126, 213, 0.75), rgb(226, 128, 177, 1));
    filter: opacity(0);
    z-index: 2;
    transition: filter 0.5s;
  }
  &:hover .img-hover {
    filter: opacity(1);
  }
}
// FIRST LAYER STYLE
.product-info {
  height: 100%;
  position: relative;
  color: white;
  text-align: center;
  padding: 40% 1rem 0;
  h2 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  h4{
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
}

// SECOND LAYER STYLE
.product-checked {
  height: 100%;
  position: relative;
  .check {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.5rem;
    transform: translate(-50%,-50%);
    padding: 1.2rem;
    border-radius: 50%;
    color: white;
    background-color: #1f2225;

  }
}

// BTNS STYLE
.btn {
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.5s;

  &:hover{
    color: #427ed5;
  }
  &.cart {
    bottom: 2rem;
    left: 1.5rem;
  }
  &.details {
    bottom: 2rem;
    right: 1.5rem;
  }
}
</style>