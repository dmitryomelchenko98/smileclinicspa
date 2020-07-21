<template>
    <div class="index">
        <div class="index_container">
            <div class="container_headline">
                <h1>Пройдите консультацию у мастеров своего дела!</h1>
            </div>
            <div class="container_card" >
                <h2>РЕКОМЕНДУЕМЫЕ СПЕЦИАЛИСТЫ</h2>
                <CardDoctor v-for="doctor in doctors" :key="doctor.id" :doc="doctor"/>
            </div>
            <div class="show-more">
                <router-link tag="a" :to="'/AllSpec'">
                    <span>Показать больше</span>
                    <img src="../assets/image/expand.svg" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CardDoctor from '../components/CardDoctor.vue'

export default {
    name: 'RecomendSpec',
    components: {CardDoctor},
    computed: {
        doctors() {
            return this.$store.getters.allDoctors.filter(doctors => doctors.position == 'ST').slice(0,4)
        }
    },
    async mounted() {
        await this.$store.dispatch('axiosDoctors');
        await this.$store.dispatch('axiosUser');
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.index {
    //@include grid-def();
    grid-column: 1/2;
    grid-row: 2/3;
    height: 100%;
    .index_container {
        height: 100%;
        background: url(../assets/image/fon.png);
        background-size: cover;
        //padding-top: 100px;
        //padding-bottom: 50px;
        box-shadow: 0 0px 25px 5px rgb(156, 154, 154);
        .container_headline {
            h1 {
                margin: 0;
                @include headline();
                padding-top: 20px;
                color: white;
                text-align: center;
            }
        }
        .container_card {
            @include container-card();
            h2 {
                grid-column: 1/3;
                color: white;
                text-align: center;
                margin-top: 0;
                @media (max-width: 1000px) {
                    grid-column: 1/2;
                }
                @media (max-width: 520px) {
                   font-size: 18px;
                   margin-top: 20px;
                }
            }
            
        }
        .show-more {
            @include flex();
            margin: 20px 0;
            margin-bottom: 40px;
            cursor: pointer;
            span {
                color: white;
                font-size: 18px;
                margin-right: 10px;
            }
        }
    }
    
}
</style>