import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './states'
import mutations from './mutations'
import actions from './action'
import getters from './getters'


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})