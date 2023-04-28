<script lang="ts">

import { inject } from 'vue'
import { useMessage, NButton } from 'naive-ui';
import { API } from '@/services/api';

export default {
  components: {
    NButton
  },
  setup () {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API }
  },
  // mounted() {
  //   console.info("Hello");
  // },
  methods: {
    callback: function (response: any) {
      API.login(response.credential).then(res => {
        this.MSG.info("OK");
      }).catch(err => {
        console.error(err);
      });
    },
    logout() {
      API.logout().then(res => {
        this.MSG.info("OK");
      }).catch(err => {
        console.error(err);
      });
    },
    check() {
      API.check().then(res => {
        this.MSG.info("OK");
      }).catch(err => {
        console.error(err);
      });
    }
  }
};
</script>

<template>
  <main>
    <div>Welcome</div>
    <GoogleLogin :callback="callback" prompt auto-login/>
    <n-button @click="logout">Logout</n-button>
    <n-button @click="check">Check</n-button>

  </main>
</template>
