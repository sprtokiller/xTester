<script lang="ts">
import { NMenu } from 'naive-ui'
import { h } from 'vue'
// import type { Component } from 'vue'
import { RouterLink, type RouteLocationNormalized } from 'vue-router'
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
  watch: {
    $route: {
      handler(to) {
        this.$nextTick(() => {
          this.onRouteChange(to);
        });
      },
      immediate: true
    }
  },
  data() {
    const pathGroups = ["dashboard", "course", "test", "user", "module"]
    
    const menuPaths = [
      ["dashboard", "Home"],
      [],
      ["courses", "Courses"],
      ["tests", "Tests"],
      ["users", "Users"],
      ["modules", "Modules"]
    ]
    return {
      pathGroups,
      menuOptions: menuPaths.map((location: string[], index: number) => {
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
  },
  methods: {
    onRouteChange(to: RouteLocationNormalized) {
      const name = to.name as string
      // find the index of path group that is the substring of the current path
      const index = this.pathGroups.findIndex((pathGroup: string) => name.includes(pathGroup))
      const menuItem: HTMLElement = document.querySelectorAll('.n-menu-item-content')[index] as HTMLElement
      if (menuItem)
        menuItem.click();
    }
  }
})
</script>


<template>
  <n-menu :options="menuOptions" />
</template>

<style scoped>

</style>