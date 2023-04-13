<template>
  <ul class="nav-bar">
    <li v-for="item in navData">
      <a href="#">
        <i v-if="item.icon" :class="`fa-${item.icon[0]} fa-${item.icon[1]}`"></i>
        {{item.text}}
        <i v-if="item.dropdown" class="fa-solid fa-chevron-down"></i>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Nav Bar',
    data() {
      return {
        
      }
    },
    props: {
      navData: Array,
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.nav-bar {
  height: 100%;
  display: flex;
  li {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  .fa-chevron-down {
    font-size: 0.5rem;
    margin-left: 0.5rem;
  }
}
.header-top {
  li:not(:last-of-type){
    color: $header-top;
    font-size: 0.9rem;
    border-right: 1px solid $light-gray-line;
  }
  li:last-of-type{
    color: $header-top-dark;
    font-size: 0.9rem;
    background-color: $light-gray-bg;
    padding: 0 3.5rem;
    i {
      font-size: 0.7rem;
      margin-right: 0.5rem;
    }
  }
} 
.header-bottom li {
  color: $header-bottom;
  &:hover{
    position: relative;
    color: $header-bottom-hover;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 1rem;
      right: 1rem;
      height: 3px;
      background-color: $header-bottom-hover;
    }
  }
}
</style>