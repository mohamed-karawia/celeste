<template>
    <div class="container">
        <login v-on:loginFacebook="loginFacebook" />
        <register v-on:register="register" />
    </div>
</template>

<script>
import Register from '../components/user/Register'
import Login from '../components/user/Login'


export default {
    components:{
        register : Register,
        login: Login
    },
    methods: {
        register(payload){
            this.$store.dispatch('registerUser', payload)
        },

        loginFacebook(payload){
            console.log(payload)
            this.$store.dispatch('facebookAuth', payload)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/global.scss';

.container{
    @include container;
    padding: 4rem 0;
    height: 80vh;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}


</style>