import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MusicLibrary from "@/views/MusicLibrary.vue"
import MusicSort from "@/views/MusicSort.vue"
import LoveMusic from "@/views/LoveMusic.vue"
import Login from "@/views/Login.vue"
import Register from '@/views/Register.vue'
import MyInfo from '@/views/MyInfo.vue'
import MusicPlay from '@/views/MusicPlay.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/music'
  },
  {
    path: '/music',
    name: 'music',
    component: MusicLibrary
  },
  {
    path: '/sort',
    name: 'sort',
    component: MusicSort
  },
  {
    path: '/love',
    name: 'love',
    component: LoveMusic
  }
  ,{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/info',
    name: 'info',
    component: MyInfo
  },
  {
    path:'/play',
    name:'play',
    component:MusicPlay
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
