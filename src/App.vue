<template>
  <div id="app">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    navBar : Navbar
  },
  created(){
    this.$store.dispatch('getCategories')
  }
}
</script>

<style lang="scss">

html{
    overflow-x: hidden;
    font-size: 62.5%; //1rem = 10px

   /* @media only screen and (max-width: 500px){
        font-size: 80%;
    }*/
}

body{
  padding: 1rem 2rem;
  padding-top: 0;

  @media only screen and (max-width: 500px){
    padding: 5px 10px;
  }
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', sans-serif;
}

</style>