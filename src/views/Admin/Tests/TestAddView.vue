<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMessage, NButton, NH3, NSpin, NCard, NForm, NFormItem, NInput, NSelect, NRadioGroup, NRadioButton, NDatePicker } from 'naive-ui'
import type { FormInst, SelectOption, FormRules, FormItemRule } from 'naive-ui'
import { useRouter } from 'vue-router'

import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import { useApi } from '@/services/api'
import type { ICourseView, EndType } from '@/interfaces'

const router = useRouter()
const MSG = useMessage()
const API = useApi()

const loading = ref(true)
const error = ref(false)
const uploading = ref(false)

const formRef = ref<FormInst | null>(null)
const formValue = ref({
  courseUUID: null,
  name: '',
  endType: 'MANUAL',
  startAt: new Date().getTime(),
  startAtEndAt: [new Date().getTime(), new Date().getTime() + 7 * 24 * 60 * 60 * 1000]
} as IFormData)

interface IFormData {
  courseUUID: string | null,
  name: string,
  endType: EndType,
  startAt: number
  startAtEndAt: [number, number]
}

const rules: FormRules = {
  courseUUID: {
    required: true,
    message: 'Please select a course from the list',
    trigger: ['input', 'blur']
  },
  name: {
    required: true,
    message: 'Please enter a name for the test',
    trigger: ['input', 'blur']
  },
  endType: {
    required: true,
    message: 'Please select an end type',
    trigger: ['input', 'blur']
  },
  startAt: {
    type: 'number',
    message: 'Please select a start time',
    trigger: ['input', 'blur']
  },
  startAtEndAt: {
    type: 'array',
    validator (rule: FormItemRule, value: [number, number]) {
      return value[1] > new Date().getTime()
    },
    message: 'The test must end in the future',
    trigger: ['input', 'blur']
  }
}

const courseOptions = ref<SelectOption[]>([])

// define props
const props = defineProps({
  courseUUID: {
    type: String,
    required: false
  }
})

async function addTest(e: MouseEvent) {
  e.preventDefault()
  try {
    await formRef.value?.validate()
  } catch (err) {
    return
  }

  try {
    uploading.value = true
    const testUUID = await API.addTest(
      formValue.value.courseUUID ?? '',
      formValue.value.name,
      formValue.value.endType,
      formValue.value.startAt,
      formValue.value.startAtEndAt[1]
    )
    router.push({ name: 'testDetail', params: { testUUID } })
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    uploading.value = false
  }
}

function cancel() {
  router.back()
}

onMounted(async () => {
  try {
    loading.value = true
    const courses: ICourseView[] = await API.getCourseList()
    courseOptions.value = courses.map((course) => {
      return {
        label: course.name + ' (ver. ' + course.version + ', ' + course.author + ')',
        value: course.courseUUID
      }
    })
    // try to set the default value
    if (props.courseUUID) {
      const course = courses.find((course) => course.courseUUID === props.courseUUID)
      if (course) {
        formValue.value.courseUUID = course.courseUUID
        formValue.value.name = `Test of '${course.name}' (version ${course.version})`
      }
    }
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <!-- Loading state -->
  <LoadingHeader v-if="loading" />

  <!-- Loaded state -->
  <div v-else>
    <div class="row">
      <div class="col-12 d-flex align-items-center">
        <BackButton />
        <n-h3 class="h3-item-name">Adding a new test</n-h3>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-sm-8 offset-sm-2 d-flex align-items-center">
        <n-spin :show="uploading" style="width: 100%;">
          <n-card style="width: 100%;">

            <n-form ref="formRef" :model="formValue" :rules="rules">
              <n-form-item path="courseUUID" label="Course">
                <n-select v-model:value="formValue.courseUUID" filterable :options="courseOptions"
                  placeholder="Select a course" />
              </n-form-item>
              <n-form-item path="name" label="Test name">
                <n-input v-model:value="formValue.name" placeholder="Test Name" />
              </n-form-item>
              <n-form-item path="endType" label="When should the test end?">
                <div class="d-flex flex-row flex-wrap align-items-center">
                  <n-radio-group v-model:value="formValue.endType" name="RBG1" style="margin-right: 1rem;">
                    <n-radio-button value="MANUAL" label="Manually" />
                    <n-radio-button value="PLAN" label="Scheduled" />
                  </n-radio-group>
                  <div class="m-1">
                    {{ formValue.endType == 'MANUAL' ?
                      'The test will be open until you close it. You can do this in the test details.' :
                      'The test will close itself when you specify it. We will notify you when this happens.' }}
                  </div>
                </div>
              </n-form-item>
              <n-form-item v-if="formValue.endType == 'MANUAL'" path="startAt" label="Test will start at:">
                <n-date-picker v-model:value="formValue.startAt" type="datetime" :on-change="() => {formValue.startAtEndAt[0] = formValue.startAt}"/>
              </n-form-item>
              <n-form-item v-else path="startAtEndAt" label="Test will be accesible during:">
                <n-date-picker v-model:value="formValue.startAtEndAt" type="datetimerange" :on-change="() => {formValue.startAt = formValue.startAtEndAt[0]}"/>
              </n-form-item>
            </n-form>

            <template #action>
              <div class="d-flex justify-content-end">
                <n-button @click="cancel" style="margin-right: 0.5rem" ghost :disabled="error">Cancel</n-button>
                <n-button @click="addTest" type="primary" :disabled="error">Add</n-button>
              </div>
            </template>
          </n-card>
        </n-spin>
      </div>
    </div>
  </div>
</template>