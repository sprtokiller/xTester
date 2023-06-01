import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { useApi } from '@/services/api'

import type { IGroupView } from '@/interfaces'

export const useGroupStore = defineStore('groupStore', () => {
  const API = useApi()

  // state
  const groups: Ref<IGroupView[]> = ref([])
  const selectedGroupUUID: Ref<string> = ref('')

  // getters
  const isEmpty: ComputedRef<boolean> = computed(() => {
    return groups.value.length === 0
  })
  
  // actions
  async function addGroup(groupName: string, groupAnonymousCount: number): Promise<void> {
    const groupUUID = await API.addGroup(
      groupName,
      groupAnonymousCount
    )

    const group: IGroupView = {
      groupName: groupName,
      groupAnonymousCount: groupAnonymousCount,
      groupTestersCount: 0,
      groupUUID: groupUUID
    }

    groups.value.push(group)
  }

  async function deleteGroup(groupUUID: string): Promise<void> {
    await API.deleteGroup(groupUUID)
    groups.value = groups.value.filter((group) => group.groupUUID !== groupUUID)
  }

  function modifySelectedGroupTesterCount(newCount: number): void {
    const group = groups.value.find((group) => group.groupUUID === selectedGroupUUID.value)
    if (group) {
      group.groupTestersCount = newCount
    }
  }

  function selectGroup(groupUUID: string = ''): void {
    selectedGroupUUID.value = groupUUID
  }

  async function fetchGroups(): Promise<void> {
    groups.value = await API.getGroupList()
  }

  return { 
    groups, selectedGroupUUID,
    isEmpty,
    addGroup, deleteGroup, modifySelectedGroupTesterCount, selectGroup, fetchGroups 
  }
})