<script setup lang="ts">
import { inject, onMounted, ref, computed } from 'vue'
import { NList, NSpin, NScrollbar, NEmpty, NButton, useMessage, NH2 } from 'naive-ui'
import CourseItem from '@/components/Admin/Courses/CourseItem.vue'
import type { ICourseView } from '@/interfaces'
import type { API } from '@/services/api'


const MSG = useMessage()
const myAPI = inject('API') as API

const loading = ref(true)
const courses = ref([] as ICourseView[])
const editUUID = ref('' as string)

onMounted(async () => {
  try {
    loading.value = true
    courses.value = await myAPI.getCourseList()
  } catch (err) {
    MSG.error(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loading.value = false
  }
})

const isEmpty = computed(() => {
  return courses.value.length === 0
})

function editSelect(courseUUID: string) {
  // this master component is holding the UUID of actively edited course
  editUUID.value = courseUUID
}
function deleteCourse(courseUUID: string) {
  // delete the course from the array
  courses.value = courses.value.filter((course) => course.courseUUID !== courseUUID)
}
function renameCourse(courseUUID: string, newName: string) {
  // rename the course in the array
  courses.value = courses.value.map((course) => {
    if (course.courseUUID === courseUUID) {
      course.name = newName
    }
    return course
  })
}
</script>

<template>
  <n-h2>List of courses</n-h2>
  <n-scrollbar>
    <n-spin :show="loading" style="min-height: 200px">
      <n-list hoverable clickable>
        <!-- add a CourseItem for each course -->
        <CourseItem v-for="course in courses" :course="course" v-bind:editUUID="editUUID" v-bind:key="course.courseUUID"
          @editSelect="editSelect" @deleteCourse="deleteCourse" @renameCourse="renameCourse" />
      </n-list>
      <n-empty description="No e-learning courses found :(" v-if="!loading && isEmpty">
        <template #extra>
          <n-button size="small">
            Start by adding a course!
            <!-- TODO take me to a tutorial page -->
          </n-button>
        </template>
      </n-empty>
    </n-spin>
  </n-scrollbar>
</template>
