import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register.vue'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
    ],
})
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isAuthenticated = authStore.isAuthorized

    if (!isAuthenticated && !['login', 'register'].includes(to.name)) {
        next({ name: 'login' })
    } else if (isAuthenticated && ['login', 'register'].includes(to.name)) {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router
