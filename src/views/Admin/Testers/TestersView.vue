<script setup lang="ts">
import { NH2, NScrollbar } from 'naive-ui'

import TesterList from '@/components/Admin/Testers/TesterList.vue'
import GroupList from '@/components/Admin/Testers/GroupList.vue'
import AssignTestersModal from '@/components/Admin/Testers/AssignTestersModal.vue'

</script>

<template>
  <div class="d-flex">
    <n-h2>Tester and group management</n-h2>
  </div>
  <!-- two columns -->
  <NScrollbar>
    <div class="row">
      <!-- left column -->
      <div class="col-6">
        <TesterList />
      </div>
      <!-- right column -->
      <div class="col-6">
        <GroupList />
      </div>
    </div>
  </NScrollbar>
  <AssignTestersModal />
</template>
