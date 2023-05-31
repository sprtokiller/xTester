<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NIcon, NModal, NCard, NForm, NFormItem, NInput, useThemeVars, useMessage, NSpin, NInputNumber } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'
import { useApi } from '@/services/api'
import type { IGroup, IGroupView } from '@/interfaces'
import { AddRound } from '@vicons/material'

const MSG = useMessage()
const API = useApi()

const uploading = ref(false)
const showModal = ref(false)
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  groupName: '',
  groupAnonymousCount: 0,
} as IFormData)

interface IFormData {
  groupName: string,
  groupAnonymousCount: number
}

const emit = defineEmits(['addGroup'])

const rules: FormRules = {
  groupName: {
    type: 'string',
    required: true,
    message: 'Please enter a name for the test group',
    trigger: ['input', 'blur']
  },
  groupAnonymousCount: {
    type: 'number',
    required: true,
    trigger: ['input', 'blur']
  }
}

function openModal() {
  resetForm()
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function resetForm() {
  formValue.value = {
    groupName: '',
    groupAnonymousCount: 0
  }
}

async function addGroup() {
  try {
    await formRef.value?.validate()
  } catch (err) {
    return
  }

  var groupUUID = ''
  try {
    uploading.value = true
    groupUUID = await API.addGroup(
      formValue.value.groupName,
      formValue.value.groupAnonymousCount
    )
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    const group : IGroupView = {
      groupName: formValue.value.groupName,
      groupAnonymousCount: formValue.value.groupAnonymousCount,
      groupTestersCount: 0,
      groupUUID: groupUUID
    }
    console.log(group)
    emit('addGroup', group)
    uploading.value = false
    resetForm()
    closeModal()
  }
}
</script>

<template>
  <n-button size="medium" @click="openModal" type="primary" secondary class="button-add-group">Add group
    <template #icon>
      <n-icon class="icon-no-align">
        <AddRound />
      </n-icon>
    </template>
  </n-button>

  <n-modal v-model:show="showModal">
    <n-card title="Add a new group" style="width: 600px" :bordered="false" size="large" role="dialog" aria-modal="true" >
      <n-spin :show="uploading">

      
      <n-form ref="formRef" :model="formValue" :rules="rules" :disabled="uploading">
        <n-form-item path="groupName" label="Group name">
          <n-input v-model:value="formValue.groupName" placeholder="Default test group" />
        </n-form-item>
        <n-form-item path="groupAnonymousCount" label="Anonymous testers" >
          <n-input-number :min="0" :max="1000" v-model:value="formValue.groupAnonymousCount" style="width: 100%;" />
        </n-form-item>
      </n-form>
    </n-spin>
      <div class="d-flex justify-content-end align-items-center">
        <n-button @click.stop="closeModal" style="margin-right: 0.5rem" ghost>Cancel</n-button>
        <n-button @click.stop="addGroup" type="primary">Add</n-button>
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.button-add-group {
  margin-left: 0.75rem;
  padding-left: 12px;
}

.fade-opacity {
  transition: opacity 0.1s ease-in-out;
}
</style>
