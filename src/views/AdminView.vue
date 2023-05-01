<script lang="ts">
import AdminMenu from '@/components/AdminMenu.vue';
import Error404 from '@/components/Error404.vue';

export default {
  components: {
    AdminMenu,
    Error404
  },
  methods: {
    handleNavigation(string : string) {
      this.selectedComponent = string;
      this.reloadKey++;
      localStorage.setItem('selectedComponent', string);
    }
  },
  mounted() {
    const selectedComponent = localStorage.getItem('selectedComponent');
    if (selectedComponent) {
      this.selectedComponent = selectedComponent;
    }
  },
  data() {
    return {
      selectedComponent: 'Dashboard',
      reloadKey: 0
    }
  },
  computed: {
    validatedComponent() : string | null {
      const componentName = this.selectedComponent
      // Check if the component name is valid
      if (this.$options?.components?.hasOwnProperty(componentName)) {
        return componentName
      }

      // If the component name is invalid, return null
      return null
    } 
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
        <div class="d-flex align-items-center justify-content-center"> <!--v-if="validatedComponent"-->
          <div class="container">
            <router-view />
          </div>
          <!-- <component :is="validatedComponent" :key="reloadKey" @changeTab="handleNavigation"></component> -->
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
