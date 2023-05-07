import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontPageView from '../views/FrontPageView.vue'
import AdminView from '../views/AdminView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

/* Admin content will lazy load */
// import CourseOverview from '@/components/Admin/Courses/CourseOverview.vue'
// import CourseDetail from '@/components/Admin/Courses/CourseDetail.vue'
// import CourseImport from '@/components/Admin/Courses/CourseImport.vue'
// import DashboardOverview from '@/components/Admin/Dashboard/DashboardOverview.vue'
// import ModuleOverview from '@/components/Admin/Modules/ModuleOverview.vue'
// import TestOverview from '@/components/Admin/Tests/TestOverview.vue'
// import UserOverview from '@/components/Admin/Users/UserOverview.vue'

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
      component: AdminView,
      props: true,
      children: [
        {
          path: 'courses',
          name: 'courses',
          component: () => import('@/components/Admin/Courses/CourseOverview.vue'),
        },
        {
          path: 'course/detail/:courseUUID',
          name: 'courseDetail',
          component: () => import('@/components/Admin/Courses/CourseDetail.vue'),
          props: true
        },
        {
          path: 'course/new',
          name: 'courseAdd',
          component: () => import('@/components/Admin/Courses/CourseImport.vue'),
          props: (route) => ({ 
              name: route.query.name,
              author: route.query.author,
              version: route.query.version,
              courseLocation: route.query.courseLocation,
              groupHash: route.query.groupHash
            })
        },
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/components/Admin/Dashboard/DashboardOverview.vue'),
        },
        {
          path: 'modules',
          name: 'modules',
          component: () => import('@/components/Admin/Modules/ModuleOverview.vue'),
        },
        {
          path: 'tests',
          name: 'tests',
          component: () => import('@/components/Admin/Tests/TestOverview.vue'),
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/components/Admin/Users/UserOverview.vue'),
        },
        // {
        // TODO: implement not found here
        // }
      ]
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
