import {http} from '../../axios-config.js'

export default {
    actions: {
        async axiosUser(ctx) {
            const user = await http.get('/users/' + localStorage.getItem('id') + '/');
            ctx.commit('updateUsers', user.data)
        }, 
        async axiosDoctors(ctx) {
            const doctors = await http.get('/users/');
            ctx.commit('updateDoctors', doctors.data.results)
        }
    },
    mutations: {
        updateUsers(state, user) {
            state.user = user
        },
        updateDoctors(state, doctors) {
            state.doctors = doctors
        }
    },
    state: {
        user: [],
        doctors: []
    },
    getters: {
        User(state) {
            return state.user
        },
        allDoctors(state) {
            return state.doctors
        }

    }
}


