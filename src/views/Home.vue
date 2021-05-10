<template>
  <div class="container">
    <section class="arrivals--hot" v-if="home.newArrival.length > 0">
      <div class="new--arrivals">
        <div 
        class="new--arrivals__image"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.newArrival[0].images[0] + ')' }"
        @click="$router.push(`/product/${home.newArrival._id}`)"></div>
        <h2>New Arrivals</h2>

      </div>
      



      <div 
      class="hot--item"
      >
      <div class="hot--item__image" 
      :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.hotItem.images[0] + ')' }"
      @click="$router.push(`/product/${home.hotItem._id}`)">

      </div>
       <h2>Hot Item</h2>
      </div>
    </section>

    <section class="categories" v-if="home.categories.length > 0">
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
        </li>
        <li class="categories--list--item"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.categories[1].image + ')' }"
        @click="$router.push({path:'/products',query:{
          category : home.categories[1]._id,
          page: 1,
          sort: 1,
          order: 1
          }});">
        </li>
        <li class="categories--list--item"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ home.categories[2].image + ')' }"
        @click="$router.push({path:'/products',query:{
          category : home.categories[2]._id,
          page: 1,
          sort: 1,
          order: 1
          }});">
        </li>
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
  },
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
  height: 42vh;


  @media only screen and (max-width: 500px){
    width: 100%;
    flex-direction: column;
    height: 50vh;
  }

  .new--arrivals{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    cursor: pointer;
    padding: 3px;
    
    @media only screen and (max-width: 500px){
    width: 100%;
    height: 40rem;
    border-radius: 10px;
  }

    &:hover{
      border: 1px solid $primary-color;
      border-radius: 10px;
    }
  }

  .new--arrivals__image{
    //border: 1px solid red;
    background-position-y: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2rem;
    

    
  }

  .hot--item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 100%;
    cursor: pointer;

    @media only screen and (max-width: 500px){
    display: none;
  }

    &:hover{
      border: 1px solid $primary-color;
      border-radius: 10px;
    }
  }

  .hot--item__image{
    
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 40rem;
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
        display: grid;
        grid-template-columns: repeat(auto-fill, 40vw); //make 4 cols with size 1fr
        
      }

    &--item{
      width: 22rem;
      height: 20rem;
      border-radius: 7px;
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
      background-size: 100%;
      background-repeat: no-repeat;
      transition: all .2s;

      @media only screen and (max-width: 500px){
        width: 40vw;
      }

      &:hover{
        background-size: 103%;
      }

      @media only screen and (max-width: 500px){
       margin-bottom: 1rem;
      }
     
    }

    .show--more{
      width: 20rem;
      height: 20rem;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      text-transform: uppercase;
      border: 1px solid $primary-color;
      cursor: pointer;
      transition: all .4s;

      @media only screen and (max-width: 500px){
        width: 40vw;
        height: 16rem;
        margin-top: 2rem;
      }

      &:hover{
        background-color: $primary-color;
        color: white;
      }
    }
  }
}

h2{
  color: $secondary-color;
  font-size: 2.5rem;
  //text-shadow: 1px 1px 2px rgb(139, 139, 139);
  font-weight: 500;
}

h1{
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

</style>

