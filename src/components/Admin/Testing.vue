<script lang="ts">

import TestTable from '@/components/Admin/Testing/TestTable.vue'

export default {
  components: {
    TestTable
  },
  methods: {
    changeTab(tab: string) {
      this.$emit('changeTab', tab)
    }
  }
}
</script>


<template>
  <div class="container">
    <TestTable @changeTab="changeTab" />
  </div>
</template>
