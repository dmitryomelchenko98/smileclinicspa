<template>
    <header>
        <div class="header-content">
            <div class="header-content_logo">
                <router-link tag="a" :to="'/RecomendSpec'"><img src="../assets/image/logo.svg" alt=""></router-link>
            </div>
            <nav>
                <router-link tag="a" :to="'/AllSpec'">Все специалисты</router-link>
                <router-link v-if="user.position !== 'GT'" tag="a" :to="'/MyNotes'">Мои записи</router-link>
                <router-link tag="a" :to="'/AboutCompany'">О компании</router-link>
                <router-link tag="a" :to="'/Contacts'">Контакты</router-link>
            </nav>
            <div class="nav" @click="menu = !menu">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </div>
            <div class="nav-hover" :class = "{'nav-active': menu }" @click="menu = !menu"> 
                <router-link tag="a" :to="'/AllSpec'">Все специалисты</router-link>
                <router-link v-if="user.position !== 'GT'" tag="a" :to="'/MyNotes'">Мои записи</router-link>
                <router-link tag="a" :to="'/AboutCompany'">О компании</router-link>
                <router-link tag="a" :to="'/Contacts'">Контакты</router-link>
            </div>
            <div class="header-content_user">
                <span> {{user.last_name}} {{user.first_name.substring(0,1).toUpperCase() + '.'}} {{user.patronymic.substring(0,1).toUpperCase() + '.'}} </span>
                <div class="foto">
                    <img src="../assets/image/fotodef.svg" alt="">
                </div>
            </div>
        </div>
        <div class="filter" v-show="menu" @click="menu = !menu"></div>
    </header>
</template>

<script>
export default {

    name: 'Header',
    data() {
        return{
            menu: false
        }
    },
    computed: {
        user() {
            return this.$store.getters.User
        }
        
    },
    async mounted() {
        await this.$store.dispatch('axiosUser')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

header {
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: white;
    height: 75px;
    box-shadow: 0 3px 6px 2px rgb(156, 154, 154);
    position: fixed;
    //box-shadow: 0 5px 4px -4px black;
    @media (max-width: 1920px) {
        width: 100%;  
    }
    .filter {
        @include filter();
    }
    .header-content {
        height: 100%;
        display: grid;
        grid-template-columns: minmax(240px, 600px) minmax(420px, 800px) minmax(200px, 520px);
        .header-content_logo {
            @include flex();
        }
        nav {
            @include flex();
            justify-content: space-around !important;
            a {
                text-decoration: none;
                color: #000;
            }
        }
        .header-content_user {
            @include flex();
            span {
                margin-right: 20px;
            }
            .foto {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                cursor: pointer;
                img {
                    width: auto;
                    height: 100%;
                }
            }
            
            grid-column: 3/4;
            grid-row: 1/2;
        }
        .nav, .nav-hover {
            display: none;
        }
        @media (max-width: 870px) {
            grid-template-columns: 70px 1fr minmax(200px, 1fr);
            .header-content_logo {
                grid-column: 2/3;
                grid-row: 1/2;
                justify-content: flex-start;
                margin-left: 10px;
            }
            nav {
                grid-column: 1/2;
                grid-row: 1/2;
                display: none;
            }
            .nav {
                display: block;
                @include flex();
                flex-direction: column;
                .menu {
                    width: 34px;
                    height: 5px;
                    margin: 2px;
                    background-color: black;
                }
            }
            .nav-hover {
                position: absolute;
                height: 100vh;
                background-color: white;
                width: 200px;
                z-index: 100;
                @include flex();
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                transition: 0.5s;
                transform: translateX(-100%);
                a {
                    text-decoration: none;
                    margin: 10px 15px;
                    color: #000;
                }
                a:first-child {
                    margin-top: 40px;
                }
            }
            .nav-active {
                transform: translateX(0%);
            }
            
            .header-content_user {
                grid-column: 3/4;
                grid-row: 1/2;
                @include flex();
                justify-content: flex-end;
                margin-right: 20px;
            }

        }
        @media (max-width: 520px) {
            grid-template-columns: 70px 1fr;
            .header-content_user {
                display: none;
            }
            .header-content_logo {
                justify-content: center;
                margin-left: 0px;
            }
        }
    }
}
</style>