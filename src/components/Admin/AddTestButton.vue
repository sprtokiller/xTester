<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { NButton, NIcon, useMessage, NSpin } from 'naive-ui'
import { useRouter } from 'vue-router'
import { AddRound } from '@vicons/material'
import { useGroupStore } from '@/stores/Admin/groupStore';

const store = useGroupStore()
const router = useRouter()
const MSG = useMessage()

const loading: Ref<boolean> = ref(true)

const emit = defineEmits(['showWarning'])

onMounted(async () => {
  try {
    loading.value = true
    await store.fetchGroups()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
    if (store.isEmpty) {
      emit('showWarning')
    }
  }
})

const props = defineProps({
  courseUUID: {
    type: String,
    required: false
  }
})

function handleAddTest() {
  router.push({ name: 'testingNew', query: { courseUUID: props.courseUUID } })
}

</script>

<template>
  <n-spin :show="loading" class="button-add-test">
    <n-button size="large" @click="handleAddTest" type="primary" secondary :disabled="store.isEmpty">Add test
      <template #icon>
        <n-icon class="icon-no-align">
          <AddRound />
        </n-icon>
      </template>
    </n-button>
  </n-spin>
</template>

<style scoped>

.button-add-test {
  margin-left: auto;
  padding-left: 12px;
}
</style>
