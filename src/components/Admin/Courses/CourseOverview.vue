<script lang="ts">

import { inject } from 'vue'
import { NList, NSpin, NScrollbar, NEmpty, NButton, useMessage, NH2 } from 'naive-ui';
import CourseItem from './CourseItem.vue';
import type { ICourseView } from '@/interfaces';
import type { API } from '@/services/api';

export default {
  components: {
    NList, NSpin, NScrollbar, NEmpty, NButton, NH2,
    CourseItem
  },
  setup() {
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
      loading: true as boolean,
      courses: [] as ICourseView[],
      editUUID: '' as string
    }
  },
  computed: {
    isEmpty(): boolean {
      return this.courses.length === 0;
    }
  },
  methods: {
    editSelect(courseUUID: string) {
      // this master component is holding the UUID of actively edited course
      this.editUUID = courseUUID;
    },
    deleteCourse(courseUUID: string) {
      // delete the course from the array
      this.courses = this.courses.filter(course => course.courseUUID !== courseUUID);
    },
    renameCourse(courseUUID: string, newName: string) {
      // rename the course in the array
      this.courses = this.courses.map(course => {
        if (course.courseUUID === courseUUID) {
          course.name = newName;
        }
        return course;
      });
    }
  }
}
</script>


<template>
  <n-h2>List of courses</n-h2>
  <n-scrollbar>
    <n-spin :show="loading" style="min-height: 200px;">
      <n-list hoverable clickable>
        <!-- add a CourseItem for each course -->
        <CourseItem v-for="course in courses" :course="course" v-bind:editUUID="editUUID" v-bind:key="course.courseUUID"
          @editSelect="editSelect" @deleteCourse="deleteCourse" @renameCourse="renameCourse" />
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
</template>