<template>
    <div class="cart--item">
        <router-link :to="'/product/' + item.product._id" class="cart--item__image"
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ item.product.images[0] + ')' }"></router-link>
        <div class="cart--item__details">
            <h2 class="cart--item__details__name" @click="$router.push(`/product/${item.product._id}`)">{{item.product.name}}</h2>
            <p class="cart--item__details__stock">{{item.product.stock > 0 ? 'in stock' : 'out of stock'}}</p>
            <Quantity 
            :quantity="quantity" 
            v-on:increaseQuantity="quantity++"
            v-on:decreaseQuantity="quantity--"  
            />
            <p class="cart--item__details__price">{{item.product.price}} EGP</p>
        </div>
        <div class="cart--item__icon">
            <svg @click="deleteFromCart">
                <use xlink:href="../../assets/sprite.svg#icon-bin2"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import Quantity from '../Quantity'
export default {
    props: {
        item: Object
    },
    data(){
        return{
            quantity: this.item.amount,
        }
    },
    components: {
        Quantity
    },
    methods:{
        deleteFromCart(){
            this.$emit('deleteItem')
        }
    }
}
</script>

<style lang="scss" scoped>

.cart--item{
    display: flex;
    width: 44rem;    
    margin-bottom: 1rem;
    //border: 1px solid black;

    @media only screen and (max-width: 500px){
        width: 100%;
    }

    &__image{
        width: 18rem;
        height: 18rem;
        margin-right: 2rem;

        background-position: center;
        background-size: cover;
        border-radius: 10px;

        @media only screen and (max-width: 500px){
            width: 16rem;
            height: 16rem;
        }
    }

    &__details{
        margin-right: 6rem;
        padding: 1rem 0;

        @media only screen and (max-width: 500px){
            padding: 0;
        }

        &__name{
            font-weight: 100;
            text-transform: capitalize;
            font-size: 2rem;
            cursor: pointer;

            @media only screen and (max-width: 500px){
                font-weight: 300;
            }
        }

        &__stock{
            color: rgb(161, 161, 161);
            text-transform: capitalize;
            margin-bottom: 2rem;

            @media only screen and (max-width: 500px){
            margin-bottom: 1rem;
            }
        }

        &__price{
            font-size: 2rem;
            margin-top: 3rem;

            @media only screen and (max-width: 500px){
            margin-top: 0;
            }
        }
        
    }

    &__icon{
        padding: 1rem 0;

        svg{
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }

    }

    
}

</style>