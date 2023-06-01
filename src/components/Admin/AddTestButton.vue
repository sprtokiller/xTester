<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import { AddRound } from '@vicons/material'


const props = defineProps({
  courseUUID: {
    type: String,
    required: false
  }
})

const router = useRouter()

function handleAddTest() {
  router.push({ name: 'testingNew', query: { courseUUID: props.courseUUID } })
}

</script>

<template>
  <n-button size="large" @click="handleAddTest" type="primary" secondary class="button-add-test">Add test
    <template #icon>
      <n-icon class="icon-no-align">
        <AddRound />
      </n-icon>
    </template>
  </n-button>
</template>

<style scoped>

.button-add-test {
  margin-left: auto;
  padding-left: 12px;
}
</style>
