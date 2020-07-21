<template>
    <div class="card-item" v-if="rec.record_type == 'CD'">
        <div class="headline">
            <img src="../assets/image/gal.svg" alt="">
            <span>Запись подтверждена</span>
        </div>
        <div class="info">
            <p>Дата: {{ rec.date }}</p>
            <p>Время: {{ rec.time }}</p>
            <p>Пациент: {{ client[0].last_name }} {{ client[0].first_name }} {{ client[0].patronymic}}</p>
        </div>
    </div>
</template>

<script>
import { mapActions} from "vuex"

export default {
    name: 'CardNotes',
    props: ['rec'],
    data() {
        return {
            id: this.rec.client
        }
    },
    computed: {
        client() {
            return this.$store.getters.allDoctors.filter(client => client.id == this.id)
        }
    },
    async mounted() {
        await this.$store.dispatch('axiosDoctors')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.card-item {
   @include card-item();
}
</style>