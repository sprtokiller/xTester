<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import type { Ref } from 'vue'
import { useMessage, NButton, NH3, NSpin, NCard, NForm, NFormItem, NInput, NSelect, NRadioGroup, NRadioButton, NDatePicker, NIcon } from 'naive-ui'
import type { FormInst, SelectOption, FormRules, FormItemRule } from 'naive-ui'
import { useRouter } from 'vue-router'
import { PersonFilled, PersonOffFilled } from '@vicons/material'

import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import { useApi } from '@/services/api'
import type { ICourseView, EndType } from '@/interfaces'

const router = useRouter()
const MSG = useMessage()
const API = useApi()

const loading: Ref<boolean> = ref(true)
const error: Ref<boolean> = ref(false)
const uploading: Ref<boolean> = ref(false)

const formRef: Ref<FormInst | null> = ref(null)
const formValue: Ref<IFormData> = ref({
  courseUUID: null,
  name: '',
  groupUUIDs: [],
  endType: 'MANUAL',
  startAt: new Date().getTime(),
  startAtEndAt: [new Date().getTime(), new Date().getTime() + 7 * 24 * 60 * 60 * 1000]
})

interface IFormData {
  courseUUID: string | null,
  name: string,
  groupUUIDs: string[],
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
  groupUUIDs: {
    type: 'array',
    required: true,
    message: 'Please select at least one group',
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
    validator(rule: FormItemRule, value: [number, number]) {
      return value[1] > new Date().getTime() && value[1] > value[0]
    },
    message: 'The test must end in the future',
    trigger: ['input', 'blur']
  }
}

/**
 *               <span style="color: var(--gray-3); margin-left: 0.5rem;">
                {{ group.groupTestersCount }}
                <n-icon size="medium">
                  <PersonFilled style="vertical-align: bottom !important;" />
                </n-icon>
              </span>
 */

function renderLabel(option: SelectOption) {
  return [
    option.label as string,
    h('span', { style: { color: 'var(--gray-3)', marginLeft: '0.5rem' } }, [
      (option as any).nCount,
      h(NIcon, {size: 'medium', style: { verticalAlign: '-0.15em' } }, { default: () => h(PersonFilled) }),
    ]),
    h('span', { style: { color: 'var(--gray-3)', marginLeft: '0.5rem' } }, [
      (option as any).aCount,
      h(NIcon, {size: 'medium', style: { verticalAlign: '-0.15em' } }, { default: () => h(PersonOffFilled) }),
    ]),
  ]
}

const courseOptions: Ref<SelectOption[]> = ref([])
const groupOptions: Ref<SelectOption[]> = ref([])

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
    router.push({ name: 'testingDetail', params: { testUUID } })
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    uploading.value = false
  }
}

function cancel() {
  router.back()
}

function rewriteStartAt() {
  formValue.value.startAt = formValue.value.startAtEndAt[0]
}

function rewriteStartAtEndAt() {
  formValue.value.startAtEndAt[0] = formValue.value.startAt
  formValue.value.startAtEndAt[1] = formValue.value.startAt + 7 * 24 * 60 * 60 * 1000
}

onMounted(async () => {
  try {
    loading.value = true
    // get the list of groups TODO: store
    groupOptions.value = (await API.getGroupList()).map((group) => {
      return {
        label: group.groupName,
        value: group.groupUUID,
        nCount: group.groupTestersCount,
        aCount: group.groupAnonymousCount
      }
    })
    // get the list of courses
    const courses: ICourseView[] = await API.getCourseList()
    courseOptions.value = (courses).map((course) => {
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
              <n-form-item path="groupUUIDs" label="Groups">
                <n-select v-model:value="formValue.groupUUIDs" filterable multiple :options="groupOptions"
                  :render-label="renderLabel" placeholder="Select groups" />
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
                <n-date-picker v-model:value="formValue.startAt" type="datetime" v-on:change="rewriteStartAtEndAt" />
                <!-- TestAddView.vue:128 [naive/date-picker]: `on-change` is deprecated, please use `on-update:value` instead. //TODO: -->
              </n-form-item>
              <n-form-item v-else path="startAtEndAt" label="Test will be accesible during:">
                <n-date-picker v-model:value="formValue.startAtEndAt" type="datetimerange" v-on:change="rewriteStartAt" />
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