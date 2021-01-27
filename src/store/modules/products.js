import axios from 'axios';


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
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}