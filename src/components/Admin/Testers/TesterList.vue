<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useMessage, NCard, NH4, NSpin, NList, NEmpty, NInput, NPagination } from 'naive-ui'
import TesterItem from '@/components/Admin/Testers/TesterItem.vue'
import AddTesterButton from '@/components/Admin/Testers/AddTesterButton.vue'
import type { ITester } from '@/interfaces'
import { useTesterStore } from '@/stores/Admin/testerStore'

const PER_PAGE = 10

const store = useTesterStore()
const MSG = useMessage()

const page: Ref<number> = ref(1)
const loading: Ref<boolean> = ref(true)
const searchValue: Ref<string> = ref('')

onMounted(async () => {
  try {
    loading.value = true
    await store.fetchTesters()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

const pageCount: ComputedRef<number> = computed(() => {
  return Math.ceil(filteredTesters.value.length / PER_PAGE)
})

const shownTesters: ComputedRef<ITester[]> = computed(() => {
  return filteredTesters.value.slice((page.value - 1) * PER_PAGE, page.value * PER_PAGE)
})

const filteredTesters: ComputedRef<ITester[]> = computed(() => {
  return store.testers.filter((tester) => {
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
        <n-h4>Tester list</n-h4>
      </div>
      <div class="d-flex" style="margin-bottom: 0.5rem;">
        <n-input size="medium" placeholder="Search" v-model:value="searchValue" />
        <AddTesterButton />
      </div>

      <n-spin :show="loading" style="min-height: 5rem">
        <n-list hoverable style="background-color: transparent">
          <!-- add a TesterItem for each tester -->
          <TesterItem v-for="tester in shownTesters" :key="tester.testerUUID"
            :tester="tester" />
          <n-pagination v-if="pageCount > 1 " v-model:page="page" :page-count="pageCount" style="margin-top: 0.5rem" />
        </n-list>
        <n-empty style="margin-top: 1rem" description="No testers found!" v-if="filteredTesters.length === 0 && !loading && !store.isEmpty" />
        <n-empty style="margin-top: 1rem" description="No testers. Add someone to test your courses!" v-if="!loading && store.isEmpty" />
      </n-spin>
    </n-card>
  </div>
</template>
