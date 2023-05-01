<script lang="ts">

import { inject, h } from 'vue'
import { NDataTable, useMessage, NButton, NTag, NH2 } from 'naive-ui';
import { useRouter } from 'vue-router'
import type { API } from '@/services/api';
import type { ITestView } from '@/interfaces';
import type { DataTableColumns } from 'naive-ui';
import { RemoveRedEyeRound } from '@vicons/material'


function getChip(type: 'success' | 'error' | 'warning' | 'info' | 'default', text: string, size: 'tiny' | 'small' | 'medium' | 'large' = 'medium') {
  return h(
    NTag,
    {
      bordered: false,
      type: type,
      size: size,
      style: 'margin-right: 6px'
    },
    { default: () => text }
  )
}

const getState = (test: ITestView) => {
  const currentTime = new Date();
  const start = test.startAt ? new Date(test.startAt) : null;
  const end = test.endAt ? new Date(test.endAt) : null;

  if (!start) return null;

  if (start > currentTime) {
    return getChip('warning', 'Planned')
  } else if (!end || end > currentTime) {
    return getChip('info', 'Active')
  } else {
    return getChip('success', 'Completed')
  }
}


function getModuleName(id: number) {
  const moduleNames : string[] = ["Unknown", "I/O Test", "I/O Evaluation", "Timed retency", "Feedback", "Live comments"]
  // check if id is valid
  if (id < 0 || id >= moduleNames.length) return moduleNames[0];
  return moduleNames[id];
}

const getModules = (test: ITestView) => {
  if (!test.modules) return null;
  return test.modules.map(module => {
    return getChip('default', getModuleName(module), 'tiny')
  })
}

const createColumns = ({ play } : { play: (test: ITestView) => void}): DataTableColumns<ITestView> => {
  return [
    {
      title: 'Test name',
      key: 'name',
      ellipsis: true
    },
    {
      title: 'State',
      key: 'state',
      width: 160,
      render(test) {
        return getState(test);
      }
    },
    {
      title: 'Course',
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
            onClick: () => play(row) // TODO: add a view link to course
          }
        )
      }
    },
    {
      title: 'Modules',
      key: 'modules',
      render(test) {
        return getModules(test);
      }
    }
  ]
}

export default {
  components: {
    NDataTable, NButton, NTag, RemoveRedEyeRound, NH2
  },
  setup() {
    const router = useRouter();
    const MSG = useMessage();
    const API = inject('API') as API;
    return {
      MSG, API,
      columns: createColumns({
        play(test: ITestView) {

          localStorage.setItem('selectedCourse', test.courseUUID);
          router.push({ name: 'courseDetail', params: { courseUUID: test.courseUUID } });
        }
      })
    }
  },
  mounted() {
    // fetch courses from the API
    this.API.getTestList().then(tests => {
      this.loading = false;
      this.tests = tests;
    }).catch(err => {
      this.loading = false;
      this.MSG.error(err.message);
    });
  },
  data() {
    return {
      loading: true,
      tests: [] as ITestView[]
    }
  },
  computed: {
    isEmpty(): boolean {
      return this.tests.length === 0;
    }
  }
}
</script>


<template>
  <n-h2>List of tests</n-h2>
  <n-data-table :columns="columns" :data="tests" :bordered="false" :loading="loading" />
</template>
