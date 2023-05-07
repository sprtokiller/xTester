<script lang="ts">

import { inject } from 'vue'
import { /* NSpin, NButton, NH2, */ useMessage } from 'naive-ui';
import type { API } from '@/services/api';

export default {
  components: {
    // NSpin, NButton, NH2
  },
  setup () {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API }
  },
  mounted() {
    // fetch users and user groups from the API TODO: implement
    // this.API.getCourseList().then(courses => {
    //   this.loading = false;
    // }).catch(err => {
    //   this.loading = false;
    //   this.MSG.error(err.message);
    // });
  },
  data() {
    return {
      loading: true as boolean
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>


<template>
  No content yet
</template>