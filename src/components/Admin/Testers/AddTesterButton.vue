<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import {
  NButton,
  NIcon,
  NModal,
  NCard,
  NForm,
  NFormItem,
  NInput,
  useMessage,
  NSpin
} from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'
import { AddRound } from '@vicons/material'
import { useTesterStore } from '@/stores/Admin/testerStore'

const store = useTesterStore()
const MSG = useMessage()

const feedback: ComputedRef<boolean> = computed(() => {
  return (
    formValue.value.firstname == '' && formValue.value.lastname == '' && formValue.value.email == ''
  )
})

const uploading: Ref<boolean> = ref(false)
const showModal: Ref<boolean> = ref(false)
const formRef: Ref<FormInst | null> = ref(null)
const formValue: Ref<IFormData> = ref({ firstname: '', lastname: '', email: '' })

interface IFormData {
  firstname: string
  lastname: string
  email: string
}

const rules: FormRules = {
  firstname: {
    type: 'string',
    required: false,
    trigger: ['input', 'blur']
  },
  lastname: {
    required: false,
    trigger: ['input', 'blur']
  },
  email: {
    type: 'email',
    required: false,
    message: 'Please enter a valid email address',
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
    firstname: '',
    lastname: '',
    email: ''
  }
}

async function addTester(): Promise<void> {
  try {
    await formRef.value?.validate()
  } catch (err) {
    return
  }

  if (
    formValue.value.firstname == '' &&
    formValue.value.lastname == '' &&
    formValue.value.email == ''
  ) {
    return
  }

  try {
    uploading.value = true
    await store.addTester(
      formValue.value.firstname,
      formValue.value.lastname,
      formValue.value.email
    )
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
  <n-button size="medium" @click="openModal" type="primary" secondary class="button-add-tester"
    >Add user
    <template #icon>
      <n-icon class="icon-no-align">
        <AddRound />
      </n-icon>
    </template>
  </n-button>

  <n-modal v-model:show="showModal">
    <n-card
      title="Add a new user"
      style="width: 600px"
      :bordered="false"
      size="large"
      role="dialog"
      aria-modal="true"
    >
      <n-spin :show="uploading">
        <n-form ref="formRef" :model="formValue" :rules="rules" :disabled="uploading">
          <n-form-item path="firstname" label="First name">
            <n-input v-model:value="formValue.firstname" placeholder="John" />
          </n-form-item>
          <n-form-item path="lastname" label="Last name">
            <n-input v-model:value="formValue.lastname" placeholder="Doe" />
          </n-form-item>
          <n-form-item path="email" label="Email">
            <n-input v-model:value="formValue.email" placeholder="john@doe.com" />
          </n-form-item>
        </n-form>
      </n-spin>
      <div class="d-flex justify-content-end align-items-center">
        <div
          class="feedback fade-opacity w-100"
          :style="{ opacity: feedback && !uploading && showModal ? '1' : '0' }"
        >
          Please enter at least one field
        </div>
        <n-button @click.stop="closeModal" style="margin-right: 0.5rem" ghost>Cancel</n-button>
        <n-button @click.stop="addTester" type="primary">Add</n-button>
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.button-add-tester {
  margin-left: 0.75rem;
  padding-left: 12px;
}

.feedback {
  color: var(--error-color);
}

.fade-opacity {
  transition: opacity 0.1s ease-in-out;
}
</style>
