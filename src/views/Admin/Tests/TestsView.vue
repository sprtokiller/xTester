<script setup lang="ts">
import { NH2 } from 'naive-ui'
import TestTable from '@/components/Admin/Tests/TestTable.vue'
import AddTestButton from '@/components/Admin/AddTestButton.vue';
</script>

<template>
  <div class="d-flex ">
    <n-h2>List of tests</n-h2>
    <AddTestButton />
  </div>
  <TestTable />
</template>
