<script setup lang="ts">
import { ref } from 'vue'
import { NMessageProvider, NDialogProvider, NConfigProvider, darkTheme, lightTheme } from 'naive-ui'

const t = ref(true)

const toggleTheme = () => {
  t.value = !t.value
}

// global key listener
window.addEventListener('keydown', (e) => {
  if (e.key === 't') {
    toggleTheme()
  }
})

</script>

<template>
  <n-config-provider :theme="t ? darkTheme : lightTheme">
    <n-message-provider>
      <n-dialog-provider>
        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>