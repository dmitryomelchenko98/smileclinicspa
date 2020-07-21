<template>
    <div class="card-content">
        <div class="foto-container">
            <div class="foto">
                <img src="../assets/image/fotodef.svg" alt="">
            </div>
        </div>
        <span>{{doc.last_name}} {{doc.first_name}} {{doc.patronymic}}</span>
        <div class="info-doctor">
            <p>Стоматолог</p>
            <p>Опыт работы (г): {{ doc.experience }}</p>
        </div>
        <button @click="SignUp = !SignUp">Записаться</button>
        <div class="filter" v-show="SignUp"></div>
        <div class="modal" v-show="SignUp">
            <div class="clear" @click="SignUp = !SignUp">
               <img src="../assets/image/clear.svg" alt="">
            </div>
            <h1>Запись на прием</h1>
            <form action="" @submit.prevent="recordPost()">
                <label for="date">Выберите дату</label>
                <input 
                    type="date"
                    name="date"
                    id="date"
                    v-model.trim = "date"
                >
                <label for="time">Выберите время</label>
                <input 
                    type="time"
                    name="time"
                    id="time"
                    v-model.trim = "time"
                    >
                <input type="submit" value="Записаться" class="button">
            </form>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'CardDoctor',
    props: ['doc'],
    data(){
        return{
            SignUp: false,
            date: '',
            time: ''
        }
    },
    methods: {
        recordPost() {
            this.$store.dispatch('recordsPost', {
                date: this.date,
                specialist: this.doc.id,
                client: localStorage.getItem('id'),
                time: this.time
            })
            this.SignUp = false;
            this.date = '';
            this.time = ''
        }
    },
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.card-content {
    background-color: white;
    border-radius: 15px;
    width: 80%;
    margin: 25px auto;
    min-height: 250px;
    box-shadow: 0 3px 6px 3px rgb(156, 154, 154);
    display: grid;
    grid-template-columns: minmax(100px, 30%) 1fr;
    grid-template-rows: 60px 100px;
    @media (max-width: 1000px) {
        width: 70%;
    }
    
    .foto-container {
        grid-column: 1/2;
        grid-row: 1/4;
        border-right: 3px solid #999;
        @include flex();
        .foto {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
            img {
                width: auto;
                height: 100%;
                margin: auto auto; 
            }
        }
        
    }
    span {
        font-weight: bold;
        font-size: 25px;
        margin: 20px 20px 0 20px;
    }
    .info-doctor {
        @include flex();
        flex-direction: column;
        align-items: flex-start;
        margin: 0 20px;
        p {
            margin: 0;
            font-size: 20px;
        }
    }
    button {
        width: 80%;
        height: 60%;
        margin: auto auto;
        border-radius: 20px;
        outline: none;
        border: none;
        background: #31D0F8;
        font-weight: bolder;
        cursor: pointer;
    }

    .modal {
        @include modal();
    }
    .filter {
        @include filter();
    }
    @media (max-width: 520px) {
        width: 95%;
        min-height: 200px;
        margin: 10px auto;
        grid-template-rows: 50px 80px;
        span {
            font-size: 21px;
            margin: 10px 10px 0px 10px;
        }
        .info-doctor {
            margin: 0 10px;
            p {
                margin: 0;
                font-size: 16px;
            }
        }
    }
}
</style>