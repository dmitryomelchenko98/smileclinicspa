import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },  
  {
    path: '/Reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue')
  }, 
  {
    path: '/RecomendSpec',
    name: 'RecomendSpec',
    component: () => import('../views/RecomendSpec.vue')
  },
  {
    path: '/AllSpec',
    name: 'AllSpec',
    component: () => import('../views/AllSpec.vue')
  },
  {
    path: '/MyNotes',
    name: 'MyNotes',
    component: () => import('../views/MyNotes.vue')
  },
  {
    path: '/AboutCompany',
    name: 'AboutCompany',
    component: () => import('../views/AboutCompany.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  }
]
const router = new VueRouter({
  routes
})


export default router
