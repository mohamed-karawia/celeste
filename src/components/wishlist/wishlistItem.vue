<template>
    <div class="cart--item">
        <div class="cart--item__image"></div>
        <div class="cart--item__details">
            <h2 class="cart--item__details__name">Necklace three</h2>
            <p class="cart--item__details__stock">in stock</p>
            <p class="cart--item__details__price">50 EGP</p>
        </div>
        <div class="cart--item__icon">
            <svg >
                <use xlink:href="../../assets/sprite.svg#icon-bin2"></use>
            </svg>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
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
        background-image: url('../../assets/necklace.jpeg');
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
        width: 2rem;
        height: 2rem;
    }

    }

    
}

</style>