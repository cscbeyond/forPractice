import Vue from 'vue'
import Router from 'vue-router'
import ItemDetial from "./pages/ItemDetial/ItemDetial.vue";
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Login',
            component: () => import('./pages/Login/Login.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('./pages/Index/Index.vue'),
        },
        {
            path: 'itemDetial',
            name: 'itemDetial',
            component: ItemDetial
        },
        {
            path: '/confirmOrder',
            name: 'confirmOrder',
            component: () => import('./pages/ConfirmOrder/ConfirmOrder.vue'),
        },
    ]
})