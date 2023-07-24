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
    children: [
      {
        path: '',
        name: 'auth-index',
        component: () => import('../views/auth/AuthView.vue'),
      },
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('../views/auth/LoginView.vue'),
      },
    ],
  },
  { path: '/:path(.*)*', name: '404', redirect: '/' },
]
