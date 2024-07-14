import { createRouter, createWebHistory  } from "vue-router";
import AppLayout from '@/layouts/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
            meta: {
                layout: AppLayout,
                requiresAuth: true
            },
        },
    ]
})

export default router