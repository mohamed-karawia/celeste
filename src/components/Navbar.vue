<template>
    <nav>
        <div class="upper--nav">
            <div class="nav--logo" @click="$router.push('/')" /> 

            <div class="ico-menu">

                <svg class="nav--icon" @click="$router.push('/login')">
                    <use xlink:href="../assets/sprite.svg#icon-user"></use>
                </svg>

                <svg class="nav--icon" @click="showSearch = !showSearch">
                    <use xlink:href="../assets/sprite.svg#icon-search"></use>
                </svg>

                <svg class="nav--icon" @click="$router.push('/cart')">
                    <use xlink:href="../assets/sprite.svg#icon-cart"></use>
                </svg>

                <svg class="nav--icon" id="mobile--icon" @click="showMobileMenu = !showMobileMenu">
                    <use xlink:href="../assets/sprite.svg#icon-menu"></use>
                </svg> 
            </div>

            <div class="mobile--menu" v-if="showMobileMenu">
                <ul class="mobile--nav--list">
                <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/products?category=600d8fff33a0700015473f15&page=1&sort=1&order=1">SHOP</router-link></li>
                <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/categories">CATEGORIES</router-link></li>
                <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/customize">CUSTOMIZE</router-link></li>
                <li class="mobile--nav--list__item" @click="showMobileMenu = false"><router-link to="/about-us">ABOUT US</router-link></li>
                </ul>
            </div>  

        </div>

        <Search v-if="showSearch" 
        :tags="categories"
        v-on:hideSearch="showSearch = false"/>

        <div class="lower--nav">
            <ul class="nav--list">
                <li class="nav--list__item"><router-link to="products?category=600d8fff33a0700015473f15&page=1&sort=1&order=1">SHOP</router-link></li>
                <li class="nav--list__item"><router-link to="/categories">CATEGORIES</router-link></li>
                <li class="nav--list__item"><router-link to="/customize">CUSTOMIZE</router-link></li>
                <li class="nav--list__item"><router-link to="/about-us">ABOUT US</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Search from '../components/search/Search'
export default {
    data(){
        return{
            showMobileMenu: false,
            showSearch: false
        }
    },
    components: {
        Search
    },
    computed: {
        categories(){
            return this.$store.getters.categories
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../sass/global.scss";

.upper--nav{
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    @media only screen and (max-width: 500px){
        height: 7vh;      
    }
}

.nav--logo{
    width: 11rem;
    background-image: url(../assets/logo.jpeg);
    background-position: center;
    background-size: cover;
    cursor: pointer;

     @media only screen and (max-width: 500px){
        width: 12rem;
    }
}

.mobile--menu{
    width: 100vw;
    height: 50vh;
    background-color: black;
    position: absolute;
    top: 9vh;
    display: flex;
    justify-content: center;
    z-index: 999;

     @media only screen and (min-width: 501px){
        display: none;
    }
}

.mobile--nav--list{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    &__item{
        color: white;
        font-size: 1.5rem;
        

        a{
            @include link;
            color: white;
        }
    }
}

.lower--nav{
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 750px){
        display: none;
        
    }

    .nav--list{
    list-style: none;
    display: flex;
    min-width: 50%;
    justify-content: space-between;
    align-items: center;

    &__item{
        color: black;
        font-size: 1.5rem;
        

        a{
            @include link;
            color: black;
        }
    }
}

}


.ico-menu{
    min-width: 10%;
    display: flex;
    justify-content: space-between;
}

.nav--icon{
    width: 2.5rem;
    height: 2.5rem;
    fill: black;
    align-self: center;
    margin-right: 1rem;
    cursor: pointer;

    @media only screen and (max-width: 500px){
    width: 2rem;
    height: 2rem;       
    }
}

    #mobile--icon{
    width: 2.5rem;
    height: 2.5rem;
    fill: black;
    cursor: pointer;

    @media only screen and (min-width: 750px){
        display: none;
        width: 2rem;
        height: 2rem;     
    }
    }

</style>