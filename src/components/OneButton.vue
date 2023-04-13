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
  border-radius: 1.2rem;
  padding: 0.6rem 1.5rem;
  margin: 0 1rem;
  font-weight: 600;
  font-family: serif;
  font-size: 0.9rem;
  transition: background-color 0.25s;
  cursor: pointer;

  &.big {
    padding: 1rem 2.5rem;
    border-radius: 1.6rem;
    font-size: 1.3rem;
  }
  &.blue {
    background-color: $btn-blue-bg;
    color: $btn-blue-text;
    &:hover{
      background-color: $btn-blue-hover-bg;
    }
  }
  &.transparent {
    background-color: $btn-transparent-bg;
    color: $btn-transparent-text;
    border: 2px solid $btn-transparent-border;
    &:hover{
      background-color: $btn-transparent-text;
      color: black;
      mix-blend-mode: lighten;
      -webkit-text-stroke: 1px gray;
    }
  }
}
</style>