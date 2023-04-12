<template>
  <main class="page-main">
    <MainJumbotron></MainJumbotron>

    <section id="featured-products">
      <SectionTitle>
        <template #default>Featured Products</template>
        <template #subtitle>Must have products from our top sellers</template>
      </SectionTitle>
      <div class="container">
        <div class="categories-filter">
          <div v-for="category in featuredCategories" @click="setCategory(category)" :key="category">{{ category }}</div>
        </div>
        <div class="featured-cards">
          <ProductCard v-for="product in getFeaturedProducts" :product="product" :key="product.name"></ProductCard>
        </div>
      </div>
    </section>

    <section id="collections">
      <div v-for="element in collectionsData" :style='`background-image: url(" ${getImgPath(element.img)}")`'>
        <h2>{{ element.title }} collection</h2>
        <h3>{{ element.subtitle }}</h3>
        <OneButton class="transparent">VIEW MORE</OneButton>
      </div>
    </section>

    <section id="best-sellers">

    </section>

    <section id="pricing">

    </section>

    <section id="new-arrivals">

    </section>

    <section id="testimonials">

    </section>
    
    <section id="blog">

    </section>

    <div class="main-bottom">
      <section id="products-lists">

      </section>
      <BrandsList></BrandsList>

    </div>
    
  </main>
</template>

<script>
  import MainJumbotron from './MainJumbotron.vue';
  import SectionTitle from './SectionTitle.vue';
  import BrandsList from './BrandsList.vue';
  import CallToAction from './CallToAction.vue';
  import OneButton from './OneButton.vue';
  import ProductCard from './ProductCard.vue';

  export default {
    name: 'Page Main',
    components: {
    MainJumbotron,
    SectionTitle,
    BrandsList,
    CallToAction,
    OneButton,
    ProductCard,
},
    data() {
      return {
        featuredCategories: ['men','women','accessories'],
        selectedCategory: 'men',
        collectionsData: [
          {
            title: 'winter',
            subtitle: 'stylish and warm',
            img: 'winter_collection_bg.jpg'
          },{
            title: 'spring',
            subtitle: 'bright and colorful',
            img: 'spring_collection_bg.jpg'
          },{
            title: 'autumn',
            subtitle: 'rich and colorful',
            img: 'autumn_collection_bg.jpg'
          },
        ]
      }
    },
    props: {
      products: Array,
    },
    computed: {
      getFeaturedProducts(){
        let filteredProducts = [];
        this.products.forEach(product => {
          if(product.tags.includes(this.selectedCategory) && filteredProducts.length<4){
            filteredProducts.push(product)
            }
        });
        return filteredProducts;
      }
    },
    methods: {
      setCategory(category){
        this.selectedCategory = category;
      },
      getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
    },
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
#featured-products {
  .categories-filter{
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      padding: 20px 50px;
      border: 1px solid gray;
      text-transform: capitalize;
    }
  }

  .featured-cards {
    display: flex;
    &> *{
      width: 25%;
    }
  }
}
#collections {
  text-align: center;
  color: $collections-text;
  &>div {
    display: inline-block;
    width: calc(100% / 3);
    aspect-ratio: 620/650;
    background-size: cover;
  }
  h2 {
    margin-top: 70%;
    text-transform: capitalize;
  }
  h3 {
    text-transform: uppercase;
  }
}
</style>