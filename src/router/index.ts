import DomusPagina from '@/modulos/landing/paginae/DomusPagina.vue';

import {createRouter, createWebHashHistory} from 'vue-router';

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/modulos/landing/layouts/LandingLayout.vue'),
            children: [
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
                    component: () => import('@/modulos/landing/paginae/PretiumPagina.vue')
                },
        
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modulos/landing/paginae/ContactusPagina.vue')
                }
            ]
        }
        ,
        {
            path: '/auth',
            component: () => import('@/modulos/auth/layouts/AuthLayout.vue'),
            redirect: {name: 'login'},
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/modulos/auth/paginae/LoginPagina.vue')
                },

                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/modulos/auth/paginae/RegisterPagina.vue')
                }
            ]
        }
    
    ]
});

export default router;