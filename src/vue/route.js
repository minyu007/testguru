import generate from './page/generate.vue'
import period from './page/period.vue'
import create from './page/create.vue'
import dashboard from './page/dashboard.vue'
const route = {
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [{
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    }, {
        path: '/',
        redirect: '/period/day'
    }, {
        path: '/generate',
        name: 'generate',
        component: generate
    }, {
        path: '/period/:frequency',
        name: 'period',
        component: period
    }, {
        path: '/create',
        name: 'create',
        component: create
    }]
}
export default route