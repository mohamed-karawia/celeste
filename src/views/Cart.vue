<template>
    <div class="container">

        <div v-for="item in cart" :key="item._id">
            <cart-item :item="item" @deleteItem="deleteFromCart(item._id)" />
        </div>

        <div class="total">
            <h2 class="total__header">
                TOTAL
            </h2>

            <div class="total__details">
                <h3>SUBTOTAL</h3>
                <p>{{cartTotal}} EGP</p>
            </div>

            <div class="total__details">
                <h3>DELIVERY</h3>
                <p>20 EGP</p>
            </div>

            <button class="check">CHECK OUT</button>

        </div>
    </div>
</template>

<script>
import CartItem from '../components/cart/CartItem';

export default {
    components: {
        cartItem : CartItem
    },
    created(){
        this.$store.dispatch('getCart')
    },
    computed:{
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.cartTotal
        }
    },
    methods: {
        deleteFromCart(id){
            console.log(id)
            this.$store.dispatch('deleteFromCart', id)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: 500px){
        flex-direction: column;
    }
}

.total{
    width: 40rem;
    background-color: $primary-color;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    border-radius: 10px;

    @media only screen and(max-width: 500px){
        width: 100%;
    }

    &__header{
        font-weight: 100;
        font-size: 3rem;
        margin-bottom: 2rem;

    }

    &__details{
        margin-bottom: 2rem;

        h3{
            font-size: 2rem;
            font-weight: 100;
        }

        p{
            font-size: 1.5rem;
        }
    }

    button.check{
        background-color: #fff;
        border: 1px solid black;
        padding: 1rem 3rem;
        align-self: center;
        cursor: pointer;
    }
}

</style>