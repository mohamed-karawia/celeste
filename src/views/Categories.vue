<template>
    <div class="container">
        <div class="categories">
            <Category 
            v-for="category in categories" 
            :key="category._id" 
            :id="category._id"
            :image="category.image"
            :name="category.name"/>
        </div>
        
    </div>
</template>

<script>
import Category from '../components/Category';

export default {
    computed: {
        categories(){
            return this.$store.getters.categories
        }
    },
    components: {
        Category
    },
    created(){
        this.$store.dispatch('getCategories')
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container {
    @include container;
}


.categories{
    width: 100%;
    display: grid; // activate grid
    grid-template-columns: repeat(auto-fill, 25rem); //make 4 cols with size 1fr
    grid-column-gap: 70px; //gap between the rows

    @media only screen and (max-width: 620px){
        grid-template-columns: repeat(auto-fill, 40vw); //make 4 cols with size 1fr
        grid-column-gap: 35px; //gap between the rows
    }
}

</style>