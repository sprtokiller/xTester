<script lang="ts">

import { inject } from 'vue'
import { useMessage } from 'naive-ui';
import type { API } from '@/services/api';
import type { CourseDetail } from '@/interfaces';

export default {
  setup () {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API }
  },
  mounted() {
    // fetch courses from the API
    this.API.getCourseDetail(this.courseId).then(course => {
      this.loading = false;
      this.course = course;     
    }).catch(err => {
      this.loading = false;
      this.MSG.error(err.message);
    });
  },
  data() {
    return {
      loading: true,
      course: {} as CourseDetail
    }
  },
  components: {

  },
  props: {
    courseId: {
      type: Number,
      required: true
    }
  },
  computed: {
    getURL() : string | undefined {
      if (this.course) {
        return `https://articulateusercontent.com/review/items/${this.course.course_hash}/story.html`;
      }
      else {
        return undefined;
      }
    } 
  },
}
</script>


<template>
  Course Id: {{courseId}}
  <div v-if="loading">Loading...</div>
  <div v-else>
    {{ course.name }} : {{ course.course_hash }}
    <iframe allowfullscreen="true" class="player" :src="getURL" scrolling="no" style="width: 40vw; height: 40vh;"></iframe>
  </div>
</template>