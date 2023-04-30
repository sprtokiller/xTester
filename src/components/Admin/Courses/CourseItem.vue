<script lang="ts">

import { NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, NIcon, NInput } from 'naive-ui';
import { ref } from 'vue';
import type { InputInst } from 'naive-ui';
import { InfoOutlined, EditFilled, DeleteFilled } from '@vicons/material'
import type { ICourseView } from '@/interfaces';
import { clickOutside, focus } from "@/directives";

export default {
  components: {
    NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, InfoOutlined,
    NIcon, EditFilled, DeleteFilled, NInput
  },
  directives: {
    clickOutside, focus
  },
  emits: ["editStart", "openDetail"],
  methods: {
    openDetail () {
      // emit an event to the parent component
      this.$emit('openDetail', this.course.courseUUID);
      },
    editCourse (event : Event) {
      event.stopPropagation();
      this.$emit('editStart', this.course.courseUUID);
    },
    handleClickOutside() {
      // if it is in edit mode, emit an event to the parent component
      if (this.inEditMode)
        this.$emit('editStart', '');
    },
    deleteCourse (event : Event) {
      event.stopPropagation();
      console.log('Called delete');
    },
  },
  props: {
    editUUID: {
      type: String,
      required: false
    },
    course: {
      type: Object as () => ICourseView,
      required: true
    },
  },
  computed: {
    inEditMode() : boolean {
      return this.editUUID === this.course.courseUUID;
    },
    plannedTests() : number {
      const currentTime = new Date();
      return this.course.tests.filter(t => t.startAt && new Date(t.startAt) > currentTime).length;
    },
    activeTests() : number {
      const currentTime = new Date();
      return this.course.tests.filter(t => (t.startAt && new Date(t.startAt) <= currentTime) && (!t.endAt || new Date(t.endAt) > currentTime)).length;
    },
    completedTests() : number {
      const currentTime = new Date();
      return this.course.tests.filter(t => t.endAt && new Date(t.endAt) <= currentTime).length;
    }
  } 
}
</script>


<template>
  <n-list-item v-on:click="openDetail">
    <template #prefix>
      <div class="xratio xratio-16x9" style="background-color: wheat; width: 96px; height: 54px;">
      </div>
      <!-- <n-image
                width="100"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              /> -->
    </template>

    <n-thing>
      <template #header>
        <n-input v-if="inEditMode" v-focus ref="courseNameInputRef" class="course-name-input" v-bind:placeholder="course.name" onclick="event.stopPropagation();" autosize/>
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
          <n-tag class="tag-chip" :bordered="false" type="default" size="small" v-if="!(activeTests || completedTests || plannedTests)">
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
      <div style="white-space: nowrap;">

        <n-button v-on:click.stop="editCourse" v-click-outside="handleClickOutside" class="btn-course-action" size="small" quaternary circle type="success">
          <template #icon>
            <n-icon class="icon-no-align">
              <EditFilled />
            </n-icon>
          </template>
        </n-button>

        <n-button v-on:click.stop="deleteCourse" class="btn-course-action" size="small" quaternary circle type="error">
          <template #icon>
            <n-icon class="icon-no-align">
              <DeleteFilled />
            </n-icon>
          </template>
        </n-button>
      </div>
    </template>
  </n-list-item>
</template>

<style scoped>

.tag-chip{
  cursor: pointer;
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
  color: var(--gray-2)
}

.btn-course-action {
  color: var(--gray-3);
  margin-left: 0.5rem;
}

.n-list-item:hover .btn-course-action:hover {
  color: var(--gray-1)
}
</style>