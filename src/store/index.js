import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import user from './modules/user.js'
import records from './modules/records.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, 
    user,
    records
  }
})
