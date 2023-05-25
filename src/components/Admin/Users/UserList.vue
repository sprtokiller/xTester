<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMessage, NCard, NH4, NSpin, NList, NEmpty, NInput } from 'naive-ui'
import UserItem from '@/components/Admin/Users/UserItem.vue'
import AddTesterButton from '@/components/Admin/Users/AddTesterButton.vue'
import type { ITester } from '@/interfaces'
import { useApi } from '@/services/api'

const loading = ref(true)
const testers = ref([] as ITester[])
const searchValue = ref('')
const MSG = useMessage()
const API = useApi()

onMounted(async () => {
  try {
    loading.value = true
    testers.value = await API.getTesterList()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

function addTester(tester: ITester) {
  testers.value.push(tester)
}

function deleteTester(testerUUID: string) {
  // delete the course from the array
  testers.value = testers.value.filter((tester) => tester.testerUUID !== testerUUID)
}

const isEmpty = computed(() => {
  return testers.value.length === 0
})

const filteredTesters = computed(() => {
  return testers.value.filter((tester) => {
    if (searchValue.value === '') return true

    const terms = searchValue.value.toLowerCase().split(' ').filter((term) => term !== '')

    for (const term of terms) {
      if (!(
        (tester.firstname ?? '').toLowerCase().includes(term) ||
        (tester.lastname ?? '').toLowerCase().includes(term) ||
        (tester.email ?? '').toLowerCase().includes(term)
      )) {
        return false
      }
    }

    return true
  })
})


</script>

<template>
  <div style="padding-bottom: 0.75rem; padding-top: 0.75rem;">
    <n-card embedded style="min-height: 200px">
      <div class="d-flex">
        <n-h4>User list</n-h4>
      </div>
      <div class="d-flex" style="margin-bottom: 0.5rem;">
        <n-input size="medium" placeholder="Search" v-model:value="searchValue" />
        <AddTesterButton @addTester="addTester"/>
      </div>

      <n-spin :show="loading" style="min-height: 5rem">
        <n-list hoverable style="background-color: transparent">
          <!-- add a UserItem for each user -->
          <UserItem v-for="tester in filteredTesters" :key="tester.testerUUID" @deleteTester="deleteTester"
            :tester="tester" />
        </n-list>
        <n-empty style="margin-top: 1rem" description="No users found!" v-if="filteredTesters.length === 0 && !loading && !isEmpty" />
        <n-empty style="margin-top: 1rem" description="No users. Add someone to test your courses!" v-if="!loading && isEmpty" />
      </n-spin>
    </n-card>
  </div>
</template>
