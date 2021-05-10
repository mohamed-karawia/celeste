<template>
    <div class="quantity">
        <button class="quantity__button" @click="$emit('decreaseQuantity')">&#8722;</button>
        <input type="number" :value="quantity">
        <button class="quantity__button" @click="$emit('increaseQuantity')">&#43;</button>
    </div>
</template>

<script>
export default {
    props: {
        quantity: Number
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.quantity{
    display: flex;

    &__button{
        width: 2rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        border: none;
        border-radius: 3px;
        cursor: pointer;

        @media only screen and (max-width: 500px){
        margin-bottom: 2rem;
        width: 3rem;
        }
    }

    input{
        width: 3rem;
        border-radius: 0;     
        border: none;      
        font-size: 2rem;
        padding-left: 8px;
        @media only screen and (max-width: 500px){
            padding-left: 15px;
            padding-bottom: 15px;;
            width: 4rem;
        }
                
    }

    /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

            /* Firefox */
            input[type=number] {
            -moz-appearance: textfield;
            }

}

</style>