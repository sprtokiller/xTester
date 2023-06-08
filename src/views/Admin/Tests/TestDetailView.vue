<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMessage, NH3, NCard } from 'naive-ui'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import type { ITestView } from '@/interfaces'
import { useApi } from '@/services/api'
import TestModules from '@/components/Admin/Tests/TestModules.vue'

const MSG = useMessage()
const API = useApi()

const loading = ref(true)
const test = ref({} as ITestView)

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
  // fetch test detail from the API
  loading.value = true
  API.getTestDetail(testUUID)
    .then((newTest) => {
      test.value = newTest
    })
    .catch((err) => {
      MSG.error(err.message)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <!-- Loading state -->
  <LoadingHeader v-if="loading" />

  <!-- Loaded state -->
  <div v-else class="d-flex align-items-center" style="margin-bottom: 1rem">
    <BackButton />
    <n-h3 class="h3-item-name">{{ test.name }}</n-h3>
  </div>
  <n-card style="margin-bottom: 0.75rem">
    <pre>{{ JSON.stringify(test, null, 2) }}</pre>
  </n-card>
  <TestModules :modules="test.modules ?? []" />
</template>

<style scoped></style>
