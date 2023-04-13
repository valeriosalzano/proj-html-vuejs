<template>
  <div class="section-title">
    <h2><slot> </slot></h2>
    <h3><slot name="subtitle" ></slot> </h3>
  </div>
</template>

<script>
  export default {
    name: 'Section Title',
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: $section-title;
  margin-bottom: 1rem;

  &::before,&::after {
    content: '';
    display: inline-block;
    height: 1px;
    vertical-align: middle;
    flex-grow: 1;
    border-radius: 1rem;
    background-color: $light-gray-line;
  }
}
h3 {
    font-weight: 400;
    font-size: 1.1rem;
    color: $section-subtitle;
  }
</style>