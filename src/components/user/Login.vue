<template>
    <div class="login">
        <h1>Login</h1>

        <div class="input--box">
            <label>EMAIL</label>
            <input type="email">
        </div>

         <div class="input--box">
            <label>PASSWORD</label>
            <input type="password">
        </div>

        <button>LOGIN</button>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.login{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 2rem;
    padding: 2rem;

    @media only screen and (max-width: 500px){
        width: 100%;
        align-items: center;
    border: 1px solid black;

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
    }

    button{
        @include loginButton;
    }
}

</style>