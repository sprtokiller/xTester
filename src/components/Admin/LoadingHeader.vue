<script setup lang="ts">
import { NH3, NSpin } from 'naive-ui'
import BackButton from '@/components/Admin/BackButton.vue'
</script>

<template>
  <!-- Loading state -->
  <div>
    <div class="d-flex align-items-center">
      <BackButton />
      <n-h3 class="h3-item-name">Loading...</n-h3>
    </div>
    <n-spin class="w-100" style="min-height: 200px" />
  </div>
</template>
