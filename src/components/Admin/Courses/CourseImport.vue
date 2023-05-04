<script lang="ts">

import { inject } from 'vue'
import { useMessage, NH3, NButton, NCard, NDescriptions, NDescriptionsItem, NSpin } from 'naive-ui';
import type { API } from '@/services/api';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const MSG = useMessage();
    const API = inject('API') as API;
    return {
      router, MSG, API
    }
  },
  data() {
    return {
      checking: true,
    }
  },
  components: {
    NButton, NH3, NCard, NDescriptions, NDescriptionsItem, NSpin
  },
  props: {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    courseHash: {
      type: String,
      required: true
    },
    groupHash: {
      type: String,
      required: true
    }
  },
  watch: {
    watchIDs: {
      handler(newIDs) {
        console.log(newIDs)
        this.checkAvailability();
      },
      immediate: true,
      deep: true
    }
  },
  computed: { // we have to use computed to watch for changes in both IDs
    watchIDs() {
      return {
        courseHash: this.courseHash,
        groupHash: this.groupHash
      }
    },
    loadingClass() {
      return {
        'dim-on-loading': this.checking
      }
    }
  },
  methods: {
    checkAvailability() {
      this.checking = true;
      this.API.checkCourseExists(this.courseHash, this.groupHash).then(courseUUID => {
        this.checking = false;
        if (courseUUID) {
          // redirect to course detail
          this.$router.replace({ name: 'courses' })
          this.$router.push({ name: 'courseDetail', params: { courseUUID : courseUUID } });
        }
      }).catch(err => {
        this.checking = false;
        this.MSG.error(err.message);
      });
    }
  }
}
</script>


<template>
  <n-h3>Add a new course...</n-h3>
  <n-spin :show="checking">
    <template #description>
      Checking if course is available...
    </template>
    <n-card style="max-width: 50rem; margin-left: auto; margin-right: auto; margin-top: 5%;">
      <n-descriptions :class="loadingClass" title="Details" label-placement="left" bordered size="small">
        <n-descriptions-item label="Name:">
          {{ name }}
        </n-descriptions-item>
        <n-descriptions-item label="Author:">
          {{ author }}
        </n-descriptions-item>
        <n-descriptions-item label="Version:">
          {{ version }}
        </n-descriptions-item>
        <n-descriptions-item label="Course location:">
          {{ courseHash }}
        </n-descriptions-item>
        <n-descriptions-item label="Course URL:">
          {{ groupHash }}
        </n-descriptions-item>
      </n-descriptions>
      <template #footer>
        <!-- align to right -->
        <div class="d-flex justify-content-end">
          <n-button style="margin-right: .5rem;" ghost>Cancel</n-button>
          <n-button type="primary">Add</n-button>
        </div>
      </template>
    </n-card>
  </n-spin>
</template>

<style scoped>
.dim-on-loading {
  opacity: .3;
}
</style>