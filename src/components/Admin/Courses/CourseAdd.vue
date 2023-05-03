<script lang="ts">

import { inject } from 'vue'
import { useMessage, NH3, NButton, NCard, NDescriptions, NDescriptionsItem } from 'naive-ui';
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
  mounted() {

  },
  data() {
    return {
      loading: true,
    }
  },
  components: {
    NButton, NH3, NCard, NDescriptions, NDescriptionsItem
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

  },
  methods: {

  },
}
</script>


<template>
  <n-h3>Add a new course...</n-h3>
  <n-card  style="max-width: 50rem; margin-left: auto; margin-right: auto; margin-top: 5%;">
    <n-descriptions title="Details" label-placement="left" bordered size="small">
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
      <n-button ghost>Cancel</n-button>
      <n-button type="primary">Add</n-button>
    </template>
  </n-card>
</template>

<style scoped></style>