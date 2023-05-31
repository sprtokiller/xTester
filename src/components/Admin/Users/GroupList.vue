<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMessage, NCard, NH4, NSpin, NList, NEmpty, NInput, NPagination } from 'naive-ui'
import GroupItem from '@/components/Admin/Users/GroupItem.vue'
import AddGroupButton from '@/components/Admin/Users/AddGroupButton.vue'
import type { IGroupView } from '@/interfaces'
import { useApi } from '@/services/api'

const PER_PAGE = 10
const page = ref(1)
const loading = ref(true)
const groups = ref([] as IGroupView[])
const searchValue = ref('')
const MSG = useMessage()
const API = useApi()

onMounted(async () => {
  try {
    loading.value = true
    groups.value = await API.getGroupList()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

function addGroup(group: IGroupView) {
  groups.value.push(group)
}

function deleteGroup(groupUUID: string) {
  // delete the group from the array
  groups.value = groups.value.filter((group) => group.groupUUID !== groupUUID)
}

const isEmpty = computed(() => {
  return groups.value.length === 0
})

const pageCount = computed(() => {
  return Math.ceil(filteredGroups.value.length / PER_PAGE)
})

const shownGroups = computed(() => {
  return filteredGroups.value.slice((page.value - 1) * PER_PAGE, page.value * PER_PAGE)
})

const filteredGroups = computed(() => {
  return groups.value.filter((group) => {
    if (searchValue.value === '') return true

    const terms = searchValue.value.toLowerCase().split(' ').filter((term) => term !== '')

    for (const term of terms) {
      if (!(
        (group.groupName ?? '').toLowerCase().includes(term)
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
        <n-h4>Group list</n-h4>
      </div>
      <div class="d-flex" style="margin-bottom: 0.5rem;">
        <n-input size="medium" placeholder="Search" v-model:value="searchValue" />
        <AddGroupButton @addGroup="addGroup"/>
      </div>

      <n-spin :show="loading" style="min-height: 5rem">
        <n-list hoverable style="background-color: transparent">
          <!-- add a UserItem for each user -->
          <GroupItem v-for="group in shownGroups" :key="group.groupUUID" @deleteGroup="deleteGroup"
            :group="group" />
          <n-pagination v-if="pageCount > 1 " v-model:page="page" :page-count="pageCount" style="margin-top: 0.5rem" />
        </n-list>
        <n-empty style="margin-top: 1rem" description="No groups found!" v-if="filteredGroups.length === 0 && !loading && !isEmpty" />
        <n-empty style="margin-top: 1rem" description="No groups. Only groups can be assigned to course tests!" v-if="!loading && isEmpty" />
      </n-spin>
    </n-card>
  </div>
</template>
