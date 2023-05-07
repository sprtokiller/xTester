<script lang="ts">
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
  useDialog
} from 'naive-ui'
import { inject } from 'vue'
import type { API } from '@/services/api'
import { InfoOutlined, EditFilled, DeleteFilled } from '@vicons/material'
import type { ICourseView } from '@/interfaces'
import { clickOutside, focus } from '@/directives'

export default (await import('vue')).defineComponent({
  components: {
    NListItem,
    NThing,
    NSpace,
    NTag,
    NButton,
    NPopover,
    InfoOutlined,
    NIcon,
    EditFilled,
    DeleteFilled,
    NInput,
    NSpin
  },
  directives: {
    clickOutside,
    focus
  },
  setup() {
    const DLG = useDialog()
    const MSG = useMessage()
    const API = inject('API') as API
    return { DLG, MSG, API }
  },
  data() {
    return {
      courseNameInput: this.course.name,
      inputIsSaving: false as boolean,
      courseIsDeleting: false as boolean
    }
  },
  emits: ['editSelect', 'deleteCourse', 'renameCourse'],
  methods: {
    openDetail() {
      this.$router.push({ name: 'courseDetail', params: { courseUUID: this.course.courseUUID } })
    },
    editCourse() {
      this.$emit('editSelect', this.course.courseUUID)
    },
    handleClickOutside() {
      // if it is in edit mode, emit an event to the parent component
      if (this.inEditMode) {
        this.renameCourse()
      }
    },
    deleteCourse() {
      var contetnt = 'Are you sure you want to delete this course?'
      const len = this.course.tests.length
      if (len) {
        contetnt += ` This will also delete ${len} test${len == 1 ? '' : 's'}.`
      }
      this.DLG.warning({
        title: 'Confirm',
        content: contetnt,
        positiveText: 'Delete',
        negativeText: 'Cancel',
        onPositiveClick: async () => {
          try {
            this.courseIsDeleting = true
            await this.API.deleteCourse(this.course.courseUUID)
            this.MSG.success('Course deleted successfully')
            this.$emit('deleteCourse', this.course.courseUUID)
          } catch (err) {
            this.MSG.error(err instanceof Error ? err.message : 'Unknown error')
          } finally {
            this.courseIsDeleting = false
          }
        }
      })
    },
    handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.renameCourse()
      } else if (event.key === 'Escape') {
        // revoke to original value, then exit edit mode
        this.courseNameInput = this.course.name
        this.$emit('editSelect', '')
      }
    },
    async renameCourse() {
      // save, then exit edit mode
      this.courseNameInput = this.courseNameInput.trim()
      // if the name is not changed, exit edit mode
      if (this.courseNameInput === this.course.name) {
        this.$emit('editSelect', '')
        return
      }

      try {
        this.inputIsSaving = true
        await this.API.renameCourse(this.course.courseUUID, this.courseNameInput)
        this.$emit('renameCourse', this.course.courseUUID, this.courseNameInput)
        this.MSG.success('Course name changed successfully')
      } catch (err) {
        this.MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        this.inputIsSaving = false
        this.$emit('editSelect', '')
      }
    }
  },
  props: {
    editUUID: {
      type: String,
      required: false
    },
    course: {
      type: Object as () => ICourseView,
      required: true
    }
  },
  computed: {
    inEditMode(): boolean {
      return this.editUUID === this.course.courseUUID
    },
    plannedTests(): number {
      const currentTime = new Date()
      return this.course.tests.filter((t) => t.startAt && new Date(t.startAt) > currentTime).length
    },
    activeTests(): number {
      const currentTime = new Date()
      return this.course.tests.filter(
        (t) =>
          t.startAt &&
          new Date(t.startAt) <= currentTime &&
          (!t.endAt || new Date(t.endAt) > currentTime)
      ).length
    },
    completedTests(): number {
      const currentTime = new Date()
      return this.course.tests.filter((t) => t.endAt && new Date(t.endAt) <= currentTime).length
    },
    bgImageStyle(): any {
      return {
        'background-image': `url('${this.imageURL}')`
      }
    },
    imageURL(): string {
      switch (this.course.contentType) {
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
    }
  }
})
</script>

<template>
  <n-spin :show="courseIsDeleting">
    <n-list-item @click="openDetail">
      <template #prefix>
        <div class="course-avatar" :style="bgImageStyle"></div>
      </template>

      <n-thing>
        <template #header>
          <n-input
            v-if="inEditMode"
            v-focus
            ref="courseNameInputRef"
            class="course-name-input"
            placeholder="Course name"
            v-model:value="courseNameInput"
            @click.stop
            autosize
            :passively-activated="true"
            :loading="inputIsSaving"
            :disabled="inputIsSaving"
            @keyup="handleKeyUp"
          />
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
            <n-tag
              class="tag-chip"
              :bordered="false"
              type="default"
              size="small"
              v-if="!(activeTests || completedTests || plannedTests)"
            >
              No tests
            </n-tag>
            <n-tag
              class="tag-chip"
              :bordered="false"
              type="warning"
              size="small"
              v-if="plannedTests"
            >
              Planned: {{ plannedTests }}
            </n-tag>
            <n-tag class="tag-chip" :bordered="false" type="info" size="small" v-if="activeTests">
              Active: {{ activeTests }}
            </n-tag>
            <n-tag
              class="tag-chip"
              :bordered="false"
              type="success"
              size="small"
              v-if="completedTests"
            >
              Completed: {{ completedTests }}
            </n-tag>
          </n-space>
        </template>
      </n-thing>

      <template #suffix>
        <div style="white-space: nowrap">
          <n-button
            @click.stop="editCourse"
            v-click-outside="handleClickOutside"
            class="btn-course-action"
            size="small"
            quaternary
            circle
            type="success"
          >
            <template #icon>
              <n-icon class="icon-no-align">
                <EditFilled />
              </n-icon>
            </template>
          </n-button>

          <n-button
            @click.stop="deleteCourse"
            class="btn-course-action"
            size="small"
            quaternary
            circle
            type="error"
          >
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
  color: var(--gray-1);
  border: none;
  background-color: white;
  padding: 0;
  margin: 0;
  min-width: 10rem;
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
}
</style>
