<script setup lang="ts">
const props = defineProps({
  userHash: String
});
</script>

<template>
  <div>Hash pushed to iframe: {{ props.userHash }}</div>
  <iframe
    allowfullscreen="true"
    class="player"
    :src="
      'https://articulateusercontent.com/review/items/bxR_bN7eF90WPICq/story.html?userHash=' +
      userHash
    "
    scrolling="no"
    style="width: 40vw; height: 40vh"
  ></iframe>
</template>
