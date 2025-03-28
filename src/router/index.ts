import DomusPagina from '@/modulos/landing/paginae/DomusPagina.vue';

import {createRouter, createWebHashHistory} from 'vue-router';

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'home',
            component: DomusPagina,
        },

        {
            path: '/features',
            name: 'features',
            component: () => import('@/modulos/landing/paginae/PeculiaridadesPagina.vue')
        },

        {
            path: '/pricing',
            name: 'pricing',
            component: () => import('@/modulos/landing/paginae/PreciumPagina.vue')
        },

        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/modulos/landing/paginae/ContactusPagina.vue')
        }
    
    ]
});

export default router;