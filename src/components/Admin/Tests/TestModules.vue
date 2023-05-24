<script setup lang="ts">
import { ref } from 'vue'
import { useMessage, NCard, NH4, NButton, NH3, NSpin, NForm, NFormItem, NInput, NSelect, NRadioGroup, NRadioButton, NDatePicker } from 'naive-ui'
import { useRouter, type Router } from 'vue-router'
import { useApi } from '@/services/api'

function getModuleName(id: number) {
  const moduleNames: string[] = [
    'Unknown',
    'I/O Test',
    'I/O Evaluation',
    'Timed retency',
    'Feedback',
    'Live comments'
  ]
  // check if id is valid
  if (id < 0 || id >= moduleNames.length) return moduleNames[0]
  return moduleNames[id]
}

const router: Router = useRouter()
const MSG = useMessage()
const API = useApi()

const props = defineProps({
  modules: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <n-card>
    <template #header>
      <n-h4 class="h2-item-name">Test modules</n-h4>
      <n-form>{{ props.modules }}</n-form>
    </template>
  </n-card>
</template>
