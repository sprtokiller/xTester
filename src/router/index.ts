import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontPageView from '../views/FrontPageView.vue'
import AdminView from '../views/AdminView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: FrontPageView,
      //props: (route) => ({ userHash: route.params.userHash })
    },
    {
      path: '/app',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/course/:userHash',
      name: 'course',
      component: HomeView,
      props: (route) => ({ userHash: route.params.userHash })
    },
    { path: "/not-found", name: "not-found", component: PageNotFoundView },
    { path: "/:pathMatch(.*)*", redirect: { name: "not-found" } } 
  ]
})

// The Referrer-Policy header must also be set to no-referrer-when-downgrade when using http and localhost.

export default router
