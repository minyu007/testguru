import * as types from './mutation-types'
import service from '../service'
import bankMap from '../lib/bankmap'

let homeUrl = 'https://www.bestmoney.hk/en/time-deposit'
export default {
    // async createDailyData ({ commit }, payload) {
    //     try {
    //        await service.createDailyData()
    //        console.log('Create Success!!')
    //     } catch (e) {
    //         console.log(e)
    //     }
    // },

    async reduplicateDailyData ({ commit }, payload) {
        try {
          let res = await service.reduplicateDailyData(payload)
          console.log(res)
        } catch (e) {
            console.log(e)
        }
    },
    async analysisDailyData ({ commit }, payload) {
        try {
          let res = await service.analysisDailyData()
          console.log(res)
        } catch (e) {
            console.log(e)
        }
    },

    async createDailyDataByPhone ({ commit }, payload) {
        try {
           await service.createDailyDataByPhone()
           console.log('Create Success!!')
        } catch (e) {
            console.log(e)
        }
    },

    async getPeriodData ({ commit }, payload) {
        try {
            const res = await service.getPeriodData(payload)
            if (res.data.status == 200) {
                commit(types.SET_PERIOD_DATA, res.data.data)
            }
        } catch (e) {
        }
    },
    
    async createPeriodExcel ({ commit }, payload) {
        try {
            const res = await service.createPeriodExcel(payload)
            if (res.data.status == 200) {
               
            }
        } catch (e) {
        }
    }
}
