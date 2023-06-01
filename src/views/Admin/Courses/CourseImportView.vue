<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMessage, NH3, NButton, NCard, NDescriptions, NDescriptionsItem, NSpin } from 'naive-ui'
import { useApi } from '@/services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const MSG = useMessage()
const API = useApi()

const checking = ref(true)
const uploading = ref(false)
const error = ref(false)

// define props
const props = defineProps({
  name: { type: String, required: true },
  author: { type: String, required: true },
  version: { type: String, required: true },
  courseLocation: { type: String, required: true },
  groupHash: { type: String, required: true }
})

// define reactive data
watchEffect(async () => {
  checkAvailability(props.courseLocation, props.groupHash)
})

async function checkAvailability(newCourseLocation: String, newGroupHash: String) {
  // if any of the props is empty, show error
  if (!newCourseLocation || !newGroupHash || !props.name || !props.author || !props.version) {
    MSG.error('Unsupported content type')
    checking.value = false
    error.value = true
    return
  }

  error.value = false
  try {
    checking.value = true
    const courseUUID = await API.checkCourseExists(props.courseLocation, props.groupHash)
    if (courseUUID) {
      // redirect to course detail
      router.push({ name: 'courseDetail', params: { courseUUID: courseUUID } })
    }
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    checking.value = false
  }
}

function loadingClass() {
  return {
    'dim-on-loading': checking.value || uploading.value || error.value
  }
}


function cancel() {
  router.push({ name: 'courseList' })
}
async function addCourse() {
  try {
    uploading.value = true
    const courseUUID = await API.addCourse(
      props.name,
      props.author,
      parseInt(props.version),
      props.groupHash,
      props.courseLocation
    )
    router.push({ name: 'courseDetail', params: { courseUUID } })
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    uploading.value = false
  }
}

</script>

<template>
  <n-h3>Add a new course...</n-h3>
  <n-spin :show="checking || uploading">
    <template #description>
      {{ uploading ? 'Uploading the course...' : 'Checking if course is available...' }}
    </template>
    <n-card style="max-width: 50rem; margin-left: auto; margin-right: auto; margin-top: 5%">
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
          {{ courseLocation }}
        </n-descriptions-item>
        <n-descriptions-item label="Course URL:">
          {{ groupHash }}
        </n-descriptions-item>
      </n-descriptions>
      <template #footer>
        <!-- align to right -->
        <div class="d-flex justify-content-end">
          <n-button @click="cancel" style="margin-right: 0.5rem" ghost :disabled="error">Cancel</n-button>
          <n-button @click="addCourse" type="primary" :disabled="error">Add</n-button>
        </div>
      </template>
    </n-card>
  </n-spin>
</template>

<style scoped>
.dim-on-loading {
  opacity: 0.3;
}
</style>
