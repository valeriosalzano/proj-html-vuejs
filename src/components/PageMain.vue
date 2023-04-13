<template>
  <main class="page-main">
    <MainJumbotron></MainJumbotron>

    <section id="featured-products" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>Featured Products</template>
          <template #subtitle>Must have products from our top sellers</template>
        </SectionTitle>
        <div class="categories-filter">
          <div v-for="(category,index) in featuredCategories" @click="setCategory(category)" :key="category" :class="selectedCategory==category?'selected':''">{{ category }}</div>
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

    <section id="best-sellers" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>Best Seller</template>
          <template #subtitle>Must have products from our top sellers</template>
        </SectionTitle>
        <OneSlider :products="getBestSellers"></OneSlider>
      </div>
    </section>

    <section id="promo">
      <div class="bg-wrapper">
        <div class="container">
          <div class="promo-1">
            <h3>70% Off</h3>
            <p>Vivamus tempor leo lacus, feugiat ut magna aliquam erat.</p>
            <OneButton class="transparent">VIEW MORE</OneButton>
          </div>
          <div class="promo-2">
            <h3>Free Shipping</h3>
            <p>Vivamus tempor leo lacus, feugiat ut magna aliquam erat.</p>
            <OneButton class="transparent">VIEW MORE</OneButton>
          </div>
        </div>
      </div>
    </section>

    <section id="new-arrivals" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>New Arrivals</template>
          <template #subtitle>Brand new products from top designers</template>
        </SectionTitle>
      </div>
      <OneSlider :products="products.slice(0,5)"></OneSlider>
    </section>

    <section id="testimonials">
      <OneSlider :people="people"></OneSlider>
    </section>
    
    <section id="blog" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>From Our blog</template>
          <template #subtitle>The latest Classic Shop news</template>
        </SectionTitle>
        <div class="post-list">
          <div v-for="post in posts.slice(0,3)" class="post">
            <img :src="getImgPath(post.img)" alt="image from our blog">
            <h2>{{ post.title }}</h2>
            <p class="post-infos">{{ post.date }} | {{ post.comments }} Comments</p>
            <p>{{ post.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="main-bottom">
      <section id="products-lists" class="container">
        <div v-for="list in productsListsData">
          <h1>{{ list.title}}</h1>
          <ul>
            <li v-for="product in list.elements"><ProductCard :product="product" :compact="true"></ProductCard></li>
          </ul>
        </div>
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
  import OneSlider from './OneSlider.vue'

  export default {
    name: 'Page Main',
    components: {
    MainJumbotron,
    SectionTitle,
    BrandsList,
    CallToAction,
    OneButton,
    ProductCard,
    OneSlider,
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
        ],
      }
    },
    props: {
      products: Array,
      people: Array,
      posts: Array,
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
      },
      getBestSellers(){
        let sortedArray = [...this.products];
        sortedArray.sort((a,b) => b.sold - a.sold);
        return sortedArray.slice(0,5);
      },
      getDiscountedProducts(){
        let discountedProducts = [];
        this.products.forEach(product => {
          if(product.discount){
            discountedProducts.push(product)
            }
        });
        return discountedProducts;
      },
      getTopRated(){
        let sortedArray = [...this.products];
        sortedArray.sort((a,b) => b.reviews.length - a.reviews.length);
        return sortedArray;
      },
      getLatestReviews(){
        let sortedArray = [...this.products].filter(product => product.reviews.length);
        sortedArray.sort((a,b) => {
          b.reviews[0].date - a.reviews[0].date
          });
        return sortedArray;
      },
      productsListsData(){
        return [
          {
            title: 'featured',
            elements: this.getBestSellers.slice(2,5),
          },{
            title: 'on sale',
            elements: this.getDiscountedProducts.slice(0,3),
          },{
            title: 'top rated',
            elements: this.getTopRated.slice(0,3),
          },{
            title: 'latest reviews',
            elements: this.getLatestReviews.slice(0,3),
          }
        ]
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

section.spaced {
  padding: 100px 0 150px;
}

#featured-products {
  .categories-filter{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.1rem;
    color: $section-title;
    margin-bottom: 2rem;

    div {
      padding: 1rem 3.5rem;
      border: 1px solid $light-gray-line;
      background-color: $light-gray-bg;
      text-transform: capitalize;
      &.selected{
        background-color: $white-bg;
      }
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
#promo {
  padding: 90px 0;
  background-color: #f4f8f9;
  .bg-wrapper {
    background: url("../assets/images/bkgd_confetti-compressor.jpg") center;
    background-size: 180%;
  }
  .promo-1, .promo-2 {
    display: inline-block;
    width: calc(50% - 2rem);
    aspect-ratio: 560/370;
    background-size: cover;
    background-position: center;
    color: $promo-text;
    padding: 100px 20% 0 60px ;
  }
  .promo-1{
    background-image: url("../assets/images/promo_box_1_bg.jpg");
    margin-right: 2rem;
  }
  .promo-2{
    background-image: url("../assets/images/promo_box_2_bg.jpg");
  }
}
#testimonials {
  color: $testimonials-text;
}
#blog {
  .post-list{
    display: flex;
    justify-content: space-between;
    .post {
      width: calc(100% / 3 - 20px);
      img {
        width: 100%;
      }
    }
  }
}
.main-bottom {
  border-top: 1px solid $gray-line;
}
#products-lists {
  display: flex;
  &>div{
    flex-grow: 1;
  }
  h1 {
    text-transform: uppercase;
  }
  li {
    margin: 0 0.5rem;
    border-bottom: 1px solid $gray-line;
  }
}
</style>