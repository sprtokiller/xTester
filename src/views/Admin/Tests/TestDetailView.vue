<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMessage, NDescriptions, NDescriptionsItem, NH3, NCard, NTable, NButton, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import type { ITestDetail } from '@/interfaces'
import { useApi } from '@/services/api'
import { CheckCircleFilled } from '@vicons/material'

const MSG = useMessage()
const API = useApi()
const BASE = 'http://localhost/course/'
const loading = ref(true)
const test = ref({} as ITestDetail)
const router = useRouter()

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

function handleViewResults() {
  router.push({ name: 'testingResult', params: { testUUID: props.testUUID } })
}

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
  <div v-else>
    <div class="d-flex align-items-center" style="margin-bottom: 1rem">
      <BackButton />
      <n-h3 class="h3-item-name">{{ test.name }}</n-h3>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <n-card style="margin-bottom: 0.75rem">
          <n-descriptions>
            <n-descriptions-item label="Test started at:">{{ test.startAt ? new
              Date((test.startAt).toString()).toLocaleString() : "Unknown" }}</n-descriptions-item>
            <n-descriptions-item label="Test ends at:">{{ test.endAt ? new Date((test.endAt).toString()).toLocaleString()
              : "When ended manually" }}</n-descriptions-item>
          </n-descriptions>
        </n-card>
      </div>
      <div class="col-6 d-flex">
        <n-button size="large" @click="handleViewResults" type="primary" secondary class="button-view-results">View Results
          <template #icon>
            <n-icon class="icon-no-align">
              <CheckCircleFilled />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <n-card style="margin-bottom: 0.75rem">
      <n-table striped>
        <thead>
          <tr>
            <th>Test link</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tester in test.testers" :key="tester.testerUUID">
            <td><a class="link"
                :href="BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.testerUUID)">{{ BASE +
                  encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.testerUUID) }}</a></td>
            <td>{{ tester.firstname }}</td>
            <td>{{ tester.lastname }}</td>
            <td>{{ tester.email }}</td>
          </tr>
          <tr v-for="tester in test.anonymousTesters" :key="tester.anonymousTesterUUID">
            <td :colspan="4"><a class="link"
                :href="BASE + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.anonymousTesterUUID)">{{ BASE
                  + encodeURIComponent(test.testUUID) + '/' + encodeURIComponent(tester.anonymousTesterUUID) }}</a></td>
          </tr>
        </tbody>
      </n-table>
    </n-card>
  </div>
</template>

<style scoped>
a.link {
  color: var(--green-1);
}

a.link:hover {
  color: var(--green-2);
}

.button-view-results {
  margin-left: auto;
}
</style>