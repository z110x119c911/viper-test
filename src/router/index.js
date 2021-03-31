import Vue from 'vue'
import VueRouter from 'vue-router'


// //防止router.push跳轉錯誤
// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () =>
            import ('../views/dashboard.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/dashboard.vue'),
    },
    {
        path: '/device',
        name: 'device',
        component: () =>
            import ('../views/device.vue'),
    },
    {
        path: '/administation',
        name: 'administation',
        component: () =>
            import ('../views/administation.vue'),
    },
    {
        path: '/support',
        name: 'support',
        component: () =>
            import ('../views/support.vue'),
    },
    // {
    //     path: '/support',
    //     name: 'support',
    //     component: () =>
    //         import ('../views/support.vue'),
    //     children: [{
    //             path: 'infoTraval',
    //             name: 'infoTraval',
    //             component: () =>
    //                 import ('../views/infoTraval.vue'),
    //         },
    //     ]
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "menu_active",
    
})



export default router