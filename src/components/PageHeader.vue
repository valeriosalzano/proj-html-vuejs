<template>
  <header class="page-header">
    <div class="header-top container">
      <SocialsList></SocialsList>
      <NavBar :navData="userNavBar"></NavBar>
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
.header-top,
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-bottom .right-side {
  display: flex;
  align-items: center;
}
</style>