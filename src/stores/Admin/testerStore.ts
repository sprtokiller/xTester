import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { useApi } from '@/services/api'

import type { ITester } from '@/interfaces'

export const useTesterStore = defineStore('testerStore', () => {
  const API = useApi()

  // state
  const testers: Ref<ITester[]> = ref([])

  // getters
  const isEmpty: ComputedRef<boolean> = computed(() => {
    return testers.value.length === 0
  })

  // actions
  async function addTester(firstname: string, lastname: string, email: string) {
    const testerUUID = await API.addTester(firstname, lastname, email)

    const tester: ITester = {
      firstname: firstname != '' ? firstname : undefined,
      lastname: lastname != '' ? lastname : undefined,
      email: email != '' ? email : undefined,
      testerUUID: testerUUID
    }

    testers.value.push(tester)
  }

  async function deleteTester(testerUUID: string) {
    await API.deleteTester(testerUUID)
    testers.value = testers.value.filter((tester) => tester.testerUUID !== testerUUID)
  }

  async function fetchTesters() {
    testers.value = await API.getTesterList()
  }

  return {
    testers,
    isEmpty,
    addTester,
    deleteTester,
    fetchTesters
  }
})
