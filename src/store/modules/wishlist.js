import axios from 'axios';
import router from '../../router/index'

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
    addToWishlist(state, product){
        if(this.getters.isAuthenticated){
            axios.post('/user/auth/shop/addToWishList', {
                productId : product
            }, {
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

    removeFromWishlist(state, product){
        axios.delete('/user/auth/shop/WishList', {
            productId : product
        }, {
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
    },
    
    getWishlist(){
        axios.get('/user/auth/shop/WishList', {
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
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}