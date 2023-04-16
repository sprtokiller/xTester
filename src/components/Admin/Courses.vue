<script lang="ts">

import { inject } from 'vue'
import { NList, NSpin, NScrollbar } from 'naive-ui';
import CourseItem from './Courses/CourseItem.vue';
import type { CourseView } from '@/interfaces';
import type { API } from '@/api';


export default {
  components: {
    NList, NSpin, NScrollbar,
    CourseItem
  },
  mounted() {
    const API = inject('API') as API;

    // fetch courses from the API
    API.getCourseList().then(courses => {
      this.loading = false;
      this.courses = courses;
    }).catch(err => {
      console.error(err);
    })
  },
  data() {
    return {
      loading: true,
      courses: [] as CourseView[]
    }
  }
}
</script>


<template>
  <div class="container">
    <h2>Added courses</h2>
    <n-scrollbar>
      <n-spin :show="loading" style="min-height: 200px;">
        <n-list hoverable clickable>
          <!-- add a CourseItem for each course -->
          <CourseItem v-for="course in courses" :course="course" />
        </n-list>
      </n-spin>
    </n-scrollbar>
  </div>
</template>