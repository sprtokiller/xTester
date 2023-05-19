<script setup lang="ts">
import { inject, h, ref, watchEffect, computed, onMounted } from 'vue'
import { useMessage, NButton, NIcon, NH3, NDataTable, NSpin } from 'naive-ui'
import { ArrowBackFilled, RemoveRedEyeFilled, AddRound } from '@vicons/material'
import { useRouter } from 'vue-router'

import { useApi } from '@/services/api'
import type { ICourse } from '@/interfaces'

const router = useRouter()
const MSG = useMessage()
const API = useApi()

const loading = ref(true)
const courses = ref([] as ICourse[])

// define props
const props = defineProps({
  courseUUID: {
    type: String,
    required: false
  }
})

onMounted(async () => {
  await fetchCourses()
})

watchEffect(() => {
  //TODO: fetch list of courses (name + hash) on Mount
  //fe
})


function fetchCourses() {
  // fetch courses from the API
  loading.value = true
  API.getCourseList()
    .then((newCourses) => {
      courses.value = newCourses
    })
    .catch((err) => {
      MSG.error(err.message)
    })
    .finally(() => {
      loading.value = false
    })
}

function handleBack() {
  router.back()
}

</script>

<template>
  <!-- Loading state -->
  <div v-if="loading">
    <div class="d-flex align-items-center">
      <n-button size="large" @click="handleBack" quaternary circle>
        <template #icon>
          <n-icon class="icon-no-align">
            <ArrowBackFilled />
          </n-icon>
        </template>
      </n-button>
      <n-h3 class="course-name">Loading...</n-h3>
    </div>
    <n-spin :show="loading" class="w-100" style="min-height: 200px" />
  </div>

  <!-- Loaded state -->
  <div v-else>

  </div>
</template>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 0.8rem;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.course-name {
  margin: 0 0 0 0.8rem;
}

.button-add-test {
  margin-left: auto;
  padding-left: 12px;
}
</style>
