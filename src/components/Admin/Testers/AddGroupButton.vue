<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { NButton, NIcon, NModal, NCard, NForm, NFormItem, NInput, useMessage, NSpin } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'
import { AddRound } from '@vicons/material'
import { useGroupStore } from '@/stores/Admin/groupStore'

const store = useGroupStore()
const MSG = useMessage()

const uploading: Ref<boolean> = ref(false)
const showModal: Ref<boolean> = ref(false)
const formRef: Ref<FormInst | null> = ref(null)
const formValue: Ref<IFormData> = ref({ groupName: '' })

interface IFormData {
  groupName: string,
}

const rules: FormRules = {
  groupName: {
    type: 'string',
    required: true,
    message: 'Please enter a name for the test group',
    trigger: ['input', 'blur']
  }
}

function openModal(): void {
  resetForm()
  showModal.value = true
}

function closeModal(): void {
  showModal.value = false
}

function resetForm(): void {
  formValue.value = {
    groupName: ''
  }
}

async function addGroup() {
  try {
    await formRef.value?.validate()
  } catch (err) {
    return
  }

  try {
    uploading.value = true
    await store.addGroup(formValue.value.groupName)
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
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
    <n-card title="Add a new group" style="width: 600px" :bordered="false" size="large" role="dialog" aria-modal="true">
      <n-spin :show="uploading">
        <n-form ref="formRef" :model="formValue" :rules="rules" :disabled="uploading">
          <n-form-item path="groupName" label="Group name">
            <n-input v-model:value="formValue.groupName" placeholder="Default test group" />
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
