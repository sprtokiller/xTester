<script lang="ts">
import { NMessageProvider, NDialogProvider } from 'naive-ui'

const padTwo = (val : number) => (val > 9 ? "" : "0") + val;

export default {
  components: {
    NMessageProvider, NDialogProvider
  },
  methods: {
    formatDate(date : Date) {
      const year = date.getFullYear()
      const month = padTwo((date.getMonth() + 1))
      const day = padTwo((date.getDate()))
      const hours = padTwo((date.getHours()))
      const minutes = padTwo((date.getMinutes()))
      const seconds = padTwo((date.getSeconds()))
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
  }
}

</script>

<template>
  <n-message-provider>
    <n-dialog-provider>
      <RouterView />
      <div id="dev-bar">Compiled at: {{ formatDate(new Date()) }}</div>
    </n-dialog-provider>
  </n-message-provider>
</template>

<style scoped>
  #dev-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
    text-align: center;
  }
</style>
