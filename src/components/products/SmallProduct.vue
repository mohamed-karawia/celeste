<template>
    <div class="product">
        <div class="product--image" 
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[0] + ')' }"></div>
        <div class="product--details">
            <h2>{{ product.name }}</h2>
            <h3>{{ product.price }}L.E</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>

.product{
    display: flex;
    flex-direction: column;
    height: 23rem;
    justify-content: space-between;
    cursor: pointer;

    @media only screen and (max-width: 500px){
    height: 20rem;
    }

    &--image{
        width: 100%;
        height: 20rem;
        background-size: cover;
        background-position: center;
        border-radius: 20px;

        @media only screen and (max-width: 500px){
            height: 17rem;
    }
    }

    &--details{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-size: 2rem;
            font-weight: 500;
            text-transform: capitalize;

            @media only screen and (max-width: 500px){
            font-size: 1.5rem;
            }
        }

        h3{
            font-size: 1.7rem;
            font-weight: 500;

            @media only screen and (max-width: 500px){
            font-size: 1.2rem;
            }
        }
    }
}


</style>