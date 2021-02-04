<template>
    <div class="search">
        <div class="search__header">
            <h1>Search</h1>
            <span @click="$emit('hideSearch')">&#10008;</span>
       </div>
        <div class="search--tags">
            <h2 class="search--tags__header">
                SEARCH TAGS
            </h2>
            <ul class="search--tags__list">
                <li 
                v-for="tag in tags" 
                :key="tag._id"
                @click="category = tag._id"
                class="search--tags__item">
                <button :class="{'active': category == tag._id}">
                    {{ tag.name }}
                </button></li>
            </ul>
        </div>
        <form @submit.prevent class="input--form">
            <input type="text" placeholder="SEARCH HERE" v-model="searchQuery">
            <button class="input--form__submit" @click="searchProducts">SEARCH</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        tags: Array
    },

    data(){
        return{
            category: this.tags[0]._id,
            searchQuery: ''
        }
    },

    methods: {
        searchProducts(){
            this.$router.push(`/products/?searchQ=${this.searchQuery}&page=${1}&category=${this.category}`)
            this.$store.dispatch('searchProducts')
            this.$emit('hideSearch');
        }
        
        
    }
}
</script>

<style lang="scss" scoped>
.search{
    position: absolute;
    left: 0;
    width: 100vw;
    height: 93vh;
    background-color: #3D3D3D;
    display: flex;
    padding: 4rem;
    flex-direction: column;
    opacity: .97;

    &__header{
        width: 100%;
        display: flex;
        justify-content: center;
        color: white;
        font-size: 2rem;
        font-weight: 100;
        text-transform: uppercase;
        letter-spacing: 4px;
    }

    span{
        color: white;
        position: absolute;
        left: 90%;
        cursor: pointer;
    }

    &--tags{

        &__header{
            color: rgb(189, 189, 189);
            margin: 2rem 0;
            font-weight: 100;
        }

        &__list{
            list-style: none;
            display: flex;
            flex-wrap: wrap;

            @media only screen and (max-width: 500px){
                margin-bottom: 1rem;
            }
        }

        button{
            background-color:  #3D3D3D;
            border: 1px solid #fff;
            color: #fff;
            padding: 1rem 2rem;
            text-transform: capitalize;
            margin-right: 1rem;
            cursor: pointer;

            @media only screen and (max-width: 500px){
                margin-bottom: 1rem;
            }
        }
    }

    .input--form{
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        width: 100%;
        align-items: center;

        input{
            background-color: #3D3D3D;
            border: 1px solid #fff;
            width: 50%;
            height: 4rem;
            padding: 0 1rem;

            @media only screen and (max-width: 500px){
                width: 70vw;
            }
            
        }
        ::placeholder{
            color: #fff;
            letter-spacing: 2px;
        }

        input, select, textarea{
            color: #fff;
        }

        button{
            background-color: #3D3D3D;
            border: 1px solid #fff;
            margin-top: 3rem;
            color: #fff;
            width: 10rem;
            padding: 1rem 3rem;
            display: flex;
            justify-content: center;
            border-radius: 10px;
        }
    }

    .active{
        background-color: #fff;
        color: #000;
    }
}

</style>