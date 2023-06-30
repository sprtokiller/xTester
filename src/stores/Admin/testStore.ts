import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useApi } from '@/services/api'
import type { ITestView } from '@/interfaces'

export const useTestStore = defineStore('testStore', () => {
  const API = useApi()

  // state
  const tests: Ref<ITestView[]> = ref([])

  // actions

  async function lockTest(testUUID: string) {
    tests.value = tests.value.map((test) => {
      if (test.testUUID === testUUID) {
        test.endType = 'WIP'
      }
      return test
    })
    await API.lockTest(testUUID)
    tests.value = tests.value.map((test) => {
      if (test.testUUID === testUUID) {
        test.endAt = new Date()
        test.endType = 'MANUAL'
      }
      return test
    })
  }

  async function fetchTests() {
    tests.value = await API.getTestList()
  }

  return {
    tests,
    lockTest,
    fetchTests
  }
})
