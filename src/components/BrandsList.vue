<template>
  <div class="brands">
    <div class="container">
      <h1>brand logos</h1>
      <ul class="brands-list">
        <li v-for="(brand,index) in brandsData" v-show="index < 5">
          <img :src="getImgPath(brand.logo)" :alt="brand.name + ' logo'">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Brands List',
    data() {
      return {
        brandsData: [
          {
            name: 'logo 6',
            logo: 'b_logotype_6.png'
          },{
            name: 'logo 7',
            logo: 'b_logotype_7.png'
          },{
            name: 'logo 1',
            logo: 'b_logotype_1.png'
          },{
            name: 'logo 2',
            logo: 'b_logotype_2.png'
          },{
            name: 'logo 3',
            logo: 'b_logotype_3.png'
          },{
            name: 'logo 4',
            logo: 'b_logotype_4.png'
          },{
            name: 'logo 5',
            logo: 'b_logotype_5.png'
          },
        ],  
      }
    },
    methods: {
      getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
      },
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.brands{
  text-align: center;
  background-color: #f6f6f6;
  padding: 70px 0;
  
  h1{
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 300;
    color: $brands-title;
    letter-spacing: 2px;
    margin-bottom: 40px;
  }
  .brands-list{
    display: flex;
    justify-content: space-between;
  }
}
</style>

