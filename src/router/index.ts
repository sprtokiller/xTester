import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage404View from '../views/Admin/ErrorPage404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: () => import('@/views/FrontPageView.vue')
      //props: (route) => ({ userHash: route.params.userHash })
    },
    {
      path: '/app',
      name: 'admin',
      component: () => import('@/views/Admin/AdminView.vue'),
      props: true,
      children: [
        {
          path: 'courses',
          name: 'courses',
          component: () => import('@/views/Admin/Courses/CoursesView.vue')
        },
        {
          path: 'course/detail/:courseUUID',
          name: 'courseDetail',
          component: () => import('@/views/Admin/Courses/CourseDetailView.vue'),
          props: true
        },
        {
          path: 'course/new',
          name: 'courseAdd',
          component: () => import('@/views/Admin/Courses/CourseImportView.vue'),
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
          component: () => import('@/views/Admin/Dashboard/DashboardView.vue')
        },
        {
          path: 'modules',
          name: 'modules',
          component: () => import('@/views/Admin/Modules/ModulesView.vue')
        },
        {
          path: 'tests',
          name: 'tests',
          component: () => import('@/views/Admin/Tests/TestsView.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/Admin/Users/UsersView.vue')
        }
        // {
        // TODO: implement not found here
        // }
      ]
    },
    {
      path: '/course/:userHash',
      name: 'course',
      component: () => import('@/views/HomeView.vue'),
      props: (route) => ({ userHash: route.params.userHash })
    },
    { path: '/not-found', name: 'not-found', component: ErrorPage404View }, // the only route that is not lazy loaded
    { path: '/:pathMatch(.*)*', redirect: { name: 'not-found' } }
  ]
})

export default router
