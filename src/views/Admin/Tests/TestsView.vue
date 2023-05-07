<script lang="ts">
import TestTable from '@/components/Admin/Tests/TestTable.vue'

export default (await import('vue')).defineComponent({
  components: {
    TestTable
  }
})
</script>

<template>
  <TestTable />
</template>
