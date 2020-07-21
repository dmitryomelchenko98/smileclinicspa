<template>
    <div class="entrance_container" id="log">
        <div class="login-form">
            <div class="login-form_container">
                <div class="exit" @click="AuthBack()">
                    <div class="back"><img src="../assets/image/back.png" alt=""></div>
                    <p>вернуться</p>
                </div>
                <h2 class="login-heading">Регистрация</h2>
                <form action="#" @submit.prevent="sign_up()">
                    <div class="form-control">
                        <label for="first_name">Имя</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            class="login-input"
                            v-model.trim="first_name"
                        >
                    </div>
                    <div class="form-control">
                        <label for="last_name">Фамилия</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            class="login-input"
                            v-model.trim="last_name"
                        >
                    </div>
                    <div class="form-control">
                        <label for="patronymic">Отчество</label>
                        <input 
                            type="text" 
                            name="patronymic" 
                            id="patronymic" 
                            class="login-input"
                            v-model.trim="patronymic"
                        >
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            class="login-input"
                            v-model.trim="email"
                        >
                    </div>
                    <div class="form-control mb-more">
                        <label for="password">Пароль</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="login-input"
                            v-model.trim="password"
                        >
                    </div>
                    <div class="form-control">
                        <button type="submit" class="btn-submit">Создать аккаунт</button>
                    </div>
                    <div class="form-control">
                    </div>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Reg',
    data(){
        return{
            last_name: '',
            first_name: '',
            patronymic: '',
            email: '',
            password: ''  
        }
    },
    methods: {
        AuthBack() {
            this.$router.push('/')
        },
        sign_up(){
            this.$store.dispatch('sign_up',{
                last_name: this.last_name,
                first_name: this.first_name,
                patronymic: this.patronymic,
                email: this.email,
                password: this.password,
                position: 'GT'
            })
            this.$router.push('/')
        }
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
    .login-form {
        grid-column: 1/2;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .login-form_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .exit {
                display: flex;
                position: absolute;
                top: 20px;
                left: 20px;
                img, p {
                    margin-top: 10px;
                    margin-right: 5px;
                    cursor: pointer;
                }
            }
            .login-heading {
                margin-bottom: 15px;
            }
            .form-control {
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                .login-input {
                    border:none;
                    border-bottom: 1px solid #000000;
                    background-color: rgba(105, 219, 253, 0);
                    width: 350px;
                    outline:none;
                    height: 28px;
                    font-size: 20px;
                }
                .btn-submit {
                    height: 30px;
                    border: none;
                    outline: none;
                    cursor: pointer;            
                    border-radius: 20px;
                    outline: none;
                    background: #31D0F8;
                    font-weight: bolder;
                }
                .btn-submit:hover {
                    background-color: rgb(105, 219, 253);
                }
                .btn-submit:active {
                    background-color: rgb(51, 200, 245);
                }
            }
        }
    }
    p{
        cursor: pointer;
    }
}
@media(min-width:250px)and(max-width: 550px){
    .entrance_container {
        .login-form {
            .login-form_container {
                .form-control {
                    .login-input {
                        width: 250px;
                    }
                }
            }
        }
        .entrance_content {
            form {
                input {
                    width: 250px;
                }
            }
            
        }
    }
}
</style>