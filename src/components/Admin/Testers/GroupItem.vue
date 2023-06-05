<script setup lang="ts">
import {
  NListItem,
  NButton,
  NIcon,
  NSpin,
  NPopover,
  useMessage,
  useDialog
} from 'naive-ui'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { DeleteFilled } from '@vicons/material'
import type { IGroupView } from '@/interfaces'
import { PersonFilled } from '@vicons/material'
import { useGroupStore } from '@/stores/Admin/groupStore'

const store = useGroupStore()

const props = defineProps({
  group: {
    type: Object as () => IGroupView,
    required: true
  }
})

const DLG = useDialog()
const MSG = useMessage()

const groupIsDeleting: Ref<boolean> = ref(false)

function selectGroup(): void {
  store.selectGroup(props.group.groupUUID)
}

function deleteGroup(): void {
  var contetnt = 'Are you sure you want to delete this group and all of its data?'
  DLG.warning({
    title: 'Confirm',
    content: contetnt,
    positiveText: 'Delete',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      try {
        groupIsDeleting.value = true
        await store.deleteGroup(props.group.groupUUID)
        MSG.success('Group deleted successfully')
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
  <div @click="selectGroup">
    <n-spin :show="groupIsDeleting">
      <n-list-item>
        <div>
          <span>{{ group.groupName }}</span>
          <n-popover placement="right-start" trigger="hover">
            <template #trigger>
              <span style="color: var(--gray-3); margin-left: 0.5rem;">
                {{ group.groupTestersCount }}
                <n-icon size="medium">
                  <PersonFilled style="vertical-align: bottom !important;" />
                </n-icon>
              </span>
            </template>
            <div class="large-text">
              <div>{{ group.groupTestersCount }} named testers</div>
            </div>
          </n-popover>
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
  color: var(--gray-2);
}

.btn-course-action {
  color: var(--gray-3);
  margin-left: 0.5rem;
}

.n-list-item:hover .btn-course-action:hover {
  color: var(--gray-1);
}</style>
