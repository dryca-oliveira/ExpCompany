import Vue from 'vue'
import VueRouter from 'vue-router'
import AdManagement from '../views/AdManagement.vue'
import SocialMedia from '../views/SocialMedia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AdManagement',
    component: AdManagement
  },
  {
    path: '/arte-para-rede-social',
    name: 'SocialMedia',
    component: SocialMedia
  },

]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth', }
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
