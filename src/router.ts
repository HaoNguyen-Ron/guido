import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            component: indexVue
        },
        {
            path: '/login',
            component: loginVue
        }
    ]
})

export default router