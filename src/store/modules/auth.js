import {http} from '../../axios-config.js'

export default {
    state: {
        token: localStorage.getItem('authorization_token') || null,
        id: localStorage.getItem('id') || null,
    },
    mutations: {
        sing_in(state, token, id){
            state.token = token;
            state.id = id;
        },
        sign_out(state){
            state.token = null;
            state.id = null;
        }
    },
    actions:{
        async sing_in(context, credentials){
            return new Promise((resolve, reject) => {
                http.post('/auth/signin/',{
                    email: credentials.email,
                    password: credentials.password
                })
                .then(res => {
                    const token = res.data.authorization_token;
                    const id = res.data.id;
                    localStorage.setItem('authorization_token', token);
                    localStorage.setItem('id', id)
                    context.commit('sing_in', { token, id })
                    resolve(res)
                })
                .catch(error => {
                    console.log('error')
                    reject(error)
                    alert("Логин или пароль не верен")
                })
            })
        },
        sign_up(context, credentials){
            return new Promise((resolve, reject) => {
              http.post('/auth/signup/', {
                last_name: credentials.last_name,
                first_name: credentials.first_name,
                patronymic: credentials.patronymic,
                email: credentials.email,
                password: credentials.password,
                position: credentials.position
              })
              .then(res=>{
                resolve(res)
              })
              .catch(err=>{
                reject(err)
              })
            })
        },
        sign_out(context){
            localStorage.clear();
            context.commit('sign_out')
        }
    },
    etters: {
        authStatus(state) {
            return state.status
        }

    }
}