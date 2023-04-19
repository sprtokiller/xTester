<script lang="ts">

import { inject, h } from 'vue'
import { NDataTable, useMessage, NButton, NTag } from 'naive-ui';
import type { API } from '@/services/api';
import type { TestView } from '@/interfaces';
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

const getState = (test: TestView) => {
  const currentTime = new Date();

  if (!test.start_at) return null;

  if (test.start_at > currentTime) {
    return getChip('warning', 'Planned')
  } else if (!test.end_at || test.end_at > currentTime) {
    return getChip('info', 'Running')
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

const getModules = (test: TestView) => {
  if (!test.modules) return null;
  return test.modules.map(module => {
    return getChip('default', getModuleName(module), 'tiny')
  })
}

const createColumns = ({ play } : { play: (test: TestView) => void}): DataTableColumns<TestView> => {
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
      key: 'course_view',
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
    NDataTable, NButton, NTag, RemoveRedEyeRound
  },
  setup() {
    const MSG = useMessage();
    const API = inject('API') as API;
    return {
      MSG, API,
      columns: createColumns({
        play(test: TestView) {
          MSG.info(`Play ${test.name}`)
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
      tests: [] as TestView[]
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
  <n-data-table :columns="columns" :data="tests" :bordered="false" :loading="loading" />
</template>
