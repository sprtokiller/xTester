<template>
  <n-menu :options="menuOptions" />
</template>

<script setup lang="ts">
import { NMenu } from 'naive-ui'
import { h, nextTick } from 'vue'
import { useRoute, RouterLink, onBeforeRouteUpdate, type RouteRecordName } from 'vue-router'
import type { MenuOption } from 'naive-ui'

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

onRouteChange(useRoute().name)

onBeforeRouteUpdate((to) => {
  onRouteChange(to.name)
})

const menuPaths = [
  ['dashboard', 'Home'],
  [],
  ['courseList', 'Courses'],
  ['testingList', 'Tests'],
  ['testerList', 'Testers'],
  ['moduleList', 'Modules']
]

const menuOptions = menuPaths.map((location: string[], index: number) => {
  return location.length === 2
    ? {
        label: () => createRouterLinkVnode(location[0], location[1]),
        key: location[0]
      }
    : {
        key: 'divider-' + index,
        type: 'divider'
      }
}) as unknown as MenuOption[]

function onRouteChange(to: RouteRecordName | undefined | null) {
  if (!to) return

  const name: string = to as string
  const pathGroups: string[] = ['dashboard', 'course', 'testing', 'tester', 'module']
  const index: number = pathGroups.findIndex((pathGroup: string) => name.includes(pathGroup))

  if (index === -1) return

  nextTick(() => {
    // find the index of path group that is the substring of the current path
    const menuItem: HTMLElement = document.querySelectorAll('.n-menu-item-content')[
      index
    ] as HTMLElement

    if (menuItem) menuItem.click()
  })
}
</script>
