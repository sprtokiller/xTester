<script lang="ts">

import { inject } from 'vue'
import { NList, NSpin, NScrollbar, NEmpty, NButton, useMessage, NH2 } from 'naive-ui';
import CourseItem from '@/components/Admin/Courses/CourseItem.vue';
import CourseDetail from '@/components/Admin/Courses/CourseDetail.vue';
import type { CourseView } from '@/interfaces';
import type { API } from '@/services/api';

export default {
  components: {
    NList, NSpin, NScrollbar, NEmpty, NButton, NH2,
    CourseItem, CourseDetail
  },
  setup () {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API }
  },
  mounted() {
    // fetch courses from the API
    this.API.getCourseList().then(courses => {
      this.loading = false;
      this.courses = courses;     
    }).catch(err => {
      this.loading = false;
      this.MSG.error(err.message);
    });
  },
  data() {
    return {
      detail: 0 as number,
      loading: true as boolean,
      courses: [] as CourseView[]
    }
  },
  computed: {
    isEmpty() : boolean {
      return this.courses.length === 0;
    } 
  },
  // get signal from CourseItem to show the CourseDetail
  methods: {
    showDetail(courseId: number) {
      this.detail = courseId;
    }
  }
}
</script>


<template>
  <div class="container">
    <CourseDetail v-if="detail" :courseId="detail" @close="detail=0" />

    <div v-else>
      <n-h2>List of courses</n-h2>
      <n-scrollbar>
        <n-spin :show="loading" style="min-height: 200px;">
          <n-list hoverable clickable>
            <!-- add a CourseItem for each course -->
            <CourseItem v-for="course in courses" :course="course" @open-detail="showDetail" />
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
  </div>
</template>