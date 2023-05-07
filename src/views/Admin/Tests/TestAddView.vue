<script lang="ts">
import { inject, h } from 'vue'
import { useMessage, NButton, NIcon, NH3, NDataTable, NSpin } from 'naive-ui'
import { ArrowBackFilled, RemoveRedEyeFilled, AddRound } from '@vicons/material'
import { useRouter } from 'vue-router'

import type { API } from '@/services/api'
import type { ICourseDetail, ICourse } from '@/interfaces'
import type { DataTableColumns } from 'naive-ui'

const createColumns = ({
  changeDetail
}: {
  changeDetail: (newCourseUUID: string) => void
}): DataTableColumns<ICourse> => {
  return [
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
          onClick: () => changeDetail(row.courseUUID)
        })
      }
    }
  ]
}

export default (await import('vue')).defineComponent({
  setup() {
    const router = useRouter()
    const MSG = useMessage()
    const API = inject('API') as API
    return {
      router,
      MSG,
      API,
      columns: createColumns({
        changeDetail(newCourseUUID: string) {
          router.push({ name: 'courseDetail', params: { courseUUID: newCourseUUID } })
        }
      })
    }
  },
  data() {
    return {
      loading: true,
      course: {} as ICourseDetail
    }
  },
  components: {
    NButton,
    NIcon,
    ArrowBackFilled,
    NH3,
    NDataTable,
    NSpin,
    AddRound
  },
  props: {
    courseUUID: {
      type: String,
      required: true
    }
  },
  watch: {
    courseUUID: {
      handler(newCourseUUID) {
        this.fetchDetail(newCourseUUID)
      },
      immediate: true
    }
  },
  methods: {
    fetchDetail(courseUUID: string) {
      // fetch courses from the API
      this.loading = true
      this.API.getCourseDetail(courseUUID)
        .then((course) => {
          this.loading = false
          this.course = course
        })
        .catch((err) => {
          // TODO: handle error in better way
          this.loading = false
          this.MSG.error(err.message)
        })
    },
    handleBack() {
      // print the router history
      this.router.back()
    }
  },
  computed: {
    getURL(): string | undefined {
      if (!this.course) return undefined

      return `https://articulateusercontent.com/review/${this.course.courseLocation}`
    }
  }
})
</script>

<template>
  <!-- Loading state -->
  <div v-if="loading">
    <div class="d-flex align-items-center">
      <n-button size="large" @click="handleBack" quaternary circle>
        <template #icon>
          <n-icon class="icon-no-align">
            <ArrowBackFilled />
          </n-icon>
        </template>
      </n-button>
      <n-h3 class="course-name">Loading...</n-h3>
    </div>
    <n-spin :show="loading" class="w-100" style="min-height: 200px" />
  </div>

  <!-- Loaded state -->
  <div v-else>
    <div class="row">
      <div class="col-9">
        <div class="d-flex align-items-center">
          <n-button size="large" @click="handleBack" quaternary circle>
            <template #icon>
              <n-icon class="icon-no-align">
                <ArrowBackFilled />
              </n-icon>
            </template>
          </n-button>
          <n-h3 class="course-name">{{ course.name }}</n-h3>
          <n-button size="large" type="primary" secondary class="button-add-test"
            >Add test
            <template #icon>
              <n-icon class="icon-no-align">
                <AddRound />
              </n-icon>
            </template>
          </n-button>
        </div>
      </div>
      <!-- preview, list of other versions -->
      <div class="col-3">
        <div class="iframe-container">
          <iframe
            allowfullscreen="true"
            class="player"
            :src="getURL"
            scrolling="no"
            style="width: 100%; height: 100%"
          ></iframe>
          <!-- TODO: make read-only -->
        </div>
        <n-data-table
          :columns="columns"
          :data="course.otherVersions"
          :single-line="true"
          size="small"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.course-name {
  margin: 0 0 0 0.8rem;
}

.button-add-test {
  margin-left: auto;
  padding-left: 12px;
}
</style>
