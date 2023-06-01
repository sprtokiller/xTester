<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useMessage, NCard, NH4, NSpin, NList, NEmpty, NInput, NPagination } from 'naive-ui'
import GroupItem from '@/components/Admin/Testers/GroupItem.vue'
import AddGroupButton from '@/components/Admin/Testers/AddGroupButton.vue'
import type { IGroupView } from '@/interfaces'
import { useGroupStore } from '@/stores/Admin/groupStore'

const PER_PAGE = 10

const store = useGroupStore()
const MSG = useMessage()

const page: Ref<number> = ref(1)
const loading: Ref<boolean> = ref(true)
const searchValue: Ref<string> = ref('')

onMounted(async () => {
  try {
    loading.value = true
    await store.fetchGroups()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

const pageCount: ComputedRef<number> = computed(() => {
  return Math.ceil(filteredGroups.value.length / PER_PAGE)
})

const shownGroups: ComputedRef<IGroupView[]> = computed(() => {
  return filteredGroups.value.slice((page.value - 1) * PER_PAGE, page.value * PER_PAGE)
})

const filteredGroups: ComputedRef<IGroupView[]> = computed(() => {
  return store.groups.filter((group) => {
    if (searchValue.value === '') return true

    const terms = searchValue.value.toLowerCase().split(' ').filter((term) => term !== '')

    for (const term of terms) {
      if (!((group.groupName ?? '').toLowerCase().includes(term))) { return false }
    }

    return true
  })
})

</script>

<template>
  <div style="padding-bottom: 0.75rem; padding-top: 0.75rem;">
    <n-card embedded style="min-height: 200px">
      <div class="d-flex">
        <n-h4>Group list</n-h4>
      </div>
      <div class="d-flex" style="margin-bottom: 0.5rem;">
        <n-input size="medium" placeholder="Search" v-model:value="searchValue" />
        <AddGroupButton />
      </div>

      <n-spin :show="loading" style="min-height: 5rem">
        <n-list hoverable clickable style="background-color: transparent">
          <!-- add a TesterItem for each tester -->
          <GroupItem v-for="group in shownGroups" :key="group.groupUUID"
            :group="group" />
          <n-pagination v-if="pageCount > 1 " v-model:page="page" :page-count="pageCount" style="margin-top: 0.5rem" />
        </n-list>
        <n-empty style="margin-top: 1rem" description="No groups found!" v-if="filteredGroups.length === 0 && !loading && !store.isEmpty" />
        <n-empty style="margin-top: 1rem" description="No groups. Only groups can be assigned to course tests!" v-if="!loading && store.isEmpty" />
      </n-spin>
    </n-card>
  </div>
</template>
