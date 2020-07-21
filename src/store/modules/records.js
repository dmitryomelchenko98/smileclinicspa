import {http} from '../../axios-config.js'

export default {
    actions: {
        recordsPost(ctx, payload) {
            return new Promise((resolve, reject) => {
                const record = {
                    date: payload.date,
                    specialist: payload.specialist,
                    client: payload.client,
                    time: payload.time,
                    //record_type: payload.record_type
                };
                const json = JSON.stringify({record});
                http.post('/records/', json)
                .then(res=>{
                  resolve(res)
                })
                .catch(err=>{
                    console.log(json)
                    reject(err)
                })
            })
        },
        async axiosRec(ctx) {
            const records = await http.get('/records/list_specialist/');
            ctx.commit('updateRec', records.data.results)
        },
        async axiosRecDR(ctx) {
            const recordsDR = await http.get('/records/list_director/');
            ctx.commit('updateRecDR', recordsDR.data.results)
        }
    },
    mutations: {
        updateRec(state, records) {
            state.records = records
        },
        updateRecDR(state, recordsDR) {
            state.recordsDR = recordsDR
        }
    },
    state: {
        records: [],
        recordsDR: []
    },
    getters: {
        allRecords(state) {
            return state.records
        },
        allRecordsDR(state) {
            return state.recordsDR
        }
    }
}