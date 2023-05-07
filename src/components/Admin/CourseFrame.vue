<script lang="ts">
export default (await import('vue')).defineComponent({
  props: ['userHash']
})
</script>

<template>
  <div>Hash pushed to iframe: {{ userHash }}</div>
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
