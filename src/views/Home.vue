<template>
  <div class="container">
    <section class="arrivals--hot">
      <div 
      class="new--arrivals"
      :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.newArrival.images[0] + ')' }"
      >
        <h2>New Arrivals</h2>
      </div>

      <div 
      class="hot--item"
      :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.newArrival.images[1] + ')' }">
       <h2>Hot Item</h2>
      </div>
    </section>

    <section class="categories">
      <h1>SHOP TO</h1>
      <ul class="categories--list">
        <li 
        class="categories--list--item"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.categories[0].image + ')' }"
        @click="$router.push({path:'/products',query:{
          category : home.categories[0]._id,
          page: 1,
          sort: 1,
          order: 1
          }});">
        {{ home.categories[0].name }}</li>
        <li class="categories--list--item"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.categories[1].image + ')' }"
        @click="$router.push({path:'/products',query:{
          category : home.categories[1]._id,
          page: 1,
          sort: 1,
          order: 1
          }});">
        {{ home.categories[1].name }}</li>
        <li class="categories--list--item"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.categories[2].image + ')' }"
        @click="$router.push({path:'/products',query:{
          category : home.categories[2]._id,
          page: 1,
          sort: 1,
          order: 1
          }});">
        {{ home.categories[2].name }}</li>
        <li 
        class="show--more"
        @click="$router.push('categories')">Show<br> More</li>
      </ul>
    </section>

  </div>
</template>

<script>



export default {
  created(){
    this.$store.dispatch('getHomeDetails')
  },

  computed:{
    home(){
      return this.$store.getters.home
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
  @include container;
}

.arrivals--hot{
  display: flex;
  justify-content: space-between;
  height: 40vh;


  @media only screen and (max-width: 500px){
    width: 100%;
    flex-direction: column;
    height: 33vh;
  }

  .new--arrivals{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2rem;
    cursor: pointer;
    

    @media only screen and (max-width: 500px){
    width: 100%;
    height: 10rem;
    border-radius: 10px;
  }
  }

  .hot--item{
    border: 1px solid blue;
    background-position: center;
    background-size: cover;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2rem;
    

    @media only screen and (max-width: 500px){
    width: 100%;
    height: 10rem;
    border-radius: 10px;
  }
  }
}

.categories{
  margin-top: 2rem;

  &--list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;

     @media only screen and (max-width: 500px){
        justify-content: center;
      }

    &--item{
      min-width: 22rem;
      height: 20rem;
      border-radius: 7px;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      color: white;
      text-transform: uppercase;
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      //padding: 2rem;
      text-shadow: 2px 2px 1px #000;

      @media only screen and (max-width: 500px){
        margin-bottom: 1rem;
      }
     
    }

    .show--more{
      min-width: 20rem;
      height: 20rem;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      text-transform: uppercase;
      border: 1px solid black;
    }
  }
}

h2{
  color: rgb(252, 255, 73);
  font-size: 3rem;
  text-shadow: 2px 2px  rgb(0, 0, 0) ;
}

h1{
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

</style>

