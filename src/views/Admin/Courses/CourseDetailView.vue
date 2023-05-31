<script setup lang="ts">
import { h, ref, watchEffect, computed } from 'vue'
import { useMessage, NButton, NH3, NDataTable } from 'naive-ui'
import { RemoveRedEyeFilled } from '@vicons/material'
import LoadingHeader from '@/components/Admin/LoadingHeader.vue'
import { useRouter } from 'vue-router'
import BackButton from '@/components/Admin/BackButton.vue'
import AddTestButton from '@/components/Admin/AddTestButton.vue'
import { useApi } from '@/services/api'
import type { ICourseDetail, ICourse } from '@/interfaces'
import type { DataTableColumns } from 'naive-ui'

const router = useRouter()
const MSG = useMessage()
const API = useApi()
const columns: DataTableColumns<ICourse> = [
  {
    title: 'Other versions',
    key: 'name',
    ellipsis: true
  },
  {
    title: 'Ver.',
    key: 'version',
    align: 'center',
    width: 50
  },
  {
    title: 'View',
    key: 'courseView',
    align: 'center',
    width: 80,
    render(row) {
      return h(NButton, {
        circle: true,
        quaternary: true,
        size: 'small',
        class: 'btn-less-visible',
        renderIcon: () => h(RemoveRedEyeFilled),
        onClick: () => {
          router.push({ name: 'courseDetail', params: { courseUUID: row.courseUUID } })
        }
      })
    }
  }
]

// define refs
const loading = ref(true)
const course = ref({} as ICourseDetail)

// define props
const props = defineProps({
  courseUUID: {
    type: String,
    required: true
  }
})

watchEffect(() => {
  fetchDetail(props.courseUUID)
})

function fetchDetail(courseUUID: string) {
  // fetch courses from the API
  loading.value = true
  API.getCourseDetail(courseUUID)
    .then((newCourse) => {
      course.value = newCourse
    })
    .catch((err) => {
      // TODO: handle error in better way
      MSG.error(err.message)
    })
    .finally(() => {
      loading.value = false
    })
}

const getURL = computed(() => {
  if (!(course.value)) return undefined

  return `https://articulateusercontent.com/review/${course.value.courseLocation}`
})
</script>

<template>
  <LoadingHeader v-if="loading" />

  <!-- Loaded state -->
  <div v-else>
    <div class="row">
      <div class="col-9">
        <div class="d-flex align-items-center">
          <BackButton />
          <n-h3 class="h3-item-name">{{ course.name }}</n-h3>
          <AddTestButton :courseUUID="course.courseUUID"/>
        </div>
      </div>
      <!-- preview, list of other versions -->
      <div class="col-3">
        <div class="iframe-container">
          <iframe allowfullscreen="true" class="player" :src="getURL" scrolling="no"></iframe>
          <!-- TODO: make read-only -->
        </div>
        <n-data-table :columns="columns" :data="course.otherVersions" :single-line="true" size="small" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.iframe-container .player {
  width: 100%;
  height: 100%;
}

.iframe-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 0.8rem;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>