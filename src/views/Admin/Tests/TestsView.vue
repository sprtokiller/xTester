<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { NH2 } from 'naive-ui'
import TestTable from '@/components/Admin/Tests/TestTable.vue'
import AddTestButton from '@/components/Admin/AddTestButton.vue';
import TestNoGroupsWarning from '@/components/Admin/Tests/TestNoGroupsWarning.vue';

const showWarning: Ref<boolean> = ref(false)
</script>

<template>
  <div class="d-flex ">
    <n-h2>List of tests</n-h2>
    <AddTestButton @show-warning="showWarning = true" />
  </div>
  <TestNoGroupsWarning v-if="showWarning"/>
  <TestTable />
</template>
