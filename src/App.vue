<template>
  <div id="app">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <nav-bar  @show-backdrop="toggleBackdrop" /> 
      <Backdrop 
      v-if="showBackdrop"
      :component="backdropComponent"
      @hide-backdrop="showBackdrop = false"
      @toggle-component="toggleComponent" />
      <router-view/>
      <Footer v-if="$store.getters.categories.length > 0" />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Backdrop from './components/backdrop/backdrop';

export default {
  data(){
    return{
      showFooter: false,
      showBackdrop: false,
      backdropComponent: 'login'
    }
  },
  components:{
    navBar : Navbar,
    Footer,
    Backdrop
  },
  created(){
    this.$store.dispatch('tryAutoLogin');
    this.$store.dispatch('getCategories');
  },
  mounted(){
    this.showFooter = true;
  },
  methods: {
    toggleComponent(component){
      console.log(component)
      this.backdropComponent = component
    },
    toggleBackdrop(component){
      this.showBackdrop = true;
      this.backdropComponent = component;
    }
  }
}
</script>

<style lang="scss">
@import './sass/global.scss';

html{
    overflow-x: hidden;
    font-size: 62.5%; //1rem = 10px


   /*@media only screen and (max-width: 500px){
        font-size: 80%;
    }*/
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: 'Gilroy', sans-serif;
  font-family: 'Quicksand', sans-serif;
}

body{
  padding: 0 2rem;
  overflow-x: hidden;
  
  @media only screen and (max-width: 500px){
    padding: 5px 10px;
  }
}


/*****Paginataion Style */

.container-class{

    display: flex;
    justify-content: space-between;
    color: black;
    margin-top: 4rem;
    font-size: 1.4rem;
    
    align-self: center;
    list-style: none;
    
}

li.page-class{
    border: 1px solid $primary-color;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    margin: 0 .5rem;
    cursor: pointer;
    transition: all .2s;

    &:hover{
      background-color: $primary-color;
      color: #fff;
    }
}

.active-class{
   background-color: $primary-color;
   color: #fff;
}

</style>