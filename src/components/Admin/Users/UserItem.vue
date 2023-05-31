<script setup lang="ts">
import {
  NListItem,
  NButton,
  NIcon,
  NSpin,
  useMessage,
  useDialog
} from 'naive-ui'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { DeleteFilled } from '@vicons/material'
import type { ITester } from '@/interfaces'
import { useTesterStore } from '@/stores/Admin/testerStore'

const store = useTesterStore()

const props = defineProps({
  tester: {
    type: Object as () => ITester,
    required: true
  }
})

const DLG = useDialog()
const MSG = useMessage()

const testerIsDeleting: Ref<boolean> = ref(false)

function deleteTester(): void {
  var contetnt = 'Are you sure you want to delete this tester and all of its data?'
  DLG.warning({
    title: 'Confirm',
    content: contetnt,
    positiveText: 'Delete',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      try {
        testerIsDeleting.value = true
        await store.deleteTester(props.tester.testerUUID)
        MSG.success('Tester deleted successfully')
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
  <n-spin :show="testerIsDeleting">
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
</template>

<style scoped>
.n-list-item {
  padding: 0.2rem 0.2rem 0.2rem 0.5rem !important;
}

.n-list-item:hover .btn-course-action {
  color: var(--gray-2);
}

.btn-course-action {
  color: var(--gray-3);
  margin-left: 0.5rem;
}

.n-list-item:hover .btn-course-action:hover {
  color: var(--gray-1);
}</style>
