import { createRouter, createWebHistory } from 'vue-router'
import index from "@/views/index/index.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: index
  },
  {
    path: '/flv',
    name: 'Flv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=> import('@/views/flv/flv.vue')
  },
  {
    path: '/hls',
    name: 'Hls',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=> import('@/views/hls/hls.vue')
  },
  {
    path: '/vid',
    name: 'Video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=> import('@/views/video/video.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
