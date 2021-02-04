import axios from 'axios';

import router from '../../router/index';


const state = {
    products: [],
    totalProducts: 0,
    singleProduct: {},
    relatedProducts: []
};

const getters = {
    products(state){
        return state.products
    },

    pages(state){
        return Math.ceil(state.totalProducts/10)
    },

    product(state){
        return state.singleProduct
    },

    productLengths(state){
        return state.product.size
    },
    
    relatedProducts(state){
        return state.relatedProducts
    }
};

const mutations = {
    pushProducts(state, data){
        state.products = data.products
        state.totalProducts = data.totalProducts
    },

    pushProduct(state, data){
        state.singleProduct = data.product
        state.relatedProducts = data.relatedProducts.products
    }
};

const actions = {

    getProducts({commit}, query){
        axios.get(`/user/products?catigory=${query.category}&page=${query.page}&sort=${query.sort}&order=${query.order}`)
        .then(res => {
            console.log(res)
            commit('pushProducts', res.data.data)
        })
        .catch(err => console.log(err.response))
    },

    getProductDetails({commit}, id){
        axios.get(`/user/product/${id}`)
        .then(res => {
            console.log(res)
            commit('pushProduct', res.data.data)
        })
        .catch(err => console.log(err.response))
    },

    searchProducts({commit}){
        const searchQuery = router.currentRoute.query.searchQ;
        const page = router.currentRoute.query.page;
        const category = router.currentRoute.query.category;
        axios.get(`/user/products/search?searchQ=${searchQuery}&page=${page}&category=${category}`)
        .then(res => {
            console.log(res);
            commit('pushProducts', res.data.data)
        })
        .catch(err => console.log(err))
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}