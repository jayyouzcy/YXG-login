import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export default <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/auth/CommonLayoutView.vue'),
    children: [
      {
        path: '',
        name: 'auth-index',
        component: () => import('../views/auth/AuthView.vue'),
      },
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('../components/auth/LoginModule.vue'),
      },
      {
        path: 'register',
        name: 'auth-register',
        component: () => import('../components/auth/RegisterModule.vue'),
      },
      {
        path: 'abnormal',
        name: 'auth-abnormal',
        props: true,
        component: () => import('../components/auth/AbnormalModule.vue'),
      },
    ],
  },
  { path: '/:path(.*)*', name: '404', redirect: '/' },
]
