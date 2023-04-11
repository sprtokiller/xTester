<script lang="ts">
import AdminMenu from '@/components/AdminMenu.vue';
import Error404 from '@/components/Error404.vue';
import Courses from '@/components/Admin/Courses.vue';
import Dashboard from '@/components/Admin/Dashboard.vue';
import Modules from '@/components/Admin/Modules.vue';
import Testing from '@/components/Admin/Testing.vue';
import Users from '@/components/Admin/Users.vue';

export default {
  props: {
    userHash: String,
  },
  components: {
    AdminMenu,
    Error404,
    Courses,
    Dashboard,
    Modules,
    Testing,
    Users
  },
  methods: {
    handleNavigation(string : string) {
      this.selectedComponent = string
    }
  },
  // mounted() {
  //   console.log("Nástěnka běží");
  // },
  data() {
    return {
      selectedComponent: 'Dashboard'
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
    <div id="admin-menu">
      <nav>
        <AdminMenu @changeTab="handleNavigation"/>
      </nav>
    </div>
    <div class="flex-fill h-100">
      <main class="h-100">
        <div v-if="validatedComponent">
          <component :is="validatedComponent" ></component>
        </div>
        <div class="d-flex align-items-center justify-content-center h-100" v-else>
          <Error404 />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
  #admin-menu {
    width: 10rem;
  }
</style>
