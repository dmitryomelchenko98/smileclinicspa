<template>
    <div class="my_notes">
        <div class="my_notes_container">
            <div class="container-my_notes">
                <div class="my_notes-headline">Мои записи</div>
                <div class="my_notes-card" v-if="user.position !== 'DR'"> 
                    <CardNotes v-for="record in records" :key="record.id" :rec="record" />
                </div>
                <div class="my_notes-card" v-else> 
                    <CardNotes  v-for="record in recordsDR" :key="record.id" :rec="record" />
                </div>
            </div>
            <div class="container-past_visit">
                <div class="past_visit-headline">Прошлые посещения</div>
                <div class="past_visit-card" v-if="user.position !== 'DR'">
                    <CardNotesPast v-for="rec in records" :key="rec.id" :rec="rec" />
                </div>
                <div class="past_visit-card" v-else>
                    <CardNotesPast v-for="recDR in recordsDR" :key="recDR.id" :rec="recDR" />
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import CardNotes from '../components/CardNotes.vue'
import CardNotesPast from '../components/CardNotesPast.vue'


export default {
    name: 'MyNotes',
    components: {CardNotes, CardNotesPast},
    computed: {
        user() {
            return this.$store.getters.User
        },
        records() {
            return this.$store.getters.allRecords
        },
        recordsDR() {
            return this.$store.getters.allRecordsDR
        }
    },
    async mounted() {
        await this.$store.dispatch('axiosRecDR');
        await this.$store.dispatch('axiosUser');
        await this.$store.dispatch('axiosRec');
    }
    
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.my_notes {
    grid-column: 1/2;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
    .my_notes_container {
        height: 100%;
        background: white;
        box-shadow: 0 0px 25px 5px rgb(156, 154, 154);
        .container-my_notes {
            .my_notes-headline {
                @include headline();
                margin-left: 6%;
                padding-top: 20px;
                @media (max-width: 705px) {
                    margin-left: 10%;
                    width: 90%;
                }
            }
            .my_notes-card {
                @include container-card_two();
            }
        }
        .container-past_visit {
            margin-top: 100px;
            .past_visit-headline {
                @include headline();
                margin-left: 6%;
            }
            .past_visit-card {
                @include container-card_two();
                
            }
        }
    }
}
</style>