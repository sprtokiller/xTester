<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton, NTransfer, NModal, NCard, useMessage, NSpin } from 'naive-ui'
import { useApi } from '@/services/api'
import type { IGroupView, ITester } from '@/interfaces'
import { useGroupStore } from '@/stores/Admin/groupStore'
import { useTesterStore } from '@/stores/Admin/testerStore'

const groupStore = useGroupStore()
const testerStore = useTesterStore()

const MSG = useMessage()
const API = useApi()

const value = ref([])
const uploading = ref(false)

const showModal =  computed(() => {
  return (groupStore.selectedGroupUUID != '')
})

function closeModal() {
  groupStore.selectGroup('')
}

async function saveAssign() {

}

const options = computed(() => {
  return testerStore.testers.map((tester) => {
    return {
      value: tester.testerUUID,
      label: tester.firstname + ' ' + tester.lastname,
    }
  })
})
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card title="Assign testers to group" style="width: 600px" :bordered="false" size="large" role="dialog" aria-modal="true" >
      <n-transfer
      ref="transfer"
      v-model:value="value"
      virtual-scroll
      :options="options"
      source-filterable
    />
      <div class="d-flex justify-content-end align-items-center">
        <n-button @click.stop="closeModal" style="margin-right: 0.5rem" ghost>Cancel</n-button>
        <n-button @click.stop="saveAssign" type="primary">Save</n-button>
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.button-add-group {
  margin-left: 0.75rem;
  padding-left: 12px;
}

.fade-opacity {
  transition: opacity 0.1s ease-in-out;
}
</style>
