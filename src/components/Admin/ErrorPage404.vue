<script setup lang="ts">
import { NResult, NButton } from 'naive-ui'
import router from '../../router'
</script>

<template>
  <n-result status="404" title="404 Not Found" description="No-can-do's-ville, babydoll.">
    <n-button @click="router.push({ path: '/app' })">Take me home, country roads</n-button>
  </n-result>
</template>
