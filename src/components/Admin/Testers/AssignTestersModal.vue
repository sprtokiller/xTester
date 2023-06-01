<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import type { Ref, ComputedRef, WritableComputedRef } from 'vue'
import { NButton, NTransfer, NModal, NCard, useMessage, NSpin } from 'naive-ui'
import type { Option } from 'naive-ui/es/transfer/src/interface'
import { useApi } from '@/services/api'
import { useGroupStore } from '@/stores/Admin/groupStore'
import { useTesterStore } from '@/stores/Admin/testerStore'

const groupStore = useGroupStore()
const testerStore = useTesterStore()

const MSG = useMessage()
const API = useApi()

const selected: Ref<any> = ref(["ac085844-27a0-4b3d-af15-8b3cdcc86805"])
const loading: Ref<boolean> = ref(false)

const showModal: WritableComputedRef<boolean> = computed({
  get(): boolean {
    return (groupStore.selectedGroupUUID != '')
  },
  set(newValue: boolean): void {
    if (!newValue) {
      groupStore.selectGroup('')
    }
  },
});

// watch groupStore.selectedGroupUUID and fire a GET request on change
watchEffect(async () => {
  if (groupStore.selectedGroupUUID == '') {
    selected.value = []
    return
  }

  try {
    loading.value = true
    selected.value = await API.getGroupTesterUUIDs(groupStore.selectedGroupUUID)
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
});

function closeModal(): void { showModal.value = false }

async function saveAssign() {
  try {
    loading.value = true
    await API.assignTestersToGroup(groupStore.selectedGroupUUID, selected.value)
    MSG.success('Testers assigned to group')
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
    groupStore.modifySelectedGroupTesterCount(selected.value.length)
    closeModal()
  }
}

const options: ComputedRef<Option[]> = computed(() => {
  return testerStore.testers.map((tester) => {
    return {
      value: tester.testerUUID,
      label: tester.firstname + ' ' + tester.lastname + ' (' + tester.email + ')'
    }
  })
})
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card title="Assign testers to group" style="width: 80vw" :bordered="false" size="large" role="dialog"
      aria-modal="true">
      <n-spin :show="loading && showModal">
        <n-transfer :disabled="loading" v-model:value="selected" virtual-scroll :options="options" source-filterable />
        <div class="d-flex justify-content-end align-items-center" style="margin-top: 1rem">
          <n-button @click.stop="closeModal" style="margin-right: 0.5rem" ghost>Cancel</n-button>
          <n-button @click.stop="saveAssign" type="primary">Save</n-button>
        </div>
      </n-spin>
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
