import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        home:'home',
        component:()=>import('../pages/App')
    },
    {
        path:'/ChainDemo',
        home:'ChainDemo',
        component:()=>import('../pages/ChainDemo')
    }
]
export const router = new VueRouter({
        mode:'hash',
        routes
    }
)
