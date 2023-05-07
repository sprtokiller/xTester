<script lang="ts">
import AdminMenu from '@/components/AdminMenu.vue';

export default {
  components: {
    AdminMenu
  }
};
</script>

<template>
  <div class="d-flex vw-100 vh-100">
    <div id="admin-menu" class="h-100">
      <nav>
        <AdminMenu />
      </nav>
    </div>
    <div class="flex-fill h-100 py-4">
      <main class="h-100">
        <div class="d-flex align-items-center justify-content-center">
          <div class="container">
            <router-view />
          </div>
        </div>
        <!-- <div class="d-flex align-items-center justify-content-center h-100" v-else>
          <Error404 />
        </div> -->
      </main>
    </div>
  </div>
</template>

<style scoped>
  #admin-menu {
    width: 9rem;
    /* add a right shadow */
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  }
</style>
