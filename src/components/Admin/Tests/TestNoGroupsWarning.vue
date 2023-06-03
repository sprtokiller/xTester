<script setup lang="ts">
import { NAlert, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleAddGroup() {
  router.push({ name: 'testerList' })
}

</script>

<template>
  <n-alert class="group-alert" title="No tester groups" type="warning">
    <div class="d-flex align-items-center">
      <div class="alert-text">
        Before running a test, you need to add at least one testing group to which the test can be assigned!
      </div>
      <n-button @click="handleAddGroup" type="warning" secondary>
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