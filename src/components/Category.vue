<template>
    <div class="category" @click="$router.push(`/products?category=${id}&page=1&sort=1&order=1`)">
        <div class="category__image" :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ image + ')' }"></div>

        <h2 class="category__name">
            {{ name }}
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        name: String,
        image: String
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.category{
    
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 27rem;
    //width:  25rem;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 1rem;

    @media only screen and (max-width: 500px){
        //width: 40vw;
        height: 20rem;
    }

    &:hover{
    border: 1px solid $primary-color;

    }

    &__image{
        height: 100%;
        border-radius: 10px;
        background-position: center;
        background-size: cover;
    }

    &__name{
        @include h2;
        text-transform: uppercase;
        margin-top: .5rem;
        align-self: center;

        @media only screen and (max-width: 500px){
        font-weight: 500;
    }
    }
}

</style>