<template>
  <div class="call-to-action">
    <div class="container">
      <i class="fa-regular fa-envelope"></i>
      <h1>Subscribe now and get special offers</h1>
      <div class="input-group">
        <input type="email" placeholder="Insert your email">
        <OneButton class="blue btn">SEND</OneButton>
      </div>
    </div>
  </div>
</template>

<script>
import OneButton from './OneButton.vue';

  export default {
    name: "Call To Action",
    components: { OneButton }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
  .call-to-action {
    background-color: $footer-primary-light;
    padding: 85px 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;

      h1 {
        flex-grow: 1;
        color: $cta-title;
        margin-left: 1rem;
      }
      .input-group {
        margin-left: 2rem;
        input {
          min-width: 280px;
          border-radius: 1rem;
          padding: 0.6rem;
          border: none;
          &::placeholder{
            color: $cta-icon;
            font-size: 0.8rem;
          }
        }
        .btn {
          padding: 0.5rem 3rem;
        }
      }
      i {
        color: $cta-icon;
        font-size: 2rem;
        padding: 1rem;
        border-radius: 50%;
        background-color: $footer-primary ;
      }
    }
    
  }
</style>