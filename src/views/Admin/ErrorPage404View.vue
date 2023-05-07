<script lang="ts">
import ErrorPage404 from '@/components/Admin/ErrorPage404.vue';

export default (await import('vue')).defineComponent({
  components: {
    ErrorPage404
  }
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center vh-100 vw-100">
    <main>
      <ErrorPage404 />
    </main>
  </div>
</template>