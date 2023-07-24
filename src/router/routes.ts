import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export default <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { path: '/:path(.*)*', name: '404', redirect: '/' },
]
