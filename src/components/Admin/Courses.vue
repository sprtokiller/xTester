<script lang="ts">

import { inject } from 'vue'
import { NList } from 'naive-ui';
import CourseItem from './Courses/CourseItem.vue';
import type { Course } from '@/interfaces';
import type { API } from '@/api';


export default {
  components: {
    NList, CourseItem
  },
  mounted() {
    const API = inject('API') as API;

    // fetch courses from the API
    API.getCourses().then(courses => {
      this.courses = courses;
    })
  },
  data() {
    return {
      // an array of courses
      courses: [] as Course[]
    }
  }
}
</script>


<template>
  <div class="container">
    <n-list hoverable clickable>
      <!-- add a CourseItem for each course -->
      <CourseItem v-for="course in courses" :course="course" />
    </n-list>
  </div>
</template>