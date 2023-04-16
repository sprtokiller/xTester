<script lang="ts">

import { NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, NIcon } from 'naive-ui';
import { InfoOutlined, EditFilled, DeleteFilled } from '@vicons/material'
import type { CourseView } from '@/interfaces';

export default {
  components: {
    NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, InfoOutlined,
    NIcon, EditFilled, DeleteFilled
  },
  props: {
    course: {
      type: Object as () => CourseView,
      required: true
    },
  }
}
</script>


<template>
  <n-list-item>
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
      </template>
      <template #description>
        <n-space size="small" style="margin-top: 4px">
          <n-tag :bordered="false" type="default" size="small" v-if="!(course.active_tests || course.finished_tests || course.prepared_tests)">
            No tests
          </n-tag>
          <n-tag :bordered="false" type="info" size="small" v-if="course.active_tests">
            Active: {{ course.active_tests }}
          </n-tag>
          <n-tag :bordered="false" type="success" size="small" v-if="course.finished_tests">
            Finished: {{ course.finished_tests }}
          </n-tag>
          <n-tag :bordered="false" type="warning" size="small" v-if="course.prepared_tests">
            Prepared: {{ course.prepared_tests }}
          </n-tag>
        </n-space>
      </template>
    </n-thing>

    <template #suffix>
      <div style="white-space: nowrap;">

        <n-button class="btn-course-action" size="small" quaternary circle type="success">
          <template #icon>
            <n-icon class="icon-no-align">
              <EditFilled />
            </n-icon>
          </template>
        </n-button>

        <n-button class="btn-course-action" size="small" quaternary circle type="error">
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
.n-list-item:hover .btn-course-action {
  color: #888;
}

.btn-course-action {
  color: #DDD;
  margin-left: 0.5rem;
}

.n-list-item:hover .btn-course-action:hover {
  color: #333;
}
</style>