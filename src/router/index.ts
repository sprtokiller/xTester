import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontPageView from '../views/FrontPageView.vue'
import AdminView from '../views/AdminView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

/* Admin content will lazy load */
import Courses from '@/components/Admin/Courses/Courses.vue'
import CourseDetail from '@/components/Admin/Courses/CourseDetail.vue'
import CourseImport from '@/components/Admin/Courses/CourseImport.vue'
import Dashboard from '@/components/Admin/Dashboard/Dashboard.vue'
import Modules from '@/components/Admin/Modules/Modules.vue'
import Tests from '@/components/Admin/Tests/Tests.vue'
import Users from '@/components/Admin/Users/Users.vue'

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
          component: Courses,
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
          component: Dashboard
        },
        {
          path: 'modules',
          name: 'modules',
          component: Modules
        },
        {
          path: 'tests',
          name: 'tests',
          component: Tests
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        },
        // {
        // implement not found here
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
