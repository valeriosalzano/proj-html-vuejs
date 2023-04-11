<template>
  <ul class="nav-bar">
    <li v-for="item in navData">
      <i v-if="item.icon" :class="`fa-${item.icon[0]} fa-${item.icon[1]}`"></i>
      {{item.text}}
      <i v-if="item.dropdown" class="fa-solid fa-chevron-down"></i>
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
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  .fa-chevron-down {
    font-size: 0.5rem;
  }
}
</style>