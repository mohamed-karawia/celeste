<template>
    <div class="container">
        <wishlist-item />
    </div>
</template>

<script>
import WishlistItem from '../components/wishlist/wishlistItem';


export default {
    components: {
        wishlistItem : WishlistItem
    },
    created(){
        this.$store.dispatch('getWishlist')
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: 500px){
        flex-direction: column;
    }
}



</style>