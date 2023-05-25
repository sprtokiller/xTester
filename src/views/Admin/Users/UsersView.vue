<script setup lang="ts">
import { NH2, NScrollbar } from 'naive-ui'
// import { useRouter } from 'vue-router'
// import { useMessage } from 'naive-ui'
// import { useApi } from '@/services/api'

import UserList from '@/components/Admin/Users/UserList.vue'

// const router = useRouter()
// const MSG = useMessage()
// const API = useApi()

</script>

<template>
  <div class="d-flex">
    <n-h2>User and group management</n-h2>
  </div>
  <!-- two columns -->
  <NScrollbar>
    <div class="row">
      <!-- left column -->
      <div class="col-6">
        <UserList />
      </div>
      <!-- right column -->
      <div class="col-6">
        <UserList />
        <UserList />
      </div>
    </div>
  </NScrollbar>
</template>
