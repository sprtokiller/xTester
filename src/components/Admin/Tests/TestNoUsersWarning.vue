<script setup lang="ts">
import { NAlert, NButton, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useTesterStore } from '@/stores/Admin/testerStore'

const store = useTesterStore()
const router = useRouter()
const MSG = useMessage()

const show: Ref<boolean> = ref(false)

onMounted(async () => {
  try {
    await store.fetchTesters()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    if (store.isEmpty) {
      show.value = true
    }
  }
})

function handleManageTesters() {
  router.push({ name: 'testerList' })
}
</script>

<template>
  <n-alert class="group-alert" title="No tester groups" type="warning" :closable="true" v-if="show">
    <div class="d-flex align-items-center">
      <div class="alert-text">
        It seems that you don't have any preset testers. This way, all of the testers will be
        anonymous, which can be a problem if you want to track their progress.
      </div>
      <n-button @click="handleManageTesters" type="warning" secondary>
        Manage testers now
      </n-button>
    </div>
  </n-alert>
</template>

<style scoped>
.group-alert {
  margin: 1rem 0;
}

.alert-text {
  margin-right: 2rem;
}
</style>
