<script lang="ts">

import { inject } from 'vue'
import { useMessage, NButton, NIcon, NH3 } from 'naive-ui';
import { ArrowBackFilled } from '@vicons/material'
import { useRouter } from 'vue-router';
import LoadingHeader from '../../buildparts/LoadingHeader.vue'

import type { API } from '@/services/api';

export default (await import('vue')).defineComponent({
  setup() {
    const router = useRouter();
    const MSG = useMessage();
    const API = inject('API') as API;
    return {
      router, MSG, API
    }
  },
  data() {
    return {
      loading: true,
    }
  },
  components: {
    NButton, NIcon, NH3, ArrowBackFilled, LoadingHeader
  },
  props: {
    testUUID: {
      type: String,
      required: true
    }
  },
  watch: {
    testUUID: {
      handler(newTestUUID) {
        this.fetchDetail(newTestUUID);
      },
      immediate: true
    }
  },
  methods: {
    fetchDetail(testUUID : string) {
      // fetch courses from the API
      this.loading = true;
      console.log(testUUID)
      // this.API.getCourseDetail(testUUID).then(course => { //TODO: implement
      //   this.loading = false;
      // }).catch(err => {
      //   this.loading = false;
      //   this.MSG.error(err.message);
      // });
    },
    handleBack() {
      // print the router history
      this.router.back();
    }
  },
  computed: {

  },
})
</script>


<template>
  <!-- Loading state -->
  <LoadingHeader v-if="loading" />

  <!-- Loaded state -->
  <div v-else class="d-flex align-items-center">
    <n-button size="large" @click="handleBack" quaternary circle>
      <template #icon>
        <n-icon class="icon-no-align">
          <ArrowBackFilled />
        </n-icon>
      </template>
    </n-button>
    <n-h3 class="h3-item-name">{{ "Sem jmeno testu" }}</n-h3>
  </div>

</template>

<style scoped>
</style>