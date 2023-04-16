<script lang="ts">

import { inject } from 'vue'
import { NList, NSpin, NScrollbar, NEmpty, NButton } from 'naive-ui';
import CourseItem from './Courses/CourseItem.vue';
import type { CourseView } from '@/interfaces';
import type { API } from '@/api';


export default {
  components: {
    NList, NSpin, NScrollbar, NEmpty, NButton,
    CourseItem
  },
  mounted() {
    const API = inject('API') as API;

    // fetch courses from the API
    API.getCourseList().then(courses => {
      this.loading = false;
      this.courses = courses;
    }).catch(err => {
      this.loading = false;
      console.error(err);
    });
  },
  data() {
    return {
      loading: true,
      courses: [] as CourseView[]
    }
  },
  computed: {
    isEmpty() : boolean {
      return this.courses.length === 0;
    } 
  } 
}
</script>


<template>
  <div class="container">
    <h2>Tested courses</h2>
    <n-scrollbar>
      <n-spin :show="loading" style="min-height: 200px;">
        <n-list hoverable clickable>
          <!-- add a CourseItem for each course -->
          <CourseItem v-for="course in courses" :course="course" />
        </n-list>
        <n-empty description="No e-learning courses found :(" v-if="!loading && isEmpty">
          <template #extra>
            <n-button size="small">
              Start by adding a course! <!-- TODO take me to a tutorial page -->
            </n-button>
          </template>
        </n-empty>
      </n-spin>
    </n-scrollbar>
  </div>
</template>