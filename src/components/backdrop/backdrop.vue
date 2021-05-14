<template>
<div>
    <div class="backdrop" @click="toggleBackdrop"></div>
        <div class="backdrop__container">

            <div class="backdrop__nav">
                <ul>

                    <li 
                    @click="toggleLogin('login')"
                    :style="[component == 'login' ? {'border-bottom': '1px solid black'} : {'border-bottom': 'none'}]"
                    >
                    Login</li>

                    <li 
                    @click="toggleLogin('signup')"
                    :style="[component == 'signup' ? {'border-bottom': '1px solid black'} : {'border-bottom': 'none'}]"
                    >
                    Signup</li>

                </ul>
            </div>
            <login  @hide-backdrop="toggleBackdrop" v-if="component == 'login'"/>
            <signup @hide-backdrop="toggleBackdrop" v-else/>
    </div>
</div>
    
</template>

<script>
import login from '../user/Login'
import signup from '../user/Register'

export default {
    data(){
        return{
            showBackdrop: true,
            stateComponent: 'login'
        }
    },
    props: {
        component: {
            type: String,
            required: true
        }
    },
    components: {
        login,
        signup
    },
    methods: {
        toggleBackdrop(){
            this.$emit('hide-backdrop');
        },
        toggleLogin(component){
            this.$emit('toggle-component', component)
        }
    }
}
</script>

<style lang="scss" scoped>

    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);   

        span{
        color: #fff;
        position: absolute;
        left: 90%;
        top: 10%;
        cursor: pointer;
        font-size: 3rem;
        }

        &__container{
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);             
            width: 90vw;
            max-width: 45rem;
            z-index: 200;

        }

        &__nav{
            background-color: #fff;
            height: 5rem;
            

            ul{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 100%;
            }

            li{
                font-size: 1.5rem;
                cursor: pointer;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                transition: all .3s;

                &:hover{
                    border-bottom: none !important;
                }

                &::before{
                    content: "";
                    position: absolute;
                    top: 98%;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 1px;
                    width: 0px;
                    background-color: black;
                    transition: all .3s;
                }

               

                &:hover::before{
                    width: 100%;
                }
            }
        }
    }
</style>