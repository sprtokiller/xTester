<script setup lang="ts">
import { inject, ref, watchEffect } from 'vue'
import { useMessage, NButton, NIcon, NH3 } from 'naive-ui'
import { ArrowBackFilled } from '@vicons/material'
import { useRouter } from 'vue-router'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'

import type { API } from '@/services/api'

const router = useRouter()
const MSG = useMessage()
const myAPI = inject('API') as API

const loading = ref(true)
// define props
const props = defineProps({
  testUUID: {
    type: String,
    required: true
  }
})

// define reactive data
watchEffect(() => {
  fetchDetail(props.testUUID)
})

function fetchDetail(testUUID: string) {
  // fetch courses from the API
  loading.value = true
  console.log(testUUID)
  // this.API.getCourseDetail(testUUID).then(course => { //TODO: implement
  //   this.loading = false;
  // }).catch(err => {
  //   this.loading = false;
  //   this.MSG.error(err.message);
  // });
}
function handleBack() {
  // print the router history
  router.back()
}
</script>

<template>
  <!-- Loading state -->
  <LoadingHeader v-if="loading" />

  <!-- Loaded state -->
  <div v-else class="d-flex align-items-center">
    <n-button size="large" @click="handleBack" quaternary circle>
      <template #icon>
        <n-icon class="icon-no-align">
          <ArrowBackFilled />
        </n-icon>
      </template>
    </n-button>
    <n-h3 class="h3-item-name">{{ 'Sem jmeno testu' }}</n-h3>
  </div>
</template>

<style scoped></style>
