<script lang="ts">
import { NMenu } from 'naive-ui'
import { h } from 'vue'
// import type { Component } from 'vue'
import { RouterLink } from 'vue-router'
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

function createRouterLinkVnode(where: string, label: string) {
  return h(
    RouterLink,
    {
      to: {
        name: where
      }
    },
    { default: () => label }
  )
}

export default (await import('vue')).defineComponent({
  components: {
    NMenu
  },
  mounted() {
    // let element: HTMLElement = document.querySelector('.n-menu-item-content') as HTMLElement;
    // // add class to element
    // element.classList.add('n-menu-item-content--selected');
  },
  data() {
    const menuPaths = [
      ["dashboard", "Home"],
      [],
      ["courses", "Courses"],
      ["tests", "Tests"],
      ["users", "Users"],
      ["modules", "Modules"]
    ]
    return {
      menuOptions: menuPaths.map((location : string[], index : number) => {
        return location.length === 2 ? {
          label: () => createRouterLinkVnode(location[0], location[1]),
          key: location[0],
          // onClick: () => this.changeTab(location[0])
        } : {
          key: 'divider-' + index,
          type: 'divider',
        }
      }) as unknown as MenuOption[],
    }
  }
})
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