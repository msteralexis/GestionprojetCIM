import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/inscriptionConnection',
      name: 'inscriptionConnection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/inscriptionConnection.vue')
    },
    {
      path: '/presentation',
      name: 'presentation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/presentation.vue')
    },
    {
      path: '/connection',
      name: 'connection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/connection.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../components/inscription.vue')
    },
    {
      path: '/inscriptionRestaurateur',
      name: 'inscriptionRestaurateur',
      component: () => import('../components/inscriptionRestaurateur.vue')
    },
    {
      path: '/inscriptionClient',
      name: 'inscriptionClient',
      component: () => import('../components/inscriptionClient.vue')
    },
    {
      path: '/enregistrement/:numeroatelier/:numeroUsers',
      name: 'enregistrement',
      component: () => import('../components/enregistrement.vue')
    },
    {
      path: '/acceuilClients/:index',
      name: 'acceuilClients',
      component: () => import('../components/acceuilClients.vue')
    },
    {
      path: '/acceuilRestaurateurs',
      name: 'acceuilRestaurateurs',
      component: () => import('../components/acceuilRestaurateurs.vue')
    },
    {
      path: '/atelier/:index/:numeroUsers',
      name: 'atelier',
      component: () => import('../components/atelier.vue')
    },
    {
      path: '/atelierCreation',
      name: 'atelierCreation',
      component: () => import('../components/atelierCreation.vue')
    },
    {
      path: '/atelierRestaurant/:index',
      name: 'atelierRestaurant',
      component: () => import('../components/atelierRestaurant.vue')
    }
    
    

  ]
})

export default router

