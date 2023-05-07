<script lang="ts">
import CourseFrame from '@/components/CourseFrame.vue';

export default (await import('vue')).defineComponent({
  props: {
    userHash: String,
  },
  components: {
    CourseFrame
  },
  mounted() {
    console.log("A" + this.userHash);
  }
})
</script>

<template>
  <main>
    <div>Hash from URL is: {{ userHash }}</div>
    <CourseFrame :userHash="userHash" />
  </main>
</template>
