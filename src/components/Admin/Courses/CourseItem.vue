<script setup lang="ts">
import {
  NListItem,
  NThing,
  NSpace,
  NTag,
  NButton,
  NPopover,
  NIcon,
  NInput,
  NSpin,
  useMessage,
  useDialog,
  useThemeVars
} from 'naive-ui'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/services/api'
import { InfoOutlined, EditFilled, DeleteFilled } from '@vicons/material'
import type { ICourseView } from '@/interfaces'
import { clickOutside, focus } from '@/directives'

const vFocus = focus;
const vClickOutside = clickOutside;

const props = defineProps({

  editUUID: {
    type: String,
    required: false
  },
  course: {
    type: Object as () => ICourseView,
    required: true
  }
})
const router = useRouter()
const DLG = useDialog()
const MSG = useMessage()
const API = useApi()

const courseNameInput = ref(props.course.name)
const inputIsSaving = ref(false)
const courseIsDeleting = ref(false)

const emit = defineEmits(['editSelect', 'deleteCourse', 'renameCourse'])

function openDetail() {
  router.push({ name: 'courseDetail', params: { courseUUID: props.course.courseUUID } })
}
function editCourse() {
  emit('editSelect', props.course.courseUUID)
}
function handleClickOutside() {
  // if it is in edit mode, emit an event to the parent component
  if (inEditMode.value) {
    renameCourse()
  }
}
function deleteCourse() {
  var contetnt = 'Are you sure you want to delete this course?'
  const len = props.course.tests.length
  if (len) {
    contetnt += ` This will also delete ${len} test${len == 1 ? '' : 's'}.`
  }
  DLG.warning({
    title: 'Confirm',
    content: contetnt,
    positiveText: 'Delete',
    negativeText: 'Cancel',
    onPositiveClick: async () => {
      try {
        courseIsDeleting.value = true
        await API.deleteCourse(props.course.courseUUID)
        MSG.success('Course deleted successfully')
        emit('deleteCourse', props.course.courseUUID)
      } catch (err) {
        MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        courseIsDeleting.value = false
      }
    }
  })
}
function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    renameCourse()
  } else if (event.key === 'Escape') {
    // revoke to original value, then exit edit mode
    courseNameInput.value = props.course.name
    emit('editSelect', '')
  }
}
async function renameCourse() {
  // save, then exit edit mode
  courseNameInput.value = courseNameInput.value.trim()
  // if the name is not changed, exit edit mode
  if (courseNameInput.value === props.course.name) {
    emit('editSelect', '')
    return
  }

  try {
    inputIsSaving.value = true
    await API.renameCourse(props.course.courseUUID, courseNameInput.value)
    emit('renameCourse', props.course.courseUUID, courseNameInput.value)
    MSG.success('Course name changed successfully')
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    inputIsSaving.value = false
    emit('editSelect', '')
  }
}


const inEditMode = computed(() => {
  return props.editUUID === props.course.courseUUID
})

const plannedTests = computed(() => {
  const currentTime = new Date()
  return props.course.tests.filter((t) => t.startAt && new Date(t.startAt) > currentTime).length
})

const activeTests = computed(() => {
  const currentTime = new Date()
  return props.course.tests.filter(
    (t) =>
      t.startAt &&
      new Date(t.startAt) <= currentTime &&
      (!t.endAt || new Date(t.endAt) > currentTime)
  ).length
})

const completedTests = computed(() => {
  const currentTime = new Date()
  return props.course.tests.filter((t) => t.endAt && new Date(t.endAt) <= currentTime).length
})

const bgImageStyle = computed(() => {
  return {
    'background-image': `url('${imageURL.value}')`
  }
})

const imageURL = computed(() => {
  switch (props.course.contentType) {
    case 'RISE':
      return '/rise.svg'
    case 'STORYLINE':
      return '/storyline.svg'
    case 'STUDIO':
      return '/studio.svg'
    case 'OTHER':
    default:
      return '/unknown.svg'
  }
})

</script>

<template>
  <div :style="{'--gray-1': useThemeVars().value.textColor2, '--gray-2': useThemeVars().value.textColor3, '--gray-3': useThemeVars().value.textColorDisabled}">

    <n-spin :show="courseIsDeleting">
      <n-list-item @click="openDetail">
        <template #prefix>
        <div class="course-avatar" :style="bgImageStyle"></div>
      </template>

      <n-thing>
        <template #header>
          <n-input v-if="inEditMode" v-focus ref="courseNameInputRef" class="course-name-input" placeholder="Course name"
            v-model:value="courseNameInput" @click.stop autosize :passively-activated="true" :loading="inputIsSaving"
            :disabled="inputIsSaving" @keyup="handleKeyUp" />
          <div v-else>
            {{ course.name }}
            <n-popover placement="right-start" trigger="hover">
              <template #trigger>
                <n-icon size="tiny" depth="3" style="margin-left: 0.3rem">
                  <InfoOutlined />
                </n-icon>
              </template>
              <div class="large-text">
                <div>Author: {{ course.author }}</div>
                <div>Version {{ course.version }}</div>
              </div>
            </n-popover>
          </div>
        </template>
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag class="tag-chip" :bordered="false" type="default" size="small"
            v-if="!(activeTests || completedTests || plannedTests)">
            No tests
          </n-tag>
            <n-tag class="tag-chip" :bordered="false" type="warning" size="small" v-if="plannedTests">
              Planned: {{ plannedTests }}
            </n-tag>
            <n-tag class="tag-chip" :bordered="false" type="info" size="small" v-if="activeTests">
              Active: {{ activeTests }}
            </n-tag>
            <n-tag class="tag-chip" :bordered="false" type="success" size="small" v-if="completedTests">
              Completed: {{ completedTests }}
            </n-tag>
          </n-space>
        </template>
      </n-thing>
      
      <template #suffix>
        <div style="white-space: nowrap">
          <n-button @click.stop="editCourse" v-click-outside="handleClickOutside" class="btn-course-action" size="small"
          quaternary circle type="success">
          <template #icon>
              <n-icon class="icon-no-align">
                <EditFilled />
              </n-icon>
            </template>
          </n-button>
          
          <n-button @click.stop="deleteCourse" class="btn-course-action" size="small" quaternary circle type="error">
            <template #icon>
              <n-icon class="icon-no-align">
                <DeleteFilled />
              </n-icon>
            </template>
          </n-button>
        </div>
      </template>
    </n-list-item>
  </n-spin>
</div>
</template>

<style scoped>

.tag-chip {
  cursor: pointer;
}

.course-avatar {
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: center;
}

.course-name-input {
  width: 100%;
  font-size: 1rem;
  color: var(--gray-1); /* textColor 2 */
  border: none;
  background-color: white;
  padding: 0;
  margin: 0;
  min-width: 10rem;
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
