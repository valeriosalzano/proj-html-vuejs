<template>
  <button type="button" class="btn one-button">
    <slot>click me</slot>
  </button>
</template>

<script>
  export default {
    name: 'One Button'
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

button {
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem;

  &.blue {
    background-color: $btn-blue-bg;
    color: $btn-blue-text;
  }
  &.transparent {
    background-color: $btn-transparent-bg;
    color: $btn-transparent-text;
    border: 2px solid $btn-transparent-border;
  }
}
</style>