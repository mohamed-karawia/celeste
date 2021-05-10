import axios from 'axios';

import router from '../../router/index';


const state = {
    products: [],
    totalProducts: 0,
    singleProduct: {},
    relatedProducts: [],
    loading: false
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
    },
    
    loading(state){
        return state.loading
    }
};

const mutations = {
    pushProducts(state, data){
        state.products = data.products
        state.totalProducts = data.total
    },

    pushProduct(state, data){
        state.singleProduct = data.product
        state.relatedProducts = data.relatedProducts.products
    }
};

const actions = {

    getProducts({commit}){
        const page = router.currentRoute.query.page;
        const category = router.currentRoute.query.category;
        const sort = router.currentRoute.query.sort;
        const order = router.currentRoute.query.order;
        
        state.loading = true;
        axios.get(`/user/products?catigory=${category}&page=${page}&sort=${sort}&order=${order}`)
        .then(res => {
            console.log(res)
            commit('pushProducts', res.data.data)
            state.loading = false;
        })
        .catch(err => 
            console.log(err.response)
            )
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