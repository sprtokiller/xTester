<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import type { Ref } from 'vue'
import { useMessage, NH3, NH4, NIcon, NTabs, NTabPane, NDataTable, NSelect, NEmpty, NTimeline, NDescriptions, NDescriptionsItem, NTimelineItem, NCollapse, NCard, NCollapseItem, type SelectOption } from 'naive-ui'
import BackButton from '@/components/Admin/BackButton.vue'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import type { IXRecordView, ITester } from '@/interfaces'
import { useApi } from '@/services/api'
import { useTesterStore } from '@/stores/Admin/testerStore'
import { RemoveRedEyeFilled, AdsClickFilled } from '@vicons/material'

const MSG = useMessage()
const API = useApi()
const testerStore = useTesterStore()

const loading: Ref<boolean> = ref(true)
const result: Ref<IXRecordView[]> = ref([])
const sTI: Ref<number> = ref(-1)
const sSI: Ref<number> = ref(-1)
const sFN: Ref<flowNode | undefined> = ref(undefined)
const tab: Ref<string | number | undefined> = ref(undefined)
const highlightedRecordUUID: Ref<string | undefined> = ref(undefined)

interface flowNodeBase {
  verbID: string
  objectID: string
  verbDisplay: string,
  objectName: string,
  label: string
  nodeUUID: string
}

interface flowNode extends flowNodeBase {
  in: string[],
  out: string[],
  records: IXRecordView[]
}

interface rowData {
  key: string,
  tester: string,
  session: number,
  durationPast: string,
  durationFuture: string,
  durationTotal: string,
  sID: number,
  tID: number,
  durationPastRaw: number,
  durationFutureRaw: number,
  durationTotalRaw: number
}

const rowProps = (row: rowData) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      highlightedRecordUUID.value = row.key
      tab.value = "tester-timeline"
      sTI.value = row.tID
      sSI.value = row.sID
    }
  }
}

const columns = [
  { title: 'Tester', key: 'tester' },
  { title: 'Session', key: 'session' },
  { title: 'Time since last', key: 'durationPast' },
  { title: 'Time till next', key: 'durationFuture' },
  { title: 'Elapsed', key: 'durationTotal' }
]

// define props
const props = defineProps({ testUUID: { type: String, required: true } })

// define reactive data
watchEffect(() => { fetchResult(props.testUUID) })
watchEffect(() => { sTI })
async function fetchResult(testUUID: string) {
  try {
    loading.value = true

    // await all at once
    const [, recordsRaw] = await Promise.all([
      testerStore.fetchTesters(),
      API.getTestResult(testUUID)
    ])

    result.value = recordsRaw;

    if (listTesterUUID.value.length > 0) {
      sTI.value = 0
      sSI.value = 0
    }

    if (flowNodes.value.length > 0) {
      // try to find the Started Course flow node
      const startedCourse = flowNodes.value.find((node) => node.label === "START")
      startedCourse ? sFN.value = startedCourse : sFN.value = flowNodes.value[0]
    }
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
}

// returns the type of the visual representation of a record
function getType(record: IXRecordView): "default" | "success" | "error" | "warning" | "info" | undefined {
  if (record.completion || record.duration || record.response || record.scoreRaw || record.scoreScaled || record.success)
    return "info"
  return "default"
}

// tests if two records have the same verb and object
function isVOsame(record1: IXRecordView | flowNode, record2: IXRecordView | flowNode): boolean {
  return record1.verbID === record2.verbID && record1.objectID === record2.objectID
}

// parses data into a structure useful for displaying the timeline
const displayResult = computed(() => {
  if (rrrData.value.length === 0) {
    return []
  }
  const displayResult: (IXRecordView | IXRecordView[])[] = []

  // when two or more following items have the same verb and object, replace them with an array of type IXRecordView[]
  for (let i = 0; i < rrrData.value[sTI.value][sSI.value].length; i++) {
    const item = rrrData.value[sTI.value][sSI.value][i]
    if (i > 0 && isVOsame(item, rrrData.value[sTI.value][sSI.value][i - 1])) {
      const arr = [rrrData.value[sTI.value][sSI.value][i - 1], item]
      while (i + 1 < rrrData.value[sTI.value][sSI.value].length && isVOsame(item, rrrData.value[sTI.value][sSI.value][i + 1])) {
        arr.push(rrrData.value[sTI.value][sSI.value][++i])
      }
      // pop last item from displayResult
      displayResult.pop()
      displayResult.push(arr)
    }
    else {
      displayResult.push(item)
    }
  }

  return displayResult.slice(1) // omit the first (Started Course) item
})

// creates a list of unique Verb-Object pairs
const uniqueVOrecords = computed(() => {
  // create a set of unique records
  var VOSet = new Set<string>()
  var uniqueVOrecords: flowNodeBase[] = []
  result.value.forEach(record => {
    const key = record.verbID + record.objectID
    if (!VOSet.has(key)) {
      VOSet.add(key);
      uniqueVOrecords.push({ verbID: record.verbID, objectID: record.objectID, verbDisplay: record.verb.display, objectName: record.object.name, label: (record.verb.display === "Started" && record.object.name === "Course") ? "START" : `${record.verb.display} ${record.object.name}`, nodeUUID: crypto.randomUUID() })
    }
  });
  return uniqueVOrecords
})

// creates a list of flowNodes with in and out properties
const flowNodes = computed(() => {
  var flowNodes: flowNode[] = []
  uniqueVOrecords.value.forEach(record => {
    flowNodes.push({ ...record, in: [], out: [], records: [] })
  });
  rrrData.value.forEach(tester => {
    tester.forEach(session => {
      session.forEach((record, index) => {
        const node = flowNodes.find(node => isVOsame(node, record))
        if (node) {
          node.records.push(record)
          if (index > 0) {
            const prevNode = flowNodes.find(node => isVOsame(node, session[index - 1]))
            if (prevNode) {
              prevNode.out.push(node.nodeUUID)
              node.in.push(prevNode.nodeUUID)
            }
          }
        }
      })
    })
  })

  return flowNodes
})

// get a list of testerSessionRecords
const rrrData = computed(() => {
  if (result.value.length === 0)
    return []

  var splitByTesterRecords: IXRecordView[][] = []
  // split by tester
  listTesterUUID.value.forEach(UUID => {
    splitByTesterRecords.push(result.value.filter((item) => item.testerUUID === UUID).sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    }))
  });

  var splitByTesterSessionRecords: IXRecordView[][][] = []
  // then split by session
  splitByTesterRecords.forEach(testerRecords => {
    var oneTesterAllSessions: IXRecordView[][] = []
    var session: IXRecordView[] = []
    testerRecords.map((record) => {
      if (record.verb.display === "Started" && record.object.name === "Course") {
        if (session.length > 1) {
          oneTesterAllSessions.push(session)
          session = []
          session.push(record)
        }
        else {
          session = []
          session.push(record)
        }
      }
      else {
        session.push(record)
      }
    })
    if (session.length > 0)
      oneTesterAllSessions.push(session)

    if (oneTesterAllSessions.length > 0)
      splitByTesterSessionRecords.push(oneTesterAllSessions)
  })

  // for each session, calculate the duration of each record (except the first one)
  for (let i = 0; i < splitByTesterSessionRecords.length; i++) { // for all testers...
    for (let j = 0; j < splitByTesterSessionRecords[i].length; j++) { // for all sessions...
      for (let k = 0; k < splitByTesterSessionRecords[i][j].length - 1; k++) { // for all records... (except the first one)
        splitByTesterSessionRecords[i][j][k].durationFuture = new Date(splitByTesterSessionRecords[i][j][k + 1].timestamp).getTime() - new Date(splitByTesterSessionRecords[i][j][k].timestamp).getTime()
      }
      for (let k = 0; k < splitByTesterSessionRecords[i][j].length; k++) { // for all records...
        splitByTesterSessionRecords[i][j][k].durationTotal = new Date(splitByTesterSessionRecords[i][j][k].timestamp).getTime() - new Date(splitByTesterSessionRecords[i][j][0].timestamp).getTime()
      }
      for (let k = 1; k < splitByTesterSessionRecords[i][j].length; k++) { // for all records... (except the last one)
        splitByTesterSessionRecords[i][j][k].durationPast = new Date(splitByTesterSessionRecords[i][j][k].timestamp).getTime() - new Date(splitByTesterSessionRecords[i][j][k - 1].timestamp).getTime()
      }
    }
  }

  return splitByTesterSessionRecords
})

// select node based on nodeUUID
function selectFlowNode(nodeUUID: string) {
  sFN.value = flowNodes.value.find(node => node.nodeUUID === nodeUUID)
  if (sFN.value)
    sFN.value.records.sort((a, b) => { return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() })
}

// get nodeUUID based on recordUUID
function selectFlowNodeWithRecordUUID(recordUUID: string) {
  sFN.value = flowNodes.value.find(node => node.records.find(record => record.recordUUID === recordUUID))
  tab.value = "master-flow"
}

// Graphic getter
function getNodeDisplayList(UUIDs: string[]) {
  // group same UUIDs together and remember the count
  var displayList: { UUID: string, count: number, label: string, perc: number, repeated: boolean }[] = []
  UUIDs.forEach((UUID) => {
    const index = displayList.findIndex((item) => item.UUID === UUID)
    if (index === -1) {
      displayList.push({ UUID: UUID, count: 1, label: "", perc: 0, repeated: false })
    }
    else {
      displayList[index].count++
    }
  })

  // get the label for each UUID
  displayList.forEach((item) => {
    const node = flowNodes.value.find(node => node.nodeUUID === item.UUID)
    if (node) {
      item.label = node.label
    }
  })

  // calculate the percentage
  displayList.forEach((item) => {
    // round it to 2 decimal places
    item.perc = Math.round(item.count / UUIDs.length * 100 * 100) / 100
  })

  displayList = displayList.sort((a, b) => b.count - a.count)
  // if there is a node with the same UUID as the selected node, remove it
  const index = displayList.findIndex((item) => item.UUID === sFN.value?.nodeUUID)
  if (index !== -1) {
    displayList[index].repeated = true
    displayList.push(displayList.splice(index, 1)[0])
  }
  return displayList
}

// get the record from a combined data type
function getRec(record: IXRecordView | IXRecordView[]) {
  if (Array.isArray(record)) {
    return record[0]
  }
  else {
    return record
  }
}

// check if the record is an array of IXRecordView
function isRec(record: IXRecordView | IXRecordView[]) {
  return !Array.isArray(record)
}

// get a printable string of the Date
function getNiceTime(date: Date) {
  return date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0')
}

// get a printable string of the Date
function getNicerTime(date: Date) {
  if (!date.valueOf())
    return "--"
  return date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0') + "." + date.getMilliseconds().toString().padStart(3, '0')
}

// get list of unique testerUUID
const listTesterUUID = computed(() => {
  if (result.value.length === 0)
    return []
  const list = result.value.map((item) => item.testerUUID)
  return [...new Set(list)]
})

// get list of tester details
const testerDetails = computed(() => {
  var index = 1;
  return listTesterUUID.value.map((testerUUID) => {
    return testerStore.readDetails(testerUUID) ?? {
      testerUUID: testerUUID,
      firstname: "Anonymous",
      lastname: "Tester" + index++,
    }
  })
})

function getSessionIndex(recordUUID: string) {
  var sI = -1
  rrrData.value.forEach((tester) => {
    tester.forEach((session, index) => {
      session.forEach((record) => {
        if (record.recordUUID === recordUUID) {
          sI = index
        }
      })
    })
  })
  return sI
}

const tableData = computed(() => {
  if (!sFN.value)
    return []

  var data: rowData[] = []
  sFN.value.records.forEach(record => {
    var tester = testerDetails.value.find(tester => tester.testerUUID === record.testerUUID)
    const sID: number = getSessionIndex(record.recordUUID)
    const tID: number = testerDetails.value.findIndex(tester => tester.testerUUID === record.testerUUID)
    data.push(
      {
        key: record.recordUUID,
        tester: getTesterLabel(tester),
        session: sID + 1,
        durationPast: getNicerTime(new Date(record.durationPast)),
        durationFuture: getNicerTime(new Date(record.durationFuture)),
        durationTotal: getNiceTime(new Date(record.durationTotal)),
        sID: sID,
        tID: tID,
        durationPastRaw: record.durationPast,
        durationFutureRaw: record.durationFuture,
        durationTotalRaw: record.durationTotal
      }
    )
  });
  return data
})

// get the label of the tester
function getTesterLabel(tester: ITester | undefined) {
  if (!tester)
    return ""
  return tester.firstname + " " + tester.lastname
}

const totalTries = computed(() => {
  var count = 0;
  rrrData.value.forEach((tester) => {
    count += tester.length
  })
  return count
})

// STATS 
const statTotalAchieved = computed(() => {
  if (!tableData.value.length)
    return 0
  var perc = [...new Set(tableData.value.map((item) => item.tester + item.session))].length / totalTries.value * 100
  return Math.round(perc * 100) / 100 + " % testers"
})

const statAchievTimesAverage = computed(() => {
  if (!tableData.value.length)
    return 0
  var avgCount = tableData.value.length / [...new Set(tableData.value.map((item) => item.tester + item.session))].length
  return Math.round(avgCount * 100) / 100 + " times"
})

const statAvgTimeSinceLast = computed(() => {
  if (!tableData.value.length)
    return 0
  var avgTime = 0;
  var count = 0;
  for (let i = 0; i < tableData.value.length; i++) {
    const item = tableData.value[i];
    if (item.durationPastRaw) {
      avgTime += item.durationPastRaw
      count++;
    }
  }
  avgTime = avgTime / count
  return getNicerTime(new Date(avgTime))
})

const statAvgTimeTillNext = computed(() => {
  if (!tableData.value.length)
    return 0
  var avgTime = 0;
  var count = 0;
  for (let i = 0; i < tableData.value.length; i++) {
    const item = tableData.value[i];
    if (item.durationFutureRaw) {
      avgTime += item.durationFutureRaw
      count++;
    }
  }
  avgTime = avgTime / count
  return getNicerTime(new Date(avgTime))
})

// generate options for selecting tester
const selectTesterOptions = computed(() => {
  if (result.value.length === 0)
    return []
  return testerDetails.value.map((tester, index) => {
    return {
      label: getTesterLabel(tester),
      uuid: tester.testerUUID,
      value: index
    }
  })
})

function isHighlighted(record: IXRecordView | IXRecordView[]) {
  if (Array.isArray(record)) {
    return record.some((item) => item.recordUUID === highlightedRecordUUID.value)
  }
  else {
    return record.recordUUID === highlightedRecordUUID.value
  }
}

// generate options for selecting session
const selectSessionOptions = computed(() => {
  if (sTI.value === -1)
    return []
  const options: SelectOption[] = []
  rrrData.value[sTI.value].map((session, index) => {
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
          <n-h3 class="h3-item-name">Test results:</n-h3>
        </div>
      </div>
    </div>
    <div class="row">
      <n-tabs type="line" animated placement="top" style="width: 100%;" v-model:value="tab">
        <template #prefix>
          <span style="color: var(--gray-2); margin-right: 1.5rem;">
            View results as:
          </span>
        </template>
        <!-- ***** Flow view ***** -->
        <n-tab-pane name="master-flow" tab="Master Flow">
          <div class="row mt-2">
            <!-- Left column -->
            <div class="col-3">
              <n-h4>
                Previous records...
              </n-h4>
              <div v-for="(a) in getNodeDisplayList(sFN?.in ?? [])" v-bind:key="a.UUID"
                :class="{ 'card-wrapper': true, 'repeated': a.repeated }" @click="selectFlowNode(a.UUID)">
                <n-card class="nav-card" :style="{ 'opacity': 0.4 + a.perc * 0.008 }" size="small">
                  <div class="d-flex">
                    <div class="nav-name align-self-center">{{ a.label }}</div>
                    <div class="nav-perc align-self-center" style="margin-left: auto;">{{ a.perc }}%</div>
                  </div>
                </n-card>
              </div>
            </div>
            <!-- Middle column -->
            <div class="col-6">
              <n-card :title="sFN?.label">
                <n-descriptions label-placement="top" size="small" class="mb-4">
                  <n-descriptions-item label="Achieved by:">
                    {{ statTotalAchieved }}
                  </n-descriptions-item>
                  <n-descriptions-item label="Average times achieved:">
                    {{ statAchievTimesAverage }}
                  </n-descriptions-item>
                </n-descriptions>
                <n-descriptions label-placement="top" size="small" class="mb-4">
                  <n-descriptions-item label="Average time since last:">
                    {{ statAvgTimeSinceLast }}
                  </n-descriptions-item>
                  <n-descriptions-item label="Average time till next:">
                    {{ statAvgTimeTillNext }}
                  </n-descriptions-item>
                </n-descriptions>
                <n-data-table :columns="columns" :data="tableData" size="small" :row-props="rowProps" />
              </n-card>
            </div>
            <!-- Right column -->
            <div class="col-3">
              <n-h4>
                Following records...
              </n-h4>
              <div v-for="(a) in getNodeDisplayList(sFN?.out ?? [])" v-bind:key="a.UUID"
                :class="{ 'card-wrapper': true, 'repeated': a.repeated }" @click="selectFlowNode(a.UUID)">
                <n-card class="nav-card" :style="{ 'opacity': 0.4 + a.perc * 0.8 }" size="small">
                  <div class="d-flex">
                    <div class="nav-perc align-self-center">{{ a.perc }}%</div>
                    <div class="nav-name align-self-center" style="margin-left: auto;">{{ a.label }}</div>
                  </div>
                </n-card>
              </div>
            </div>
          </div>
        </n-tab-pane>
        <!-- ***** Tester view ***** -->
        <n-tab-pane name="tester-timeline" tab="Tester timeline">
          <div class="row" v-if="rrrData.length">
            <!-- Timeline column -->
            <div class="col-8">
              <n-timeline style="margin-left: 5rem; width: calc(100% - 20rem)">
                <n-timeline-item type="success" title="START">
                  <div class="timehint" style="top:1rem">
                    {{ getNiceTime(new Date(new
                      Date(rrrData[sTI][sSI][1].timestamp).getTime() -
                      new Date(rrrData[sTI][sSI][0].timestamp).getTime())) }}</div>
                      <div
                        @click="selectFlowNodeWithRecordUUID(getRec(rrrData[sTI][sSI][0]).recordUUID)"
                        :class="{highlighted: isHighlighted(rrrData[sTI][sSI][0]), overlay: true}"></div>
                </n-timeline-item>
                <n-timeline-item v-for="(record, index) in displayResult"
                  :key="getRec(record).recordUUID"
                  :type="isRec(record) ? getType(getRec(record)) : 'warning'"
                  :title="getRec(record).verb.display + ': ' + getRec(record).object.name"
                  :time="isRec(record) ? new Date(getRec(record).timestamp).toLocaleString() : undefined">
                  <div 
                    @click="selectFlowNodeWithRecordUUID(getRec(record).recordUUID)"
                    :class="{highlighted: isHighlighted(record), overlay: true}"></div>
                  <div v-if="index" class="timehint">
                    {{ getNiceTime(new Date(new Date(getRec(record).timestamp).getTime() - new
                      Date(rrrData[sTI][sSI][index].timestamp).getTime())) }}</div>
                  <template #icon>
                    <n-icon v-if="(('recordUUID' in record) ? record.verb.display : record[0].verb.display) == 'Viewed'">
                      <RemoveRedEyeFilled />
                    </n-icon>
                    <n-icon v-if="getRec(record).verb.display == 'Interacted'">
                      <AdsClickFilled />
                    </n-icon>
                  </template>
                  <n-collapse v-if="Array.isArray(record)" arrow-placement="right">
                    <n-collapse-item :title="'Total ' + record.length + 'x times'" name="1">
                      <n-timeline>
                        <n-timeline-item v-for="subrecord in record" :key="subrecord.recordUUID"
                          :type="getType(subrecord)" :time="new Date(subrecord.timestamp).toLocaleString()" />
                      </n-timeline>
                    </n-collapse-item>
                  </n-collapse>
                </n-timeline-item>
                <n-timeline-item type="error" title="END" />
              </n-timeline>
            </div>
            <!-- Selection column -->
            <div class="col-4">
              <n-select class="my-2" v-model:value="sTI" filterable placeholder="Please select a tester"
                :options="selectTesterOptions" @update:value="highlightedRecordUUID = undefined"/>
              <n-select class="my-2" v-model:value="sSI" filterable placeholder="Please select a session"
                :options="selectSessionOptions" @update:value="highlightedRecordUUID = undefined"/>
            </div>
          </div>
          <div v-else>
            <n-card>
              <n-empty style="margin: 5rem" :description="'Your testers did not perform any activities yet.'"/>
            </n-card>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped>
.timehint {
  position: absolute;
  left: -5.5rem;
  top: -2rem;
  width: 4.5rem;
  text-align: right;
  color: var(--gray-2);
}

.nav-card {
  margin-bottom: 0.5rem;
}

.card-wrapper {
  opacity: 0.8;
  cursor: pointer;
}

.card-wrapper:hover {
  opacity: 1;
}

.card-wrapper:hover .nav-card {
  border: 1px solid var(--green-1);
  background-color: var(--green-2-bg);
}

.card-wrapper.repeated {
  margin-top: 2rem;
}

.card-wrapper.repeated::before {
  content: '...';
  position: relative;
  width: 2rem;
  top: -1rem;
  left: 50%;
  text-align: center;
  color: var(--gray-2);
  transform: translateX(-50%);
}

.card-wrapper.repeated:hover .nav-card {
  border: 1px solid var(--warn-1);
  background-color: var(--warn-2-bg);
}

.nav-name {
  font-weight: 500;
  font-size: 1rem;
}

.nav-perc {
  font-size: 0.75rem;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: -0.5rem;
  top: -0.5rem;
  cursor: pointer;
}

.overlay:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.highlighted {
  border: 1px solid var(--green-1);
  background-color: var(--green-2-bg);
  opacity: 0.7;
}

.highlighted:hover {
  opacity: 1;
  background-color: var(--green-2-bg);  
}
</style>
