import axios from 'axios';
import router from '../../router/index';

const state = {
    cart : [],
    cartSubtotal : 0
};

const getters = {
    cart(state){
        return state.cart
    },
    cartTotal(state){
        return state.cartSubtotal
    }
};

const mutations = {
    pushToCart(state, cartInfo){
        state.cart = cartInfo.user.cart;
        state.cartSubtotal = cartInfo.totalCart

    },
    deleteFromCart(state, id){
        var index = state.cart.map(item => {
            return item._id
        }).indexOf(id)
        state.cart.splice(index, 1)
     }
};

const actions = {

    addToCart(state, payload){
        if(this.getters.isAuthenticated){
            axios.post('/user/auth/shop/addToCart', payload, {
                headers: {
                    'Authorization' : `auth ${this.state.idToken}`
                }
            })
            .then( res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.response)
            })
        }else{
            router.push('/login')
        }
    },

    getCart({commit}){
        axios.get('/user/auth/shop/cart', {
            headers: {
                'Authorization' : `auth ${this.state.idToken}`
            }
        })
        .then( res => {
            console.log(res)
            commit('pushToCart', res.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    },

    deleteFromCart({commit}, id){
        axios.delete('/user/auth/shop/cart', 
        {
            headers: {
                'Authorization' : `auth ${this.state.idToken}`
            }
        ,
            data: {
                itemId : id
            }
        })
        .then(res => {
            console.log(res)
            commit('deleteFromCart', id)
        })
        .catch(err => console.log(err.response))
    }
    
};

export default{
    state,
    getters,
    mutations,
    actions
}