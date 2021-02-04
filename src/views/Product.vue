<template>
    <div class="container">
        <div class="product">
            <div class="product__media">
                <div class="product__details__header--mobile">
                    <div class="stock">{{product.stock}} In Stock</div>
                    <div class="name--price">
                        <div class="name">{{product.name}}</div>
                        <div class="price">{{product.price}} EGP</div>
                    </div>
                </div>

                <div class="product__media__main--image" :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[mainImage] + ')' }"></div>
                <ul class="product__media__image--list">
                    <li 
                    v-for="(img, index) in product.images" 
                    :key="index">
                    <div class="list--image" 
                    :style="{ 'background-image': 'url(https://celeste-api.herokuapp.com/'+ product.images[index] + ')' }"
                    @click="mainImage = index"></div>
                    </li>
                </ul>
            </div>
            <div class="product__details">

                <div class="product__details__header" id="screen">
                    <div class="stock">{{product.stock}} In Stock</div>
                    <div class="name--price">
                        <div class="name">{{product.name}}</div>
                        <div class="price">{{product.price}} EGP</div>
                    </div>
                </div>

                <div class="product__details__size">
                    <div class="length--header">Select Length</div>
                    <ul class="lenght--list">
                        <li 
                        v-for="(length, index) in product.size" 
                        :key="index" 
                        class="lenght--list__item"
                        :class="{'active' : productLength == index}"
                        @click="changeLength(index)"
                        >{{ length }} CM</li>
                    </ul>
                </div>

                <div class="product__details__description">
                    <h2>details</h2>
                    <p>{{product.desc}}</p>
                </div>

                <div class="product__details__cart">
                    <Quantity 
                    :quantity="quantity" 
                    v-on:increaseQuantity="quantity++"
                    v-on:decreaseQuantity="quantity--"  
                    />
                    <button class="add-to-cart">Add to Cart</button>
                </div>


            </div>
        </div>

        <div class="related--products">
            <h1>Related Products</h1>
            <ul class="related--products__list">
                <li><product :product="relatedProducts[3]" /></li>
                <li><product :product="relatedProducts[3]" /></li>
                <li><product :product="relatedProducts[3]" /></li>
                <li><product :product="relatedProducts[3]" /></li>


            </ul>
        </div>
    </div>
</template>


<script>
import Product from '../components/products/SmallProduct';
import Quantity from '../components/Quantity'

export default {
    data(){
        return{
            mainImage: 0,
            quantity: 1,
            productLength : 0
        }
    },

    components:{
        product : Product,
        Quantity
    },

    created(){
        this.$store.dispatch('getProductDetails', this.id)
    },
    computed:{
        id(){
            return this.$route.params.id
        },
        product(){
            return this.$store.getters.product
        },
        relatedProducts(){
            return this.$store.getters.relatedProducts
        },
    },
    methods: {
        changeLength(index){
            this.productLength = index;
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 500px){
        align-items: center;
    }
}

.product{
    width: 100%;
    
    //border: 1px solid black;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 500px){
        align-items: center;
        justify-content: center;
    }
    
    

    &__media{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60rem;
        width: 30rem;
        margin-right: 3rem;

        @media only screen and (max-width: 500px){
                margin: 1rem 0;
            }

        &__main--image{
        
        height: 65%;
        width: 100%;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        }

        &__image--list{
            margin-top: .75rem;
            display: flex;
            list-style: none;
            justify-content: space-evenly;
            width: 100%;
            
            height: 10rem;
            

            .list--image{
                width: 7.5rem;
                height: 9.8rem;
                background-position: center;
                background-size: cover;
                cursor: pointer;
                border-radius: 10px;

            }
        }
    }

    &__details{
        display: flex;
        flex-direction: column;
        height: 100%;

        &__header{
            border-bottom: 1px solid black;
            min-width: 40rem;
            height: 6rem;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 500px){
                display: none;
            }

            .stock{
                font-size: 1.3rem;
                color: rgb(92, 90, 90);
            }

            .name--price{
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;

                .name{
                    font-size: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;

                }

                .price{
                    //background-color: black;
                    color: #000;
                    display: flex;
                    align-items: center;
                    padding: .3rem .2rem;
                    padding-bottom: .6rem;
                    font-size: 2rem;
                    margin-top: -.5rem;
                    clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
                }
            }
        }

        &__header--mobile{
            border-bottom: 1px solid black;
            min-width: 35rem;
            margin-bottom: 1rem;
            height: 6rem;
            display: flex;
            flex-direction: column;

            @media only screen and (min-width: 500px){
                display: none;
            }
            

            .stock{
                font-size: 1.3rem;
                color: rgb(92, 90, 90);
            }

            .name--price{
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;

                .name{
                    font-size: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;

                }

                .price{
                    /*background-color: black;
                    color: white;
                    display: flex;
                    align-items: center;
                    padding: .3rem .2rem;
                    padding-bottom: .6rem;
                    margin-top: -.5rem;
                    clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);*/
                    font-size: 2rem;

                }
            }
        }

        

        &__size{
            margin-top: 3rem;
            //border-bottom: 1px solid rgb(187, 187, 187);
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: rgb(88, 88, 88);

            @media only screen and (max-width: 500px){
               margin-top: 0;
               
            }

            .length--header{
                font-size: 1.6rem;
            }

            .lenght--list{
                display: flex;
                list-style: none;
                
                &__item{
                    border: 1px solid rgb(126, 126, 126);
                    cursor: pointer;
                    border-radius: 10px;
                    padding: .5rem .5rem;
                    font-size: 1.5rem;
                    margin-right: .5rem;
                }

                &__item.active{
                    border-color: black;
                    color: black;
                }
            }
        }

        

        &__description{
            margin-top: 3rem;
            color: rgb(46, 46, 46);
            

            h2{
                text-transform: capitalize;
                font-weight: 100;
                font-size: 1.6rem;
            }
            p{
                font-size: 1.4rem;
                margin-top: .5rem;
                text-transform: capitalize;
            }
        }

        &__cart{
            
            width: 60%;
            margin-top: 3rem;
            display: flex;
            justify-content: space-between;
            

            

            @media only screen and (max-width: 500px){
               width: 100%;
               flex-direction: column;
               align-items: center;
            }

            

            

            .add-to-cart{
                border: 1px solid black;
                background-color: rgb(241, 241, 241);
                width: 15rem;
                font-size: 1.5rem;
                padding : 1rem .7rem;
                color: black;
                border-radius: 1rem;
            }
        }
    }
}

.related--products{
    margin-top: 1rem;

    h1{
        font-size: 1.8rem;
        font-weight: 100;
        margin-bottom: 1rem;
    }

    &__list{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, 22rem);
        grid-column-gap: 70px;
        grid-row-gap: 15px;

        @media only screen and (max-width: 500px){
            grid-template-columns: repeat(2, 15rem);
        }
    }


}


</style>