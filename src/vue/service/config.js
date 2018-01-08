import axios from 'axios'
import store from '../store'
export const ROOT = '/property-guru'

const latencyThreshold = 1000
let timerLoading = null
let timerLoaded = null
let queue = []

const loading = () => {
    queue.push({})
    if (queue.length == 1) {
        timerLoading = setTimeout(() => {
            if (queue.length) {
                store.commit('UPDATE_LOADING_STATUS', true)
                if (timerLoading) clearTimeout(timerLoading)
            }
        }, latencyThreshold)
    }
    store.commit('UPDATE_IMM_LOADING_STATUS', true)
}

const loaded = () => {
    queue.pop()
    if (queue.length == 0) {
        timerLoaded = setTimeout(() => {
            if (queue.length == 0 && store.state.loading) {
                store.commit('UPDATE_LOADING_STATUS', false)
                if (timerLoaded) clearTimeout(timerLoaded)
            }
        }, latencyThreshold)
    }
    store.commit('UPDATE_IMM_LOADING_STATUS', false)
}

// const ajaxErr = (status) => {
//     switch (status) {
//     case 401:
//         alert('您的登录已经过期, 请重新登录.')
//         break
//     case 404:
//         alert('您需要的资源没有找到.')
//         break
//     case 500:
//         alert('系统错误.')
//         break
//     case 503:
//         alert('服务暂时不可用.')
//         break
//     default:
//     }
// }

axios.interceptors.request.use((config) => {
    if (config && config.url && config.url.indexOf(ROOT) !== -1) {
        let i = ''
        i = (config.url.indexOf('?') == -1 ? '?' : '&')
        config.url = config.url + i + 'timestamp=' + (new Date()).getTime()
    }
    if (!config.ignore) {
        loading()
    }
    return config
}, (error) => {
    loaded()
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    loaded()
    return response
}, (error) => {
    loaded()
    return Promise.reject(error)
})
