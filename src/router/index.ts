import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontPageView from '../views/FrontPageView.vue'
import AdminView from '../views/AdminView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

/* Admin content will lazy load */
import CourseOverview from '@/components/Admin/Courses/CourseOverview.vue'
import CourseDetail from '@/components/Admin/Courses/CourseDetail.vue'
import CourseImport from '@/components/Admin/Courses/CourseImport.vue'
import DashboardOverview from '@/components/Admin/Dashboard/DashboardOverview.vue'
import ModuleOverview from '@/components/Admin/Modules/ModuleOverview.vue'
import TestOverview from '@/components/Admin/Tests/TestOverview.vue'
import UserOverview from '@/components/Admin/Users/UserOverview.vue'

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
          component: CourseOverview,
        },
        {
          path: 'course/detail/:courseUUID',
          name: 'courseDetail',
          component: CourseDetail,
          props: true
        },
        {
          path: 'course/new',
          name: 'courseAdd',
          component: CourseImport,
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
          component: DashboardOverview
        },
        {
          path: 'modules',
          name: 'modules',
          component: ModuleOverview
        },
        {
          path: 'tests',
          name: 'tests',
          component: TestOverview
        },
        {
          path: 'users',
          name: 'users',
          component: UserOverview
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
