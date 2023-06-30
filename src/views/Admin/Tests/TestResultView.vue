<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import type { Ref } from 'vue'
import { useMessage, NH3, NTabs, NTabPane, NSelect, NTimeline, NTimelineItem, NCollapse, NCollapseItem, type SelectOption } from 'naive-ui'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import type { IXRecordView } from '@/interfaces'
import { useApi } from '@/services/api'
import { useTesterStore } from '@/stores/Admin/testerStore'

const MSG = useMessage()
const API = useApi()
const testerStore = useTesterStore()

const loading: Ref<boolean> = ref(true)
const result: Ref<IXRecordView[]> = ref([])
const selectedTesterUUID: Ref<string> = ref("")
const selectedSessionIndex: Ref<number> = ref(0)

// define props
const props = defineProps({
  testUUID: {
    type: String,
    required: true
  }
})

// define reactive data
watchEffect(() => {
  fetchResult(props.testUUID)
})

async function fetchResult(testUUID: string) {
  try {
    loading.value = true

    // await all at once
    const [, recordsRaw] = await Promise.all([
      testerStore.fetchTesters(),
      API.getTestResult(testUUID)
    ])

    result.value = recordsRaw;

    if (listTesterUUID.value.length > 0)
      selectedTesterUUID.value = listTesterUUID.value[0]
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
}

function getType(record: IXRecordView): "default" | "success" | "error" | "warning" | "info" | undefined {
  if (record.completion || record.duration || record.response || record.scoreRaw || record.scoreScaled || record.success)
    return "info"
  return "default"
}

const displayResult = computed(() => {
  if (result.value.length === 0)
    return []

  const displayResult: (IXRecordView | IXRecordView[])[] = []

  // when two or more following items have the same verb and object, replace them with an array of type IXRecordView[]
  for (let i = 0; i < testerSessionResults.value[selectedSessionIndex.value].length; i++) {
    const item = testerSessionResults.value[selectedSessionIndex.value][i]
    if (i > 0 && item.verb.verbID === testerSessionResults.value[selectedSessionIndex.value][i - 1].verb.verbID && item.object.objectID === testerSessionResults.value[selectedSessionIndex.value][i - 1].object.objectID) {
      const arr = [testerSessionResults.value[selectedSessionIndex.value][i - 1], item]
      while (i + 1 < testerSessionResults.value[selectedSessionIndex.value].length && item.verb.verbID === testerSessionResults.value[selectedSessionIndex.value][i + 1].verb.verbID && item.object.objectID === testerSessionResults.value[selectedSessionIndex.value][i + 1].object.objectID) {
        arr.push(testerSessionResults.value[selectedSessionIndex.value][++i])
      }
      // pop last item from displayResult
      displayResult.pop()
      displayResult.push(arr)
    }
    else {
      displayResult.push(item)
    }
  }

  return displayResult
})

// get results of a tester by testerUUID
const selectedTesterResult = computed(() => {
  if (result.value.length === 0)
    return []

  return result.value.filter((item) => item.testerUUID === selectedTesterUUID.value).sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  })
})



// get list of unique testerUUID
const listTesterUUID = computed(() => {
  if (result.value.length === 0)
    return []

  const list = result.value.map((item) => item.testerUUID)
  return [...new Set(list)]
})

const testerDetails = computed(() => {
  if (result.value.length === 0)
    return []

  var index = 1;
  return listTesterUUID.value.map((testerUUID) => {
    return testerStore.readDetails(testerUUID) ?? {
      testerUUID: testerUUID,
      firstname: "Anonymous",
      lastname: "Tester" + index++,
    }
  })
})

const selectOptions = computed(() => {
  if (result.value.length === 0)
    return []
  return testerDetails.value.map((tester) => {
    return {
      label: tester.firstname + " " + tester.lastname,
      value: tester.testerUUID
    }
  })
})

const testerSessionResults = computed(() => {
  if (result.value.length === 0)
    return []
  // split selectedTesterResult into array of array of IXRecordView
  const testerSessionResults: IXRecordView[][] = []
  let session: IXRecordView[] = []
  selectedTesterResult.value.map((item) => {
    if (item.verb.display === "Started" && item.object.name === "Course") {
      if (session.length > 0) {
        testerSessionResults.push(session)
        session = []
      }
    }
    else {
      session.push(item)
    }
  })
  if (session.length > 0)
    testerSessionResults.push(session)
  return testerSessionResults
})

// generate session options 
const sessionOptionss = computed(() => {
  if (result.value.length === 0)
    return []
  const options: SelectOption[] = []
  testerSessionResults.value.map((session, index) => {
    options.push({
      label: `Session #${index + 1}: ${new Date(session[0].timestamp).toLocaleString()} (${session.length} record${session.length > 1 ? "s" : ""})`,
      value: index
    })
  })
  return options
})

</script>

<template>
  <!-- Loading state -->
  <LoadingHeader v-if="loading" />
  <div v-else>
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center">
          <BackButton />
          <n-h3 class="h3-item-name">Test results</n-h3>
        </div>
      </div>
    </div>
    <div class="row">
      <n-tabs type="line" animated placement="top" style="width: 100%;">
        <template #prefix>
          <span style="color: var(--gray-2); margin-right: 1.5rem;">
            View results as:
          </span>
        </template>
        <n-tab-pane name="raw" tab="Raw">
          <pre>{{ JSON.stringify(displayResult, null, 2) }}</pre>
        </n-tab-pane>
        <n-tab-pane name="master-flow" tab="Master Flow">
          Master flow
        </n-tab-pane>
        <n-tab-pane name="tester-timeline" tab="Tester timeline">
          <div class="row">
            <div class="col-8">
              <n-timeline>
                <n-timeline-item type="success" title="START"/>

                <n-timeline-item v-for="record in displayResult"
                  :key="('recordUUID' in record) ? record.recordUUID : (record[0].recordUUID)"
                  :type="('recordUUID' in record) ? getType(record) : 'warning'"
                  :title="('recordUUID' in record) ? record.verb.display + ': ' + record.object.name : record[0].verb.display + ': ' + record[0].object.name"
                  :time="('recordUUID' in record) ? new Date(record.timestamp).toLocaleString() : undefined">
                  <n-collapse v-if="Array.isArray(record)" arrow-placement="right">
                    <n-collapse-item :title="'Total ' + record.length + 'x times'" name="1">
                      <n-timeline>
                        <n-timeline-item v-for="subrecord in record" :key="subrecord.recordUUID"
                          :type="getType(subrecord)"
                          :time="new Date(subrecord.timestamp).toLocaleString()" />
                      </n-timeline>
                    </n-collapse-item>
                  </n-collapse>
                </n-timeline-item>
                <n-timeline-item type="error" title="END"/>
              </n-timeline>
            </div>
            <div class="col-4">
              <n-select v-model:value="selectedTesterUUID" filterable placeholder="Please select a tester"
                :options="selectOptions" />
              <n-select v-model:value="selectedSessionIndex" filterable placeholder="Please select a session"
                :options="sessionOptionss" />
            </div>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped></style>
