<template>
  <footer id="page-footer">

    <CallToAction></CallToAction>

    <!-- FOOTER TOP -->
    <div class="footer-top">
      <div class="container">
        <div class="col company">
          <img class="logo" src="../assets/images/classic_shop_logo2x.png" alt="shop logo">
          <div class="company-info">
            <p>12345 North Main Stree,</p>
            <p>New York, NY 555555</p>
            <p>Phone: 1.800.555.6789</p>
            <p>Email: info@company.com</p>
            <p>Web: Theme-fusion.com</p>
          </div>
          <SocialsList></SocialsList>
        </div>
        <div class="col top-rated">
          <h3>top rated products</h3>
          <ul>
            <li v-for="product in getTopRated.slice(0,3)">
              <ProductCard :product="product" :compact="true" ></ProductCard>
            </li>
          </ul>
        </div>
        <div class="col posts">
          <h3>recent posts</h3>
          <ul>
            <li v-for="post in posts">
              <i class="fa-solid fa-chevron-right"></i> {{ post.title }}
            </li>
          </ul>
        </div>
        <div class="col tags">
          <h3> tags </h3>
          <span v-for="tag in sortedTags"> {{ tag }} </span> 
        </div>
      </div>
    </div>

    <!-- FOOTER BOTTOM  -->
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
        'D&G ',
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
      sortedTags(){
        let sorted = this.tags.sort((a,b)=> {
          let fa = a.toLowerCase();
          let fb = b.toLowerCase();
          console.log(fa,fb)

          if (fa < fb){
            return -1
          }
          if (fa > fb){
            return 1
          }
          return 0
        })
        return sorted;
      }
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

// FOOTER TOP STYLE
.footer-top {
  background-color: $footer-primary ;
  padding: 60px 0;
  .container {
    display: flex;
    justify-content: space-between;
    .logo {
      filter:brightness(9999);
      max-width: 170px;
      margin-bottom: 50px;
    }
    .col {
      width: calc(100% / 4 - 1rem);
      color: $footer-text;
      h3 {
        text-transform: uppercase;
        font-size: 1.1rem;
        margin-bottom: 25px;
      }
    }
    .company-info {
      line-height: 1.8rem;
      margin-bottom: 50px;
    }
    .posts {
      li {
        padding: 0.9rem 0;
        border-bottom: 1px solid $gray-line;
        i {
          font-size: 0.6rem;
          margin-right: 0.25rem;
        }
      }
    }
    .tags {
      padding-right: 1rem;
      span {
        font-size: 1rem;
        display: inline-block;
        padding: 0.5rem;
        margin: 0.1rem;
        border: 1px solid $gray-line;
      }
    }
  }
}

// FOOTER BOTTOM STYLE
.footer-bottom {
  padding: 2rem 0 0.5rem;
  text-align: center;
  background-color: $footer-primary-dark;
  p {
    color: #fff;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
}
</style>