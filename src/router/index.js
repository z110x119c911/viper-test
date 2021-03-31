import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'dashboard',
        component: () =>
            import ('../views/dashboard.vue'),
    },
    {
        path: '',
        name: 'dashboard',
        component: () =>
            import ('../views/dashboard.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/dashboard.vue'),
        children: [{
                path: 'device',
                name: 'device',
                component: () =>
                    import ('../views/device.vue'),
            },
            {
                path: 'administation',
                name: 'administation',
                component: () =>
                    import ('../views/administation.vue'),
            },

        ]
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
    routes,
    linkActiveClass: "menu_active",
    
})



export default router