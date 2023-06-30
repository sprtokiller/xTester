import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage404View from '@/views/Admin/ErrorPage404View.vue'

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
          name: 'courseList',
          component: () => import('@/views/Admin/Courses/CoursesView.vue')
        },
        {
          path: 'course/detail/:courseUUID',
          name: 'courseDetail',
          component: () => import('@/views/Admin/Courses/CourseDetailView.vue'),
          props: true
        },
        {
          path: 'course/import',
          name: 'courseImport',
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
          name: 'moduleList',
          component: () => import('@/views/Admin/Modules/ModulesView.vue')
        },
        {
          path: 'tests',
          name: 'testingList',
          component: () => import('@/views/Admin/Tests/TestsView.vue')
        },
        {
          path: 'test/new',
          name: 'testingNew',
          component: () => import('@/views/Admin/Tests/TestAddView.vue'),
          props: (route) => ({
            courseUUID: route.query.courseUUID
          })
        },
        {
          path: 'test/detail/:testUUID',
          name: 'testingDetail',
          component: () => import('@/views/Admin/Tests/TestDetailView.vue'),
          props: true
        },
        {
          path: 'test/result/:testUUID',
          name: 'testingResult',
          component: () => import('@/views/Admin/Tests/TestResultView.vue'),
          props: true
        },
        {
          path: 'testers',
          name: 'testerList',
          component: () => import('@/views/Admin/Testers/TestersView.vue')
        }
        // {
        // TODO: implement not found here
        // }
      ]
    },
    {
      path: '/course/:testUUID/:testerUUID',
      name: 'course',
      component: () => import('@/views/CourseView.vue'),
      props: (route) => ({ testUUID: route.params.testUUID, testerUUID: route.params.testerUUID })
    },
    { path: '/not-found', name: 'not-found', component: ErrorPage404View }, // the only route that is not lazy loaded
    { path: '/:pathMatch(.*)*', redirect: { name: 'not-found' } }
  ]
})

export default router
