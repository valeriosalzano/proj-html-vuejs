<template>
  <header class="page-header">
    <div class="header-top">
      <div class="container">
        <SocialsList></SocialsList>
        <NavBar :navData="userNavBar"></NavBar>
      </div>
    </div>
    <div class="header-bottom container">

      <div class="left-side">
        <img src="../assets/images/classic_shop_logo2x.png" alt="shop logo">
      </div>

      <div class="right-side">
        <NavBar :navData="pageNavBar"></NavBar>
        <OneButton class="blue">SHOP NOW!</OneButton>
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>

    </div>
  </header>
</template>

<script>
import SocialsList from './SocialsList.vue';
import NavBar from './NavBar.vue';
import OneButton from './OneButton.vue';

  export default {
    name: "Page Header",
    components: {
      SocialsList,
      NavBar,
      OneButton,
    },
    data() {
      return {
        userNavBar: [
          {
            text: 'Shopping Cart',
          },
          {
            text: 'My Account',
            dropdown: [],
          },
          {
            text: 'CART',
            dropdown: [],
            icon: ['solid','cart-shopping'],
          }
        ],
        pageNavBar: [
          {
            text: 'Home',
            dropdown: [],
          },
          {
            text: 'Shop',
            dropdown: [],
          },
          {
            text: 'Products',
            dropdown: [],
          },
          {
            text: 'Categories',
            dropdown: [],
          },
          {
            text: 'News'
          },
          {
            text: 'Elements',
            dropdown: [],
          }
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.header-top .container, .header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header-top {
  height: 50px;
  border-bottom: 1px solid $light-gray-line;
  .socials-list{
    color: $header-top-dark;
    font-size: 0.9rem;
  }
}

.header-bottom {
  height: 100px;
  .left-side {
    height: 50px;
    img {
      height: 100%;
    }
  }
  .right-side {
    height: 100%;
    display: flex;
    align-items: center;
    i {
      font-size: 0.8rem;
      margin-left: 1rem;
    }
  }
}
</style>