<script setup lang="ts">
import { RouterView } from 'vue-router'

const padTwo = (val : number) => (val > 9 ? "" : "0") + val;

function formatDate(date : Date) {
      const year = date.getFullYear()
      const month = padTwo((date.getMonth() + 1))
      const day = padTwo((date.getDate()))
      const hours = padTwo((date.getHours()))
      const minutes = padTwo((date.getMinutes()))
      const seconds = padTwo((date.getSeconds()))
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

</script>

<template>
  <RouterView />
  <div id="dev-bar">Compiled at: {{ formatDate(new Date()) }}</div>
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
