import * as types from './mutation-types'
import bankMap from '../lib/bankmap'
function arr_diff (a1, a2) {
    let a = [], diff = [];
    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (let k in a) {
        diff.push(k)
    }
    return diff
}

export default {
    [types.UPDATE_LOADING_STATUS] (state, status) {
        state.loading = status
    },
    
    [types.SET_PERIOD_DATA] (state, param) {
        state.periodData = param
    },

    [types.UPDATE_IMM_LOADING_STATUS] (state, status) {
        state.immloading = status
    }
}
