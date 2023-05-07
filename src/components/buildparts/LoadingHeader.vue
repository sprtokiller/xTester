<script lang="ts">

import { NButton, NIcon, NH3, NSpin } from 'naive-ui';
import { ArrowBackFilled } from '@vicons/material'

export default {
  components: {
    NButton, NIcon, NH3, NSpin, ArrowBackFilled
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
}
</script>


<template>
  <!-- Loading state -->
  <div>
    <div class="d-flex align-items-center">
      <n-button size="large" @click="handleBack" quaternary circle>
        <template #icon>
          <n-icon class="icon-no-align">
            <ArrowBackFilled />
          </n-icon>
        </template>
      </n-button>
      <n-h3 class="h3-item-name">Loading...</n-h3>
    </div>
    <n-spin class="w-100" style="min-height: 200px;" />
  </div>
</template>


<style scoped>
</style>