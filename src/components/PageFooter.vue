<template>
  <footer class="page-footer">
    <CallToAction></CallToAction>
    <div class="footer-top">
      <div class="container">
        <div class="col">
          <img src="../assets/images/classic_shop_logo2x.png" alt="shop logo">
          <p>12345 North Main Stree,</p>
          <p>New York, NY 555555</p>
          <p>Phone: 1.800.555.6789</p>
          <p>Email: info@company.com</p>
          <p>Web: Theme-fusion.com</p>
          <SocialsList></SocialsList>
        </div>
        <div class="col">
          <h3>top rated products</h3>
          <ul>
            <li v-for="product in getTopRated.slice(0,3)">
              <ProductCard :product="product" :compact="true" ></ProductCard>
            </li>
          </ul>
        </div>
        <div class="col">
          <h3>recent posts</h3>
          <ul>
            <li v-for="post in posts">
              <i class="fa-solid fa-chevron-right"></i> {{ post.title }}
            </li>
          </ul>
        </div>
        <div class="tags col">
          <span v-for="tag in tags"> {{ tag }} </span> 
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; Copyright 2012-2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress</p>
      <img src="../assets/images/payment_cards_footer.png" alt="">
    </div>
    
  </footer>
</template>

<script>
import CallToAction from './CallToAction.vue';
import SocialsList from './SocialsList.vue';
import ProductCard from './ProductCard.vue';

  export default {
    name: 'Page Footer',
    components: {
    CallToAction,
    SocialsList,
    ProductCard,
    },
    data() {
      return {
        tags: [
        'Black ',
        'hat ',
        'boots ',
        'Fabric ',
        'Hipster ',
        'Brown ',
        'flowers ',
        'lines ',
        'Casual ',
        'Grey ',
        'multi-purpose ',
        'Outdoors ',
        'red ',
        'New York ',
        'responsive ',
        'summer ',
        'sweater ',
        'Travel ',
        'Warm ',
        'White ',
        'winter ',
        ]
      }
    },
    props: {
      products: Array,
      posts: Array,
    },
    computed: {
      getTopRated(){
        let sortedArray = [...this.products];
        sortedArray.sort((a,b) => b.reviews.length - a.reviews.length);
        return sortedArray;
      },
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.footer-top {
  background-color: $footer-primary ;
  .container {
    display: flex;
    .col {
      width: calc(100% / 4 - 1rem);
    }
  }
}
.footer-bottom {
  text-align: center;
  background-color: $footer-primary-dark;
}
</style>