import axios from 'axios'
import { ROOT } from './config'

export default {
	//+ '/' + payload.mortgagefor + '?' + 'comingFromFunnel=1&propertyAge=' + payload.propertyAge + '&isPropertyOwner=yes&mortgagePreference=banks&existingMortgage=' + payload.existingMortgage + '&haveFixedIncome=yes&incomeEarnedLocally=yes&bankRelationship=I%20don%27t%20bank%20with%20anyone&sortBy=tct%2B&sortBy=crt%2B&sortBy=mrp%2B&sortBy=art%2B&propertyValue=' + payload.propertyValue +'&wantToBorrow=' + payload.wantToBorrow + '&borrowingPercentage=' + payload.borrowingPercentage + '&wantToBorrowTime='+ payload.wantToBorrowTime+'&wantToBorrowTimeUnit=year&propertyType=privateHousing&lang=en&pageSize=50'
	//https://www.moneyhero.com.hk/api/mortgage/v2/mortgages/banks?comingFromFunnel=1&propertyAge=0&isPropertyOwner=yes&mortgagePreference=banks&existingMortgage=no&haveFixedIncome=yes&incomeEarnedLocally=yes&bankRelationship=I%20don%27t%20bank%20with%20anyone&sortBy=tct%2B&sortBy=crt%2B&sortBy=mrp%2B&sortBy=art%2B&propertyValue=10000000&wantToBorrow=6000000&borrowingPercentage=60&wantToBorrowTime=20&wantToBorrowTimeUnit=year&propertyType=privateHousing&lang=en&pageSize=15
    // getData (payload) {
    //     return axios.post(ROOT + '/getData', { ...payload})
    // },
    getPeriodData (payload) {
        return axios.post(ROOT + '/getPeriodData', { ...payload})
    },
    // createExcel (payload) {
    //     return axios.post(ROOT + '/createExcel', {...payload})
    // },
    createDailyData (payload) {
        return axios.post(ROOT + '/createDailyData', { ...payload})
    },

    reduplicateDailyData (payload) {
        return axios.get(ROOT + '/reduplicateDailyData/' + payload)
    },
    analysisDailyData (payload) {
        return axios.get(ROOT + '/analysisDailyData')
    },
    createDailyDataByPhone (payload) {
        return axios.post(ROOT + '/createDailyDataByPhone', { ...payload})
    },

    createPeriodExcel (payload) {
        console.log(payload)
        return axios.post(ROOT + '/createPeriodExcel', { ...payload})
    }
}
