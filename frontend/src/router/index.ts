import {createRouter, createWebHistory} from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/posts/:id',
      name: 'postIdView',
      component: () => import('@/components/PostIdView.vue')
    }
  ]
})

export default router
