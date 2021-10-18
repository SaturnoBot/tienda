import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/zapatilla/:id',
    component: () => import(/* webpackChunkName: "about" */ '../components/Zapatilla.vue')
  },
  {
    path: '/carrito',
    component: () => import(/* webpackChunkName: "about" */ '../components/Carrito.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue')
  },
  {
    path: '/Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
