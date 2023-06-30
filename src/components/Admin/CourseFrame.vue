<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  courseURL: {
    type: String,
    required: true
  },
  testUUID: {
    type: String,
    required: true
  },
  testerUUID: {
    type: String,
    required: true
  }
})

const getURL = computed(() => {
  return `https://articulateusercontent.com/review/${props.courseURL}?testerUUID=${encodeURIComponent(props.testerUUID)}&testUUID=${encodeURIComponent(props.testUUID)}`
})

</script>

<template>
  <iframe
    allowfullscreen="true"
    class="player"
    :src="getURL"
    scrolling="no"
  ></iframe>
</template>

<style scoped>
.player {
  margin-left: 2rem;
  margin-top: 1rem;
  width: calc(100vw - 4rem);
  min-height: calc(100vh - 2rem);
}
</style>
