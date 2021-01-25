import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '@/views/Home.vue')
  },{
    path: '/about',
    name: 'About',
    component: () => import( '@/views/About.vue')
  },{
    path: '/test',
    name: 'IndexTest',
    component: () => import( '@/views/index.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
