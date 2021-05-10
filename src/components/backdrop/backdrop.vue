<template>
    <div class="backdrop">
        <login v-if="component == 'login'"/>
        <signup v-if="component == 'signup'"/>
    </div>
</template>

<script>
import login from '../user/Login'
import signup from '../user/Register'

export default {
    props: {
        component: {
            type: String,
            required: true
        }
    },
    components: {
        login,
        signup
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
    }
</style>