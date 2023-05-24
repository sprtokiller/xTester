<script setup lang="ts">
import AdminMenu from '@/components/Admin/AdminMenu.vue'
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';
</script>

<template>
  <n-layout has-sider class="d-flex vw-100 vh-100">
    <n-layout-sider id="admin-menu" class="h-100" width="200">
      <nav>
        <AdminMenu />
      </nav>
    </n-layout-sider>
    <n-layout-content class="flex-fill h-100 p-2 p-sm-4">
      <main class="h-100">
        <div class="d-flex align-items-center justify-content-center">
          <div class="container">
            <router-view />
          </div>
        </div>
      </main>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
#admin-menu {
  min-width: 5rem;
  /* add a right shadow */
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
}
</style>
