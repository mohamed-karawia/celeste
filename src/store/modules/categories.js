import axios from 'axios';

const state = {
    categories: []
};

const getters = {
    categories(state){
        return state.categories
    }
};

const mutations = {
    pushCategories(state, categories){
        state.categories = categories
    }
};

const actions = {
    getCategories({commit}){
        axios.get('/user/category')
        .then(res =>{
            console.log(res)
            commit('pushCategories', res.data.data)
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