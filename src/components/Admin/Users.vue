<script lang="ts">

import { inject } from 'vue'
import { NSpin, NButton, useMessage, NH2 } from 'naive-ui';
import type { CourseView } from '@/interfaces';
import type { API } from '@/services/api';

export default {
  components: {
    NSpin, NButton, NH2
  },
  setup () {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API }
  },
  mounted() {
    // fetch users and user groups from the API
    this.API.getCourseList().then(courses => {
      this.loading = false;
    }).catch(err => {
      this.loading = false;
      this.MSG.error(err.message);
    });
  },
  data() {
    return {
      loading: true as boolean
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>


<template>
  <div class="container">
    <!-- <CourseDetail v-if="detail" :courseID="detail" @close-detail="closeDetail" @open-detail="showDetail" :key="reloadKey"/>

    <div v-else>
      <n-h2>List of courses</n-h2>
      <n-scrollbar>
        <n-spin :show="loading" style="min-height: 200px;">
          <n-list hoverable clickable>
            <!-/- add a CourseItem for each course -/->
            <CourseItem v-for="course in courses" :course="course" @open-detail="showDetail"/>
          </n-list>
          <n-empty description="No e-learning courses found :(" v-if="!loading && isEmpty">
            <template #extra>
              <n-button size="small">
                Start by adding a course! <!-/- TODO: take me to a tutorial page -/->
              </n-button>
            </template>
          </n-empty>
        </n-spin>
      </n-scrollbar>
    </div> -->
  </div> 
</template>