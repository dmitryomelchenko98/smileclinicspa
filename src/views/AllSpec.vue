<template>
    <div class="allspec">
        <div class="allspec_container">
            <div class="container_headline">
                <h1>Все специалисты</h1>
            </div>
            <div class="container_card">
                <CardDoctor v-for="doctor in doctors" :key="doctor.id" :doc="doctor"/>
            </div>
        </div>
    </div>
</template>


<script>
import CardDoctor from '../components/CardDoctor.vue'

export default {
    name: 'AllSpec',
    components: {CardDoctor},
    computed: {
        doctors() {
            return this.$store.getters.allDoctors.filter(doctors => doctors.position == 'ST')
        }
    },
    async mounted() {
        await this.$store.dispatch('axiosDoctors')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.allspec {
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    grid-row: 2/3;
    .allspec_container {
        height: 100%;
        background: linear-gradient(to top,  #31D0F8, #fff);
        box-shadow: 0 0px 25px 5px rgb(156, 154, 154);
        .container_headline {
            h1 {
                @include headline();
                margin: 0;
                margin-left: 5%;
                margin-bottom: 30px;
                padding-top: 20px;
            }
        }
        .container_card {
            @include container-card();
            h2 {
                grid-column: 1/3;
                color: white;
                text-align: center;
                margin-top: 0;
            }
        }
    }
}
</style>