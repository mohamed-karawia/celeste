<template>
    <div class="register">
        <h1>Signup</h1>

        <div class="input--box" :class="{'invalid': $v.name.$error}">
            <label>Name</label>
            <input 
            type="text" 
            id="name"
            v-model="name"
            @blur="$v.name.$touch()"
            :class="{'invalid': $v.name.$error}"
            >
            <p class="error--message" v-if="!$v.name.minLen">Name should be at least 4 charchters</p>
        </div>

        <div class="input--box">
            <label :class="{'invalid': $v.email.$error}">EMAIL</label>
            <input 
            type="email" 
            id="email"
            v-model="email" 
            @blur="$v.email.$touch()"
            :class="{'invalid': $v.email.$error}">
          <p class="error--message" v-if="!$v.email.email">Please provide a valid email address.</p>
        </div>

         <div class="input--box">
            <label>PASSWORD</label>
            <input 
            type="password" 
            v-model="password"
            @blur="$v.password.$touch()">
          <p class="error--message" v-if="!$v.password.minLen">Password should be at least 6 charchters</p>
        </div>

        <div class="input--box">
            <label>CONFIRM PASSWORD</label>
            <input 
            type="password" 
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch()">
            <p class="error--message" v-if="!$v.confirmPassword.sameAs">Password doesn't match.</p>
        </div>

         <div class="input--box">
            <label>MOBILE</label>
            <input 
            type="number" 
            v-model="mobile"
            @blur="$v.mobile.$touch()">
            <p class="error--message" v-if="!$v.mobile.minLen || !$v.mobile.numeric">Mobile number shoould be at least 10 numbers</p>
        </div>

        <p class="error--message" v-if="error">{{error}}</p>
        <button @click="register" v-if="loginButton === 'login'">REGISTER</button>
        <Spinner width="5em" height="5em" v-else />

    </div>
</template>

<script>
import { required, email, numeric, minLength, sameAs } from 'vuelidate/lib/validators'
import Spinner from '../Spinner'

export default {
    data(){
        return{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobile: ''
        }
    },

    methods: {
        register(){
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
                mobile: this.mobile,
                comfirmPassword: this.confirmPassword 
            }
            this.$store.dispatch('registerUser', payload)
            this.name = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.mobile = '';
        }
    },

    components:{
        Spinner
    },

    validations: {
        name:{
            required,
            minLen: minLength(4)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLen: minLength(6)
        },
        confirmPassword:{
            sameAs: sameAs(vm => {
            return vm.password
        })
        },
        mobile: {
            required,
            numeric,
            minLen: minLength(10)
        }
    },
    computed:{
      loginButton(){
        return this.$store.getters.loginButton
      },
      error(){
        return this.$store.getters.errorMessage
      }
    }
}

</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.register{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #ffff;
    padding: 1rem;
    /*position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);*/
    align-items: center;
    overflow-y: scroll;

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
            height: 4rem
        }

        label.invalid{
            color: red;
        }

        input.invalid{
            border: 1px solid red
        }
    }

    button{
        @include loginButton;
    }

    .error--message{
        color: red;
        text-transform: capitalize;
        font-size: 1.5rem;
      }
}

</style>