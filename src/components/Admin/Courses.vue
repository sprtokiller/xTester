<script lang="ts">

import { NList, NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, NIcon } from 'naive-ui';
import { InfoOutlined, EditFilled, DeleteFilled } from '@vicons/material'

export default {
  components: {
    NList, NListItem, NThing, NSpace, NTag, NButton, NImage, NPopover, InfoOutlined,
    NIcon, EditFilled, DeleteFilled
  },
  // methods: {
  // },
  // mounted() {
  // },
  data() {
    return {
      count: 5
    }
  }
}
</script>


<template>
  <div class="container">
    <n-list hoverable clickable>
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
            xAPI_simple
            <n-popover placement="right-start" trigger="hover">
              <template #trigger>
                <n-icon size="tiny" depth="3" style="margin-left: 0.3rem">
                  <InfoOutlined />
                </n-icon>
              </template>
              <div class="large-text">
                <div>Author: Vítězslav Kříž</div>
                <div>Version {{count}}</div>
              </div>
            </n-popover>
          </template>
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" type="default" size="small">
                No active testing
              </n-tag>
            </n-space>
          </template>
        </n-thing>

        <template #suffix>
          <div style="white-space: nowrap;">

            <n-button class="btn-course-action" size="small" ghost circle secondary>
              <template #icon>
                <n-icon class="icon-no-align">
                  <EditFilled />
                </n-icon>
              </template>
            </n-button>

            <n-button class="btn-course-action" size="small" type="error" ghost circle secondary>
              <template #icon>
                <n-icon class="icon-no-align">
                  <DeleteFilled />
                </n-icon>
              </template>
            </n-button>
          </div>
        </template>

      </n-list-item>
    </n-list>
  </div>
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