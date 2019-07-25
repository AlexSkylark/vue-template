import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/hello-world/hello-world.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/login',
            component: HelloWorld,
            meta: {
                allowAnonymous: true
            }
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    // already signed in or allow anonymous
    if ((localStorage.auth_token && localStorage.auth_token !== 'undefined') || to.matched.some(record => record.meta.allowAnonymous)) {
        next()
    } else {
        next('/login')
    }
})

export default router
