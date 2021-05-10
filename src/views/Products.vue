<template>
    <div class="container">
        <div class="filters">
            <div class="filters__sort">
                <h2>Sort by</h2>
                <div class="custom-select">
                    <select name="" id="" @change="changeSort($event)">
                    <option value="1">Date</option>
                    <option value="2">Top Selling</option>
                    <option value="4">Price</option>
                    </select>
                </div>

                
                
            </div>
            <div class="dropdown">
                <h2>Order</h2>               
                <button class="dropbtn">{{ orderBy }}</button>
                    <div class="dropdown-content">
                        <div @click="changeOrder(1)">Low to High</div>
                        <div @click="changeOrder(-1)">High to Low</div>
                    </div>
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
            <Spinner v-if="loading" />
            <li v-else v-for="product in products" :key="product._id" @click="$router.push(`/product/${product._id}`)">
                <small-product :product="product" />
            </li>
             </ul>
        
        <paginate
            v-if="!loading && numPages > 1"
            :pageCount="numPages"
            :clickHandler="changePage"
            :prevText="'Prev'"
            :nextText="'Next'"
            :container-class="'container-class'"
            :page-class="'page-class'"
            :page-link-class="'page-link-class'"
            :active-class="'active-class'">
        </paginate>

    </div>  
</template>

<script>
import SmallProduct from '../components/products/SmallProduct';
import Spinner from '../components/Spinner'

export default {
    data(){
        return{
            sortBy: 'Date',
            orderBy : 'Low to High'
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
        },
        loading(){
            return this.$store.getters.loading
        }
    },
    components: {
        smallProduct: SmallProduct,
        Spinner
    },
    created(){
        this.$store.dispatch('getCategories')
        this.$store.dispatch('getProducts')
        
    },

    methods:{
        selectCategory(id){
            this.$router.push({path:'/products',query:{
                category: id,
                page: 1,
                sort: this.query.sort,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts', this.query);
        },

        changeSort(event){

            if(event.target.value == 1){
                this.event.target.valueBy = 'Date'
            }else if(event.target.value == 2){
                this.sortBy = 'Top Selling'
            }else{
                this.sortBy = 'Price'
            }

            this.$router.replace({path:'/products',query:{
                category: this.query.category,
                page: this.query.page,
                sort: event.target.value,
                order: this.query.order,
                }});
            this.$store.dispatch('getProducts');
        },

        changeOrder(order){
            if(order == 1){
                this.orderBy = 'Low to High'
            }else{
                this.orderBy = 'High to Low'
            }
            this.$router.push({path:'/products',query:{
                category: this.query.category,
                page: this.query.page,
                sort: this.query.sort,
                order: order,
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
            this.$store.dispatch('getProducts');
            window.scrollTo(0,0);
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

}

.filters{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;
    align-self: flex-start;
    border: 1px solid black;

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
                border: 1px solid $primary-color;
                display: flex;
                justify-content: center;
                margin-right: 1rem;
                margin-bottom: 1rem;
                cursor: pointer;
                color: #000;
                transition: all .3s;

                &:hover{
                    background-color: $primary-color;
                    color: #ffff;
                }
            }

            button.active{
                background-color: $primary-color;
                color: #fff;
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

/*********************************************** */

.dropbtn {
  background-color: $primary-color;
  color: white;
  padding: .5rem .9rem;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 18;
}

.dropdown-content div {
  color: $primary-color;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  transition: all .3s;
  z-index: 15;

  &:hover{
      background-color: $primary-color;
      color: #fff;
    }
}



.dropdown:hover .dropdown-content {
    display: none;
    z-index: 18;
    
}

.dropdown:hover .dropbtn {background-color: $primary-color;}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}


</style>