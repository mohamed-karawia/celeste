<template>
    <div class="register">
        <h1>REGISTER</h1>

        <div class="input--box">
            <label>Name</label>
            <input type="text" v-model="name">
        </div>

        <div class="input--box">
            <label :class="{'invalid': $v.email.$error}">EMAIL</label>
            <input 
            type="email" 
            v-model="email" 
            @input="$v.email.$touch()"
            :class="{'invalid': $v.email.$error}">
        </div>

         <div class="input--box">
            <label>PASSWORD</label>
            <input type="password" v-model="password">
        </div>

        <div class="input--box">
            <label>CONFIRM PASSWORD</label>
            <input type="password" v-model="confirmPassword">
        </div>

         <div class="input--box">
            <label>MOBILE</label>
            <input type="number" v-model="mobile">
        </div>

        <button @click="register">REGISTER</button>

    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

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
            this.$emit('register', payload)
        }
    },

    validations: {

        email: {
            required,
            email
        },
        password: {
            required
        }
    },
}

</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.register{
    display: flex;
    flex-direction: column;
    width: 50%;
    

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
}

</style>