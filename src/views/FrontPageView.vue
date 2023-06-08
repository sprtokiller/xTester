<script lang="ts">
//TODO: Change to setup script
import { inject } from 'vue'
import { useMessage, NButton } from 'naive-ui'
import type { API } from '@/services/api'

export default (await import('vue')).defineComponent({
  components: {
    NButton
  },
  setup() {
    const MSG = useMessage()
    const API = inject('API') as API
    return { MSG, API }
  },
  methods: {
    callback: function (response: any) {
      this.API.login(response.credential)
        .then(() => {
          this.MSG.info('OK')
        })
        .catch((err) => {
          console.error(err)
        })
    },
    logout() {
      this.API.logout()
        .then(() => {
          this.MSG.info('OK') //TODO: redirect to login page
        })
        .catch((err) => {
          console.error(err)
        })
    },
    check() {
      this.API.check()
        .then(() => {
          this.MSG.info('OK')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
})
</script>

<template>
  <main>
    <div>Welcome</div>
    <GoogleLogin :callback="callback" prompt auto-login />
    <n-button @click="logout">Logout</n-button>
    <n-button @click="check">Check</n-button>
  </main>
</template>
