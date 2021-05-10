<template>
    <div class="login">

        <h1>Login</h1>

        <div class="input--box">
            <label>EMAIL</label>
            <input type="email" v-model="email" placeholder="example@example.com">
        </div>

         <div class="input--box">
            <label>PASSWORD</label>
            <input type="password" v-model="password">
        </div>

        <button class="loginButton" @click="loginLocal">LOGIN</button>

        <div class="login--buttons">
            <!--<button @click="checkLoginState">Login with facebook</button>  -->
            <v-facebook-login 
            v-model="model" 
            app-id="978916109178865" 
            @sdk-init="handleSdkInit"
            @login="tryLogin"
            >
             <p class="child-content" slot="login">Login with facebook</p>
            </v-facebook-login>
        </div>
        
    </div>
</template>

<script>
//import facebookLogin from 'facebook-login-vuejs'
import VFacebookLogin from 'vue-facebook-login-component';
export default {
    data() {
      return {
        email: '',
        password: '',
        FB: {},
        model: {},
        scope: {},
        accessToken: ''
      }
    },

    components:{
        VFacebookLogin,

    },

    methods: {
      handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
      },

      tryLogin(){
        this.FB.getLoginStatus(res => {
        if (res.status === 'connected') {
        const accessToken = res.authResponse.accessToken;
        const payload = {
          access_token: accessToken
        }
        this.$emit('loginFacebook', payload)
        } 
        });
      },

      loginLocal(){
        const payload = {
          email : this.email,
          password : this.password
        };
        this.$store.dispatch('loginLocal', payload)
      }

    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.login{
    background-color: #ffff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-bottom: 2rem;
    padding: 2rem;
    @media only screen and (max-width: 500px){
        width: 100%;
        align-items: center;
    }

    h1{
        font-size: 2.5rem;
        font-weight: 100;
        letter-spacing: 2px;
    }

    .input--box{
        @include loginInput;
        
        label{
            font-size: 1.5rem;
            letter-spacing: 2px;
            margin-bottom: 2px;
        }

        input{
            border: 1px solid black;
            height: 4rem;
            padding-left: .6rem;
        }
    }

    .loginButton{

        @include loginButton;

        @media only screen and (max-width: 500px){
        margin-left: 1.2rem;
    }
    }
}


</style>