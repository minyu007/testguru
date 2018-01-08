import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
// import courses from './modules/courses'
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const state = {
    loading: false,
    immloading: false,
    // newData: [],
    periodData: [],
    // banksArr: [],
    // titlesArr: [],
    // colsArr: [],
    // excelTitlesArr: [],
    periodColArr: [],
    periodRowArr: [],
    periodCellArr: [],
    row1len: 0
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        // courses,
    },
    strict: debug // plugins: debug ? [createLogger()] : []
})