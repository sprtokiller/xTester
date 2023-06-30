<script setup lang="ts">
import { h, ref, onMounted } from 'vue'
import { NDataTable, useMessage, NButton, NTag, type DataTableColumns } from 'naive-ui'
import { useRouter, type Router } from 'vue-router'
import type { ITestView } from '@/interfaces'
import { RemoveRedEyeFilled, LockFilled } from '@vicons/material'
import { useTestStore } from '@/stores/Admin/testStore'

function getGrayText(text: string) {
  return h(
    'span',
    {
      style: 'color: var(--gray-2)'
    },
    { default: () => text }
  )
}

function getChip(
  type: 'success' | 'error' | 'warning' | 'info' | 'default',
  text: string,
  size: 'tiny' | 'small' | 'medium' | 'large' = 'medium'
) {
  return h(
    NTag,
    {
      bordered: false,
      type: type,
      size: size,
      style: 'margin-right: 6px'
    },
    { default: () => text }
  )
}

const getState = (test: ITestView) => {
  const currentTime = new Date()
  const start = test.startAt ? new Date(test.startAt) : null
  const end = test.endAt ? new Date(test.endAt) : null

  if (!start) return null

  if (start > currentTime) {
    return getChip('warning', 'Planned')
  } else if (!end || end > currentTime) {
    return getChip('info', 'Active')
  } else {
    return getChip('success', 'Completed')
  }
}

// function getModuleName(id: number) {
//   const moduleNames: string[] = [
//     'Unknown',
//     'I/O Test',
//     'I/O Evaluation',
//     'Timed retency',
//     'Feedback',
//     'Live comments'
//   ]
//   // check if id is valid
//   if (id < 0 || id >= moduleNames.length) return moduleNames[0]
//   return moduleNames[id]
// }

// const getModules = (test: ITestView) => {
//   if (!test.modules) return null
//   return test.modules.map((module) => {
//     return getChip('default', getModuleName(module), 'tiny')
//   })
// }

const columns: DataTableColumns<ITestView> = [
  {
    title: 'Test name',
    key: 'name',
    ellipsis: true
  },
  {
    title: 'State',
    key: 'state',
    width: 160,
    render(row) {
      return getState(row)
    }
  },
  {
    title: 'Course',
    key: 'courseView',
    align: 'center',
    width: 80,
    render(row) {
      return h(NButton, {
        circle: true,
        quaternary: true,
        size: 'small',
        class: 'btn-less-visible',
        renderIcon: () => h(RemoveRedEyeFilled),
        onClick: (event) => {
          event.stopPropagation()
          router.push({ name: 'courseDetail', params: { courseUUID: row.courseUUID } })
        }
      })
    }
  },
  {
    title: 'End',
    key: 'endAt',
    width: 200,
    align: 'center',
    render(row) {
      const currentTime = new Date()
      const start = row.startAt ? new Date(row.startAt) : null
      const end = row.endAt ? new Date(row.endAt) : null
      if (!start) return null

      if (start > currentTime) {
        return getGrayText("Not started yet ")
      } else if (!end) {
        // button to end test
        return h(NButton, {
          loading: row.endType === 'WIP',
          disabled: row.endType === 'WIP',
          quaternary: true,
          size: 'small',
          class: 'btn-less-visible',
          renderIcon: () => h(LockFilled),
          onClick: async (event) => {
            event.stopPropagation()
            try {
              await store.lockTest(row.testUUID)
            } catch (err) {
              MSG.error(err instanceof Error ? err.message : 'Unknown error')
            }
          }
        }, { default: () => 'Click to end'}
        )
      } else if (end > currentTime) {
        return getGrayText(end.toLocaleString())
      } else {
        return null
      }
    }
  }
  // {
  //   title: 'Modules',
  //   key: 'modules',
  //   render(test) {
  //     return getModules(test)
  //   }
  // }
  // TODO: Add delete and copy buttons
]

const router: Router = useRouter()
const MSG = useMessage()
const store = useTestStore()

const loading = ref(true)

const rowProps = (test: ITestView) => {
  return {
    style: 'cursor: pointer',
    onClick: () => {
      router.push({ name: 'testingDetail', params: { testUUID: test.testUUID } })
    }
  }
}

onMounted(async () => {
  try {
    loading.value = true
    await store.fetchTests()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <n-data-table
    :columns="columns"
    :data="store.tests"
    :bordered="false"
    :loading="loading"
    :row-props="rowProps"
  />
</template>
