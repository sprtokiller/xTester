<script lang="ts">

import { inject } from 'vue'
import { useMessage } from 'naive-ui';
import type { API } from '@/services/api';
import type { CourseDetail } from '@/interfaces';

export default {
  setup() {
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
    getURL(): string | undefined {
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
  Course Id: {{ courseId }}
  <div v-if="loading">Loading...</div>
  <div v-else>
    <div class="row">
      <div class="col-8">
        This column is twice as wide as the other column.
      </div>
      <div class="col-4">
        <div class="iframe-container">
          <iframe allowfullscreen="true" class="player" :src="getURL" scrolling="no" style="width: 100%; height: 100%;"></iframe>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
  .iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>