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
        console.info(res);
      }).catch(err => {
        console.error(err);
      });
    },
    fakeGet() {
      API.getSession().then(res => {
        console.info(res);
      }).catch(err => {
        console.error(err);
      });
    },
    fakeSet() {
      API.setSession().then(res => {
        console.info(res);
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
    <n-button @click="fakeGet">Get</n-button>
    <n-button @click="fakeSet">Set</n-button>

  </main>
</template>
