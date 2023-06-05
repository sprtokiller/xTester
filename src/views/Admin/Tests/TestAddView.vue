<script setup lang="ts">
import { ref, onMounted, h, watchEffect } from 'vue'
import type { Ref } from 'vue'
import { useMessage, NButton, NH3, NSpin, NCard, NForm, NFormItem, NInput, NSelect, NRadioGroup, NRadioButton, NDatePicker, NTable, NIcon, NSpace, NInputNumber, NDescriptions, NDescriptionsItem } from 'naive-ui'
import type { FormInst, SelectOption, FormRules, FormItemRule } from 'naive-ui'
import { useRouter } from 'vue-router'
import { PersonFilled } from '@vicons/material'
import { useTesterStore } from '@/stores/Admin/testerStore'
import { useGroupStore } from '@/stores/Admin/groupStore'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import { useApi } from '@/services/api'
import type { ICourseView, EndType, ITester, IGroupView } from '@/interfaces'
import dayjs from 'dayjs'

const router = useRouter()
const MSG = useMessage()
const API = useApi()
const testerStore = useTesterStore()
const groupStore = useGroupStore()

const loading: Ref<boolean> = ref(true)
const error: Ref<boolean> = ref(false)
const uploading: Ref<boolean> = ref(false)
const step: Ref<number> = ref(1)
const msgOpacity: Ref<number> = ref(0)
const courseName: Ref<string> = ref('')
const formatedTime: Ref<string> = ref('')
const previewTesters: Ref<ITester[]> = ref([])

const courseOptions: Ref<SelectOption[]> = ref([])
const testerOptions: Ref<SelectOption[]> = ref([])
const groupOptions: Ref<SelectOption[]> = ref([])

const formRef1: Ref<FormInst | null> = ref(null)
const formRef2: Ref<FormInst | null> = ref(null)

const formValue1: Ref<IFormData1> = ref({
  courseUUID: null,
  name: '',
  endType: 'MANUAL',
  startAt: new Date().getTime(),
  startAtEndAt: [new Date().getTime(), new Date().getTime() + 7 * 24 * 60 * 60 * 1000]
})

const formValue2: Ref<IFormData2> = ref({
  testerUUIDs: [],
  groupUUIDs: [],
  anonymousTesterCount: 0,
})

interface IFormData1 {
  courseUUID: string | null,
  name: string,
  endType: EndType,
  startAt: number
  startAtEndAt: [number, number]
}

interface IFormData2 {
  testerUUIDs: string[],
  groupUUIDs: string[],
  anonymousTesterCount: number
}

const rules1: FormRules = {
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
    validator(rule: FormItemRule, value: [number, number]) {
      return value[1] > new Date().getTime() && value[1] > value[0]
    },
    message: 'The test must end in the future',
    trigger: ['input', 'blur']
  }
}

const rules2: FormRules = {
  testerUUIDs: {
    type: 'array',
    trigger: ['input', 'blur'],
    validator() {
      msgOpacity.value = (formValue2.value?.testerUUIDs.length + formValue2.value?.groupUUIDs.length + formValue2.value?.anonymousTesterCount === 0) ? 1 : 0
      return true
    },
  },
  groupUUIDs: {
    type: 'array',
    trigger: ['input', 'blur'],
    validator() {
      msgOpacity.value = (formValue2.value?.testerUUIDs.length + formValue2.value?.groupUUIDs.length + formValue2.value?.anonymousTesterCount === 0) ? 1 : 0
      return true
    },
  },
  anonymousTesterCount: {
    type: 'number',
    trigger: ['input', 'blur'],
    validator() {
      msgOpacity.value = (formValue2.value?.testerUUIDs.length + formValue2.value?.groupUUIDs.length + formValue2.value?.anonymousTesterCount === 0) ? 1 : 0
      return true
    },
  }
}

function renderLabel(option: SelectOption) {
  return [
    option.label as string,
    h('span', { style: { color: 'var(--gray-3)', marginLeft: '0.5rem' } }, [
      (option as any).nCount,
      h(NIcon, { size: 'medium', style: { verticalAlign: '-0.15em' } }, { default: () => h(PersonFilled) }),
    ])
  ]
}

// define props
const props = defineProps({
  courseUUID: {
    type: String,
    required: false
  }
})

async function goToStep(newStep: number, validateStep: number | null = null) {
  try {
    switch (validateStep) {
      case 1:
        await formRef1.value?.validate()
        break;
      case 2:
        await formRef2.value?.validate()
        if (msgOpacity.value === 1) return
        break;
      default:
        break;
    }
  } catch (err) {
    return
  }

  step.value = newStep
  if (newStep === 3) preview()
}

async function preview() {
  // find the course name from the courseUUID in the courseOptions
  courseName.value = courseOptions.value.find(course => course.value === formValue1.value.courseUUID)?.label as string
  formatedTime.value = dayjs(formValue1.value.startAt).format('YYYY-MM-DD HH:mm:ss') + ' - ' + dayjs(formValue1.value.startAtEndAt[1]).format('YYYY-MM-DD HH:mm:ss')
  try {
    uploading.value = true
    previewTesters.value = await API.getTesterPreview(formValue2.value.testerUUIDs, formValue2.value.groupUUIDs)
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    uploading.value = false
  }
}

async function addTest() {
  try {
    uploading.value = true
    const testUUID = await API.addTest(
      formValue1.value.courseUUID ?? '',
      formValue1.value.name,
      formValue1.value.endType,
      formValue1.value.startAt,
      formValue1.value.startAtEndAt[1],
      formValue2.value.anonymousTesterCount,
      previewTesters.value.map(tester => tester.testerUUID)
    )
    // router.push({ name: 'testingDetail', params: { testUUID } })
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    uploading.value = false
  }
}

function cancel() {
  router.back() 
}

watchEffect(() => {
  if (formValue1.value.endType != 'MANUAL') {
    if (formValue1.value.startAtEndAt[0] < new Date().getTime()) {
      formValue1.value.startAtEndAt[0] = new Date().getTime()
      formValue1.value.startAtEndAt[1] = new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    }
    formValue1.value.startAt = formValue1.value.startAtEndAt[0]
  }
})

watchEffect(() => {
  if (formValue1.value.endType == 'MANUAL') {
    if (formValue1.value.startAt < new Date().getTime()) {
      formValue1.value.startAt = new Date().getTime()
    }

    formValue1.value.startAtEndAt[0] = formValue1.value.startAt
    formValue1.value.startAtEndAt[1] = formValue1.value.startAt + 7 * 24 * 60 * 60 * 1000
  }
})


onMounted(async () => {
  try {
    loading.value = true
    const data = await Promise.all([
      API.getCourseList(),
      API.getTesterList(),
      API.getGroupList()
    ])

    // set the stores
    testerStore.testers = data[1] as ITester[]
    groupStore.groups = data[2] as IGroupView[]

    courseOptions.value = (data[0] as ICourseView[]).map((course) => {
      return {
        label: course.name + ' (ver. ' + course.version + ', ' + course.author + ')',
        value: course.courseUUID
      }
    })

    testerOptions.value = (data[1] as ITester[]).map((tester) => {
      return {
        value: tester.testerUUID,
        label: tester.firstname + ' ' + tester.lastname + ' (' + tester.email + ')'
      }
    })

    groupOptions.value = (data[2] as IGroupView[]).map((group) => {
      return {
        label: group.groupName,
        value: group.groupUUID,
        nCount: group.groupTestersCount
      }
    })

    // try to set the default value
    if (props.courseUUID) {
      const course = data[0].find((course) => course.courseUUID === props.courseUUID)
      if (course) {
        formValue1.value.courseUUID = course.courseUUID
        formValue1.value.name = `Test of '${course.name}' (version ${course.version})`
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
      <div class="col-12 col-lg-8 offset-lg-2 d-flex align-items-center">
        <n-spin :show="uploading" style="width: 100%;">
          <!-- 1st step -->
          <n-card style="width: 100%;" v-if="step === 1" title="Step 1: Settings">
            <n-form ref="formRef1" :model="formValue1" :rules="rules1">
              <n-space vertical>
                <n-form-item path="courseUUID" label="Course">
                  <n-select v-model:value="formValue1.courseUUID" filterable :options="courseOptions"
                    placeholder="Select a course" />
                </n-form-item>
                <n-form-item path="name" label="Test name">
                  <n-input v-model:value="formValue1.name" placeholder="Test Name" />
                </n-form-item>
                <n-form-item path="endType" label="When should the test end?">
                  <div class="d-flex flex-row flex-wrap align-items-center">
                    <n-radio-group v-model:value="formValue1.endType" name="RBG1" style="margin-right: 1rem;">
                      <n-radio-button value="MANUAL" label="Manually" />
                      <n-radio-button value="PLAN" label="Scheduled" />
                    </n-radio-group>
                    <div class="m-1">
                      {{ formValue1.endType == 'MANUAL' ?
                        'The test will be open until you close it. You can do this in the test details.' :
                        'The test will close itself when you specify it. We will notify you when this happens.' }}
                    </div>
                  </div>
                </n-form-item>
                <n-form-item v-if="formValue1.endType == 'MANUAL'" path="startAt" label="Test will start at:">
                  <n-date-picker v-model:value="formValue1.startAt" type="datetime" />
                </n-form-item>
                <n-form-item v-else path="startAtEndAt" label="Test will be accesible during:">
                  <n-date-picker v-model:value="formValue1.startAtEndAt" type="datetimerange" />
                </n-form-item>
              </n-space>
            </n-form>

            <template #action>
              <div class="d-flex justify-content-end">
                <n-button @click.stop="cancel" style="margin-right: 0.5rem" ghost :disabled="error">Cancel</n-button>
                <n-button @click.stop="goToStep(2, 1)" type="primary" :disabled="error">Continue</n-button>
              </div>
            </template>
          </n-card>

          <!-- 2nd step -->
          <n-card style="width: 100%;" v-if="step === 2" title="Step 2: Select testers">
            <n-form ref="formRef2" :model="formValue2" :rules="rules2">
              <n-space vertical>
                <span class="hint-label">Select testers or entire tester groups. Overlaps will be merged.</span>
                <n-form-item path="testerUUIDs" label="Testers">
                  <n-select v-model:value="formValue2.testerUUIDs" filterable multiple :options="testerOptions"
                    placeholder="Select testers" />
                </n-form-item>
                <n-form-item path="groupUUIDs" label="Groups">
                  <n-select v-model:value="formValue2.groupUUIDs" filterable multiple :options="groupOptions"
                    :render-label="renderLabel" placeholder="...or groups" />
                </n-form-item>
                <span class="hint-label">You can also add anonymous testers, but you will have to send them the link to
                  the test manually.</span>
                <n-form-item path="anonymousTesterCount" label="Anonymous testers">
                  <n-input-number :min="0" :max="1000" v-model:value="formValue2.anonymousTesterCount"
                    style="width: 100%;" />
                </n-form-item>
                <span class="error-label fade-opacity" :style="{ opacity: msgOpacity }">Please add some testers to your
                  test.</span>
              </n-space>
            </n-form>

            <template #action>
              <div class="d-flex justify-content-between">
                <n-button @click.stop="goToStep(1)" style="margin-right: 0.5rem" ghost :disabled="error">Back</n-button>
                <div>
                  <n-button @click="cancel" style="margin-right: 0.5rem" ghost :disabled="error">Cancel</n-button>
                  <n-button @click="goToStep(3, 2)" type="primary" :disabled="error">Preview</n-button>
                </div>
              </div>
            </template>
          </n-card>

          <!-- 3rd step -->
          <n-card style="width: 100%;" v-if="step === 3" title="Step 3: Overview">
            <n-space vertical>
              <n-descriptions label-placement="left" bordered size="small">
                <n-descriptions-item label="Course:">
                  {{ courseName }}
                </n-descriptions-item>
                <n-descriptions-item label="Test name:">
                  {{ formValue1.name }}
                </n-descriptions-item>
                <n-descriptions-item label="Author:">
                  {{ formValue1.endType == 'MANUAL' ? 'Manually' : 'Scheduled' }}
                </n-descriptions-item>
                <n-descriptions-item label="Time:">
                  {{ formatedTime }}
                </n-descriptions-item>
                <n-descriptions-item label="Anonymous testers:">
                  {{ formValue2.anonymousTesterCount }}
                </n-descriptions-item>
              </n-descriptions>
              <n-table striped>
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tester in previewTesters" :key="tester.testerUUID">
                    <td>{{ tester.firstname }}</td>
                    <td>{{ tester.lastname }}</td>
                    <td>{{ tester.email }}</td>
                  </tr>
                </tbody>
              </n-table>
            </n-space>
            <template #action>
              <div class="d-flex justify-content-between">
                <n-button @click.stop="goToStep(2)" style="margin-right: 0.5rem" ghost :disabled="error">Back</n-button>
                <div>
                  <n-button @click="cancel" style="margin-right: 0.5rem" ghost :disabled="error">Cancel</n-button>
                  <n-button @click="addTest" type="primary" :disabled="error">Add test</n-button>
                </div>
              </div>
            </template>
          </n-card>
        </n-spin>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hint-label {
  padding-left: 2px;
  font-style: italic;
}

.error-label {
  padding-left: 2px;
  color: var(--error-color)
}
</style>