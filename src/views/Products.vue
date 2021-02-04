<template>
    <div class="container">
        <h1>Shop</h1>
        <div class="filters">
            <div class="filters__sort">
                <h2>Sort by</h2>
                <select name="" id="" @change="changeSort($event)">
                <option value="1">Date</option>
                <option value="2">Top Selling</option>
                <option value="4">price</option>
                </select>
            </div>
            <div class="filters__sort">
                <h2>Order</h2>               
                <select name="" id="" @change="changeOrder($event)">
                <option value="1">low To High</option>
                <option value="-1">High to Low</option>
                </select>
            </div>
            <div class="filters__category">
                <h2>Categories</h2>
                <ul>
                    <li 
                    v-for="category in categories" 
                    :key="category._id">
                    <button 
                    :class="{'active': query.category == category._id}"
                    @click="selectCategory(category._id)"
                    >{{ category.name }}
                    </button>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="products--list">
            <li v-for="product in products" :key="product._id" @click="$router.push(`/product/${product._id}`)">
                <small-product :product="product" />
            </li>
        </ul>

        <paginate
            v-if="products.length > 0"
            :pageCount="numPages"
            :clickHandler="changePage"
            :prevText="'Prev'"
            :nextText="'Next'"
            :container-class="'pages'"
            :page-class="'pages-item'"
            :page-link-class="'pages-link'">
        </paginate>

    </div>  
</template>

<script>
import SmallProduct from '../components/products/SmallProduct'

export default {
    data(){
        return{

        }
    },
    computed: {
        query(){
            return {
                category: this.$route.query.category,
                page : this.$route.query.page,
                sort : this.$route.query.sort,
                order : this.$route.query.order,
            }
        },
         categories(){
             return this.$store.getters.categories
         },
         products(){
            return this.$store.getters.products
        },

        numPages(){
            return this.$store.getters.pages
        }
    },
    components: {
        smallProduct: SmallProduct
    },
    created(){
        this.$store.dispatch('getCategories')
        this.$store.dispatch('getProducts', this.query)
    },

    methods:{
        selectCategory(id){
            this.$router.push({path:'/products',query:{
                category: id,
                page: this.query.page,
                sort: this.query.sort,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        },

        changeSort($event){
            this.$router.push({path:'/products',query:{
                category: this.query.category,
                page: this.query.page,
                sort: $event.target.value,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        },

        changeOrder($event){
            this.$router.push({path:'/products',query:{
                category: this.query.category,
                page: this.query.page,
                sort: this.query.sort,
                order: $event.target.value,
                }});
            this.$store.dispatch('getProducts', this.query);
        },

        changePage(num){
            this.$router.push({path:'/products',query:{
                category: this.query.category,
                page: num,
                sort: this.query.sort,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
@include container;

@media only screen and (max-width: 500px){
        align-items: center;
    }

    h1{
        @include h1;
    }
}

.filters{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;

    @media only screen and (max-width: 500px){
        flex-direction: column;
        justify-content: start;
    }

    &__sort{
        margin-bottom: 1rem;

        
    }

    &__category{
        display: flex;
        flex-direction: column;
        
        flex-wrap: wrap;

        ul{
            display: flex;
            list-style: none;
            flex-wrap: wrap;

            button{
                @include button;
                padding: .5rem .9rem;
                background-color: #fff;
                text-transform: capitalize;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                margin-right: 1rem;
                margin-bottom: 1rem;
            }

            button.active{
                background-color: #000;
                color: #fff
            }
        }
    }

    h2{
        @include h2;
        margin-bottom: 5px;
        letter-spacing: 0;
    }
}

.products--list{
    list-style: none;
    display: grid; // activate grid
    grid-template-columns: repeat(auto-fill, 22rem); 
    grid-column-gap: 70px; //gap between the rows
    grid-row-gap: 20px;

    @media only screen and (max-width: 500px){
    grid-template-columns: repeat(2, 12rem);
    }
}

.pages{

    display: flex;
    justify-content: center;
    color: black;
    margin-top: 4rem;
    font-size: 1.4rem;
    width: 10rem;

    a.pages-link{
        border: 1px solid black;
    }
   
}

</style>