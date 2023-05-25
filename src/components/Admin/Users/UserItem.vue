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
import type { ITester } from '@/interfaces'

const props = defineProps({
  tester: {
    type: Object as () => ITester,
    required: true
  }
})

const DLG = useDialog()
const MSG = useMessage()
const API = useApi()

const testerIsDeleting = ref(false)

const emit = defineEmits(['deleteTester'])

function deleteTester() {
  var contetnt = 'Are you sure you want to delete this tester and all of its data?'
  DLG.warning({
    title: 'Confirm',
    content: contetnt,
    positiveText: 'Delete',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      try {
        testerIsDeleting.value = true
        await API.deleteTester(props.tester.testerUUID)
        MSG.success('Tester deleted successfully')
        emit('deleteTester', props.tester.testerUUID)
      } catch (err) {
        MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        testerIsDeleting.value = false
      }
    }
  })
}
</script>

<template>
  <div :style="{'--gray-1': useThemeVars().value.textColor2, '--gray-2': useThemeVars().value.textColor3, '--gray-3': useThemeVars().value.textColorDisabled}">
    <n-spin :show="testerIsDeleting" >
      <n-list-item>
        <div>
          <span>{{ tester.firstname }} {{ tester.lastname }}</span>&nbsp;
          <span style="color: var(--gray-3);">{{ tester.email }}</span>
        </div>
      <template #suffix>
          <n-button @click.stop="deleteTester" class="btn-course-action" size="small" quaternary circle type="error">
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
