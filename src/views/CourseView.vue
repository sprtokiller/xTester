<script setup lang="ts">
import CourseFrame from '@/components/Admin/CourseFrame.vue'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import { useMessage, NSpin } from 'naive-ui'
import { useApi } from '@/services/api'

const MSG = useMessage()
const API = useApi()

const loading: Ref<boolean> = ref(true)
const courseLocation: Ref<string> = ref('')

const props = defineProps({
  testUUID: {
    type: String,
    required: true
  },
  testerUUID: {
    type: String,
    required: true
  }
})

watchEffect(() => {
  fetchLocation(props.testUUID)
})

async function fetchLocation(testUUID: string) {
  // fetch course location from the API
  try {
    loading.value = true
    const newLocation = await API.getCourseLocation(testUUID)
    courseLocation.value = newLocation
    await API.sendStartToLRS(props.testUUID, props.testerUUID, newLocation)
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main style="height: 100vh;">
    <n-spin v-if="loading" style="width: 100%; min-height: 50vh;"></n-spin>
    <CourseFrame v-else :key="courseLocation" :testUUID="props.testUUID" :testerUUID="props.testerUUID" :courseURL="courseLocation"/>
  </main>
</template>
