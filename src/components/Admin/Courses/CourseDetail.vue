<script lang="ts">

import { inject, h } from 'vue'
import { useMessage, NPageHeader, NButton, NIcon, NH3, NDataTable, NSpin } from 'naive-ui';
import { ArrowBackFilled } from '@vicons/material'
import type { API } from '@/services/api';
import type { CourseDetail, Course } from '@/interfaces';
import type { DataTableColumns } from 'naive-ui';
import { RemoveRedEyeRound } from '@vicons/material'


const createColumns = ({ changeDetail } : { changeDetail: (newCourseID : number) => void}): DataTableColumns<Course> => {
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
        return h(
          NButton,
          {
            circle: true,
            quaternary: true,
            size: 'small',
            class: 'btn-less-visible',
            renderIcon: () => h(RemoveRedEyeRound),
            onClick: () => changeDetail(row.courseID)
          }
        )
      }
    }
  ]
}

export default {
  setup(props, context) {
    const MSG = useMessage();
    const API = inject('API') as API;
    return { MSG, API,
      columns: createColumns({
        changeDetail(newCourseID: number) {
          context.emit('open-detail', newCourseID)
        }
      })
    }
  },
  mounted() {
    // fetch courses from the API
    this.API.getCourseDetail(this.courseID).then(course => {
      this.loading = false;
      this.course = course;
    }).catch(err => {
      this.loading = false;
      this.MSG.error(err.message);
    });
  },
  data() {
    return {
      loading: true,
      course: {} as CourseDetail
    }
  },
  components: {
    NPageHeader, NButton, NIcon, ArrowBackFilled, NH3, NDataTable, RemoveRedEyeRound, NSpin
  },
  props: {
    courseID: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleBack() {
      this.$emit('close-detail');
    }
  },
  computed: {
    getURL(): string | undefined {
      if (this.course) {
        return `https://articulateusercontent.com/review/items/${this.course.courseHash}/story.html`;
      }
      else {
        return undefined;
      }
    }
  },
}
</script>


<template>
  <div v-if="loading">
    <div class="d-flex align-items-center">
      <n-button size="large" @click="handleBack" quaternary ghost circle>
        <template #icon>
          <n-icon class="icon-no-align">
            <ArrowBackFilled />
          </n-icon>
        </template>
      </n-button>
      <n-h3 class="course-name">Loading...</n-h3>
    </div>
    <n-spin :show="loading" class="w-100" style="min-height: 200px;" />
  </div>
  <div v-else>
    <div class="row">
      <div class="col-9">
        <div class="d-flex align-items-center">
          <n-button size="large" @click="handleBack" quaternary ghost circle>
            <template #icon>
              <n-icon class="icon-no-align">
                <ArrowBackFilled />
              </n-icon>
            </template>
          </n-button>
          <n-h3 class="course-name">{{ course.name }}</n-h3>
        </div>
      </div>
      <div class="col-3">
        <div class="iframe-container">
          <iframe allowfullscreen="true" class="player" :src="getURL" scrolling="no"
            style="width: 100%; height: 100%;"></iframe> <!-- TODO: make read-only -->
        </div>
        <n-data-table :columns="columns" :data="course.otherVersions" :single-line="true" size="small" />
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
</style>