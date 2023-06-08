<script setup lang="ts">
import CourseFrame from '@/components/Admin/CourseFrame.vue'
// import { defineProps } from 'vue'

const props = defineProps({
  userHash: String
})
</script>

<template>
  <main>
    <div>Hash from URL is: {{ props.userHash }}</div>
    <CourseFrame :userHash="props.userHash" />
  </main>
</template>
