<template>
  <main class="page-main">

    <MainJumbotron></MainJumbotron>

    <!-- FEATURED PRODUCTS -->
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
          <ProductCard v-for="product in getFeaturedProducts.slice(0,4)" :product="product" :key="product.name"></ProductCard>
        </div>
      </div>
    </section>

    <!-- COLLECTIONS -->
    <section id="collections">
      <div v-for="element in collectionsData" :style='`background-image: url(" ${getImgPath(element.img)}")`'>
        <h2>{{ element.title }} collection</h2>
        <h3>{{ element.subtitle }}</h3>
        <OneButton class="transparent">VIEW MORE</OneButton>
      </div>
    </section>

    <!-- BEST SELLERS -->
    <section id="best-sellers" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>Best Seller</template>
          <template #subtitle>Must have products from our top sellers</template>
        </SectionTitle>
        <OneSlider :products="getBestSellers.slice(0,5)"></OneSlider>
      </div>
    </section>

    <!-- PROMO -->
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

    <!-- NEW ARRIVALS  -->
    <section id="new-arrivals" class="spaced">
      <div class="container">
        <SectionTitle>
          <template #default>New Arrivals</template>
          <template #subtitle>Brand new products from top designers</template>
        </SectionTitle>
      </div>
      <OneSlider :products="products.slice(0,5)"></OneSlider>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials">
      <OneSlider :people="people"></OneSlider>
    </section>
    
    <!-- BLOG -->
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

    <!-- MAIN BOTTOM -->
    <div class="main-bottom">

      <section id="products-lists">
        <div class="container">
          <div v-for="(list,index) in productsListsData" class="list">
            <h1>{{ list.title}}</h1>
            <ul>
              <li v-for="product in list.elements" :key="product.name">
                <ProductCard :product="product" :compact="true" :reviews="index == 3"></ProductCard>
              </li>
            </ul>
          </div>
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
            subtitle: 'rich and comfortable',
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
          if(product.tags.includes(this.selectedCategory)){
            filteredProducts.push(product)
            }
        });
        return filteredProducts;
      },
      getBestSellers(){
        let sortedArray = [...this.products];
        sortedArray.sort((a,b) => b.sold - a.sold);
        return sortedArray
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
          return b.reviews[0].date - a.reviews[0].date
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

// FEATURE PRODUCTS STYLE
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

// COLLECTIONS STYLE
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
    font-size: 3rem;
    margin-top: 60%;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    margin-bottom: 2rem;
  }
}

// PROMO STYLE
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
    padding: 100px 50px ;
    h3 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    p{
      width: 55%;
      line-height: 1.5rem;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  }
  .promo-1{
    background-image: url("../assets/images/promo_box_1_bg.jpg");
    margin-right: 2rem;
  }
  .promo-2{
    background-image: url("../assets/images/promo_box_2_bg.jpg");
  }
}

// TESTIMONIALS
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
        margin-bottom: 0.5rem;
      }
      h2 {
        font-size: 1.2rem;
        color: $blog-title;
        margin-bottom: 0.5rem;
      }
      p {
        color: $blog-text;
        line-height: 1.8rem;
        font-size: 1rem;
        letter-spacing: 0.5px;
        &.post-infos{
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

// MAIN BOTTOM STYLE
.main-bottom {
  border-top: 2px solid $light-gray-line;
  padding-top: 60px;
}
#products-lists .container {
  width: 100%;
  display: flex;
  margin-bottom: 65px;
  .list {
    width: calc(100% / 4)
  }

  h1 {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    padding-left: 0.5rem;
  }
}
</style>