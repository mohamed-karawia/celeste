<template>
    <footer class="footer">

        <div class="footer--website">
            <h2>Website</h2>
            <ul>
                <li>SHOP</li>
                <li>Collections</li>
                <li>Customize</li>
                <li>about us</li>
            </ul>
        </div>

        <div class="footer--categories">
            <h2>Categories</h2>
            <ul>
               <li 
               v-for="cat in categories" 
               :key="cat._id"
               @click="
               $router.push(`/products?category=${cat._id}&page=1&sort=1&order=1`); 
               $store.dispatch('getProducts')">{{ cat.name }}</li> 
            </ul>
        </div>

        <div class="footer--search">
            <h2>Contact Us</h2>
            <ul class="icons">
                <li>
                    <svg class="footer--search__icon">
                    <use xlink:href="../assets/sprite.svg#icon-instagram"></use>
                    </svg>
                </li>

                <li>
                    <svg class="footer--search__icon">
                    <use xlink:href="../assets/sprite.svg#icon-facebook"></use>
                    </svg>
                </li>

                <li>
                    <svg class="footer--search__icon">
                    <use xlink:href="../assets/sprite.svg#icon-gmail"></use>
                    </svg>
                </li>
            </ul>
        </div>


    </footer>
</template>

<script>
export default {
    computed:{
        categories(){
            return this.$store.getters.categories
        }
    }
}
</script>

<style lang="scss" scoped>

.footer{
    background-color: #4F4F4F;
    position: absolute;
    width: 100vw;   
    left: 0;
    padding: 1rem 0;;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h2{
        color: white;
        font-size: 2.5rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    ul{
        list-style: none;
        //border: 1px solid white;
        &.icons{
            
            width: 80%;
        }
    }

    li{
        color: white;
        font-size: 1.3rem;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: .5rem;
    }

    &--website{

        @media only screen and (max-width: 500px){
            display: none;
        }

    }

    &--categories{

    }

    &--search{

        display: flex;
        flex-direction: column;
       

        ul{
            display: flex;
            width: 45%;
            justify-content: space-between;
        }

        input{
            margin-bottom: 1rem;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 10px;
        }

        &__icon{
            width: 2rem;
            height: 2rem;
            background-color: white;
            border-radius: 10px;
            cursor: pointer;
            margin-right: 1rem;
            border: 1px solid white;
        }
    }
}

</style>