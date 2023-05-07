<script lang="ts">
import { NResult, NButton } from 'naive-ui'

export default (await import('vue')).defineComponent({
  props: {
    userHash: String
  },
  components: {
    NResult,
    NButton
  }
})
</script>

<template>
  <n-result status="404" title="404 Not Found" description="No-can-do's-ville, babydoll.">
    <n-button @click="$router.push({ path: '/app' })">Take me home, country roads</n-button>
  </n-result>
</template>
