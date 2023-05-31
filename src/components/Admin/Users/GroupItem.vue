<script setup lang="ts">
import {
  NListItem,
  NButton,
  NIcon,
  NSpin,
  useMessage,
  useDialog,
  useThemeVars
} from 'naive-ui'
import { ref } from 'vue'
import { useApi } from '@/services/api'
import { DeleteFilled } from '@vicons/material'
import type { IGroupView } from '@/interfaces'

const props = defineProps({
  group: {
    type: Object as () => IGroupView,
    required: true
  }
})

const DLG = useDialog()
const MSG = useMessage()
const API = useApi()

const groupIsDeleting = ref(false)

const emit = defineEmits(['deleteGroup'])

function deleteGroup() {
  var contetnt = 'Are you sure you want to delete this group and all of its data?'
  DLG.warning({
    title: 'Confirm',
    content: contetnt,
    positiveText: 'Delete',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      try {
        groupIsDeleting.value = true
        await API.deleteGroup(props.group.groupUUID)
        MSG.success('Group deleted successfully')
        emit('deleteGroup', props.group.groupUUID)
      } catch (err) {
        MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        groupIsDeleting.value = false
      }
    }
  })
}
</script>

<template>
  <div :style="{'--gray-1': useThemeVars().value.textColor2, '--gray-2': useThemeVars().value.textColor3, '--gray-3': useThemeVars().value.textColorDisabled}">
    <n-spin :show="groupIsDeleting" >
      <n-list-item>
        <div>
          <span>{{ group.groupName }}</span>&nbsp;
          <span style="color: var(--gray-3);">{{ group.groupUUID }}</span>
        </div>
      <template #suffix>
          <n-button @click.stop="deleteGroup" class="btn-course-action" size="small" quaternary circle type="error">
            <template #icon>
              <n-icon class="icon-no-align">
                <DeleteFilled />
              </n-icon>
            </template>
          </n-button>
      </template>
    </n-list-item>
  </n-spin>
</div>
</template>

<style scoped>
.n-list-item {
  padding: 0.2rem 0.2rem 0.2rem 0.5rem !important;
}
.n-list-item:hover .btn-course-action {
  color: var(--gray-2);  /* textColor 3 */
}
.btn-course-action {
  color: var(--gray-3);  /* textColor Disabled */
  margin-left: 0.5rem;
}
.n-list-item:hover .btn-course-action:hover {
  color: var(--gray-1);
}
</style>
