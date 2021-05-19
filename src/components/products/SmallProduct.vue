<template>
    <div class="product">
        <div class="product--image" 
        :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[0] + ')' }"></div>
        <div class="product--details">
            <h2>{{ product.name }}</h2>
            <h3>{{ product.price }} L.E</h3>
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
@import '../../sass/global.scss';

.product{
    display: flex;
    flex-direction: column;
    height: 23rem;
    //justify-content: space-between;
    cursor: pointer;
    padding: .2rem;
    border-radius: 10px;
    position: relative;
    transition: all .2s;
    
    &::after{
        opacity: 0;
    }

    &:hover{

    .product--image{
        background-size: 110%;
    }

    .product--details{
        background-color: #fff;
    }
       
    &::after {
    opacity: 1;
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    z-index: -2;
    width: 108%;
    height: 108%;
    background: linear-gradient(
      60deg,
      #f8cdcd,
      #f8d6d6,
      white
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 5%;
    transition: opacity .5s;
    animation: moveGradient 2s alternate infinite;
  }
    }



    @media only screen and (max-width: 500px){
    height: 20rem;
    }

    &--image{
        width: 100%;
        height: 20rem;
        background-size: cover;
        background-position: center;
        border-radius: 10px 10px 0 0;
        transition: all .6s;

        @media only screen and (max-width: 500px){
            height: 17rem;
    }
    }

    &--details{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: -20px;
        z-index: -1;
        padding-top: 25px;
        border-radius: 0 0 10px 10px;

        h2{
            font-size: 1.6rem;
            font-weight: 500;
            text-transform: capitalize;

            @media only screen and (max-width: 500px){
            font-size: 1.5rem;
            }
        }

        h3{
            font-size: 1.6rem;
            font-weight: 500;

            @media only screen and (max-width: 500px){
            font-size: 1.2rem;
            }
        }
    }
    
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}


</style>