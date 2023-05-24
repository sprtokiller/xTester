<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { ArrowBackFilled } from '@vicons/material'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleBack() {
  router.back()
}

</script>

<template>
  <n-button size="large" @click="handleBack" quaternary circle>
    <template #icon>
      <n-icon class="icon-no-align">
        <ArrowBackFilled />
      </n-icon>
    </template>
  </n-button>
</template>
