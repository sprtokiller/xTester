<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMessage, NH3, NCard, NTable } from 'naive-ui'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import type { ITestDetail } from '@/interfaces'
import { useApi } from '@/services/api'

const MSG = useMessage()
const API = useApi()
const BASE = 'http://localhost/course/'
const loading = ref(true)
const test = ref({} as ITestDetail)

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
    <n-table striped>
      <thead>
        <tr>
          <th>Link</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tester in test.testers" :key="tester.testerUUID">
          <td><a class="link" :href="BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.testerUUID)">{{BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.testerUUID)}}</a></td>
          <td>{{ tester.firstname }}</td>
          <td>{{ tester.lastname }}</td>
          <td>{{ tester.email }}</td>
        </tr>
        <tr v-for="tester in test.anonymousTesters" :key="tester.anonymousTesterUUID">
          <td :colspan="4"><a class="link" :href="BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.anonymousTesterUUID)">{{BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.anonymousTesterUUID)}}</a></td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
  <!-- <n-card style="margin-bottom: 0.75rem">
    <pre>{{ JSON.stringify(test, null, 2) }}</pre>
  </n-card> -->
  <!-- <TestModules :modules="test.modules ?? []" /> -->
</template>

<style scoped>
a.link {
  color: var(--green-1);
}

a.link:hover{
  color: var(--green-2);
}
</style>
