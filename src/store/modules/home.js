import axios from 'axios';


const state = {
    home: {
        newArrival: {},
        categories: [],
        hotItem: {},
        offers: {}
    }
};

const getters = {
    
    home(state){
        return state.home
    }
};

const mutations = {
    getHomeData(state, data){
        state.home.newArrival = data.NewArrival;
        state.home.categories = data.categories;
        state.home.hotItem = data.hotItem;
        state.home.offers = data.offers;
        //console.log(state.home)       
    }
};

const actions = {
    
    getHomeDetails({commit}){
        axios.get('/user/landing')
        .then(res => {
            console.log(res.data.data)
            commit('getHomeData', res.data.data)
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