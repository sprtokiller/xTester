<script lang="ts">
import { NMenu, NCard } from 'naive-ui'
// import { h } from 'vue'
// import type { Component } from 'vue'
// import { RouterLink } from 'vue-router'
// import { NIcon, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon,
//   WineOutline as WineIcon,
//   HomeOutline as HomeIcon
// } from '@vicons/ionicons5'

// function renderIcon (icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }

// function createRouterLinkVnode(where : String, label : String) {
//   return h(
//     RouterLink,
//     {to : String(where)},
//     { default: () => label }
//   )
// }

export default {
  components: {
    NMenu, NCard
  },
  methods: {
    changeTab(tabName: String) {
      this.$emit('changeTab', tabName)
    }
  },
  mounted() {
    // let element: HTMLElement = document.querySelector('.n-menu-item-content') as HTMLElement;
    // // add class to element
    // element.classList.add('n-menu-item-content--selected');
  },
  data() {
    return {
      menuOptions: [["Dashboard", "Home"], [], ["Courses"], ["Testing"], ["Users"], ["Modules"]].map((location : String[], index : number) => {
        return location.length ? {
          label: location[1] || location[0],
          key: location[0],
          onClick: () => this.changeTab(location[0])
        } : {
          key: 'divider-' + index,
          type: 'divider',
        }
      }) as unknown as MenuOption[],
      // menuOptions: [
      // {
      //   label: () => createRouterLinkVnode('/course/skittle-chan-is-the-best-waifu', 'Test course'),
      //   key: 'test'
      // }
      //
    }
  }
}
</script>


<template>
  <n-menu :options="menuOptions"/>
</template>

<style>
.n-menu-item:first-child > .n-menu-item-content::before {
  background-color: inherit !important;
}
.n-menu-item:first-child > .n-menu-item-content > .n-menu-item-content-header {
  color: inherit !important;
}
.n-menu > .n-menu-item:first-child > .n-menu-item-content:not(.n-menu-item-content--disabled):hover::before {
  background-color: var(--n-item-color-hover) !important;
}
</style>