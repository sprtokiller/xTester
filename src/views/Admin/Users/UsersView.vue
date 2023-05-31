<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NH2, NScrollbar,useMessage } from 'naive-ui'
import { useApi } from '@/services/api'
import type { IGroupView, ITester } from '@/interfaces'

import UserList from '@/components/Admin/Users/UserList.vue'
import GroupList from '@/components/Admin/Users/GroupList.vue'
import AssignUsersModal from '@/components/Admin/Users/AssignUsersModal.vue'

const MSG = useMessage()
const API = useApi()

const loading = ref(true)
const groups = ref([] as IGroupView[])
const testers = ref([] as ITester[])

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

const modalGroupUUID = ref('')

function selectGroup(groupUUID: string) {
  modalGroupUUID.value = groupUUID
}

function closeModal() {
  modalGroupUUID.value = ''
}


</script>

<template>
  <div class="d-flex">
    <n-h2>User and group management</n-h2>
  </div>
  <!-- two columns -->
  <NScrollbar>
    <div class="row">
      <!-- left column -->
      <div class="col-6">
        <UserList />
      </div>
      <!-- right column -->
      <div class="col-6">
        <GroupList @selectGroup="selectGroup"/>
      </div>
    </div>
  </NScrollbar>
  <AssignUsersModal :users="[]" :groupUUID="modalGroupUUID" @closeModal="closeModal"/>
</template>
