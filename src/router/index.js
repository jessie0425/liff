import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const LiffGuard = (_to, _from, next) => {
  console.log(window.liff.isInClient(), '有東西')
  // // 測試用 
  // next();
  // if (!window.liff.isInClient()) {
  //   next('/ErrorLiff');
  // } else {
  //   next();
  // }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      beforeEnter: LiffGuard,
    },
    {
      path: '/ErrorLiff',
      name: 'ErrorLiff',
      component: () => import('@/views/ErrorLiff.vue'),
    },
  ],
})

export default router
