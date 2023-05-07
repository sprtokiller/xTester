<script lang="ts">

import TestTable from './TestTable.vue';

export default (await import('vue')).defineComponent({
  components: {
    TestTable
  }
})
</script>


<template>
  <TestTable/>
</template>
