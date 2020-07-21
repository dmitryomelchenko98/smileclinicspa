<template>
    <div class="entrance_container" id="log">
        <div class="entrance_content">
            <form action="#" @submit.prevent="sign_in()">
                <h1>Вход</h1>
                <input 
                    type="email"
                    placeholder="Логин"
                    name="username"
                    id="username"
                    v-model.trim="email"
                >
                <input 
                    type="password" 
                    placeholder="Пароль" 
                    name="password" 
                    id="password"
                    v-model.trim="password"
                >
                <button type="submit">Войти</button>
            </form>
            <p href="#" class="register" @click="Reg()">Регистрация</p>
            
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Login',
    data() {
        return{
            email: '',
            password: '' 
        }
    },
    methods: {
        Reg() {
            this.$router.push('Reg')
        },
        async sign_in(){
            await this.$store.dispatch('sing_in', {
                email: this.email,
                password: this.password
            })
            await this.$router.push('RecomendSpec')
            window.location.reload();
        },
    }
}
</script>

<style lang="scss">
.entrance_container {
    position: absolute;
    background: linear-gradient(to top,  #31D0F8, #fff);
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .entrance_content {
        grid-column: 1/2;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;  
            h1 {
                margin-bottom: 15px;
            }
            input {
                border:none;
                border-bottom: 1px solid #000000;
                background-color: rgba(105, 219, 253, 0);
                margin-top: 25px;
                width: 350px;
                outline:none;
                height: 35px;
                font-size: 20px;
            }

            button {
                width: 120px;
                height: 30px;
                margin: 20px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;               
                cursor: pointer;
                border-radius: 20px;
                outline: none;
                background: #31D0F8;
                font-weight: bolder;
            }
            button:hover {
                background-color: rgb(27, 196, 238);
            }
            button:active {
                background-color: rgb(16, 173, 212);
            }
        
        }   
    }
    p{
        cursor: pointer;
    }
}
</style>