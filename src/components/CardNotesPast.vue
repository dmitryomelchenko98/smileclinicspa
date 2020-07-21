<template>
    <div class="card-item green" v-if="rec.record_type == 'CT'">
        <div class="headline">
            <span>Обследование проведено</span>
        </div>
        <div class="info">
            <p>Дата: {{ rec.date }}</p>
            <p>Время: {{ rec.time }}</p>
            <p>Пациент: {{ client[0].last_name }} {{ client[0].first_name }} {{ client[0].patronymic}}</p>
        </div>
    </div>
    <div class="card-item red" v-else-if="rec.record_type == 'RF'">
        <div class="headline">
            <span>Обследование сорвано</span>
        </div>
        <div class="info">
            <p>Дата: {{ rec.date }}</p>
            <p>Время: {{ rec.time }}</p>
            <p>Пациент: {{ client[0].last_name }} {{ client[0].first_name }} {{ client[0].patronymic}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardNotesPast',
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
.green {
    border: 2px solid green;
}
.red {
    border: 2px solid red;
}
</style>