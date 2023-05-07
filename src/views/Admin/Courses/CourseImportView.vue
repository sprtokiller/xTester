<script lang="ts">
import { inject } from 'vue'
import { useMessage, NH3, NButton, NCard, NDescriptions, NDescriptionsItem, NSpin } from 'naive-ui'
import type { API } from '@/services/api'
import { useRouter } from 'vue-router'

export default (await import('vue')).defineComponent({
  setup() {
    const router = useRouter()
    const MSG = useMessage()
    const API = inject('API') as API
    return {
      router,
      MSG,
      API
    }
  },
  data() {
    return {
      checking: true,
      uploading: false
    }
  },
  components: {
    NButton,
    NH3,
    NCard,
    NDescriptions,
    NDescriptionsItem,
    NSpin
  },
  props: {
    name: { type: String, required: true },
    author: { type: String, required: true },
    version: { type: String, required: true },
    courseLocation: { type: String, required: true },
    groupHash: { type: String, required: true }
  },
  watch: {
    watchIDs: {
      handler() {
        this.checkAvailability()
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    // we have to use computed to watch for changes in both IDs
    watchIDs() {
      return {
        courseLocation: this.courseLocation,
        groupHash: this.groupHash
      }
    },
    loadingClass() {
      return {
        'dim-on-loading': this.checking || this.uploading
      }
    }
  },
  methods: {
    async checkAvailability() {
      try {
        this.checking = true
        const courseUUID = await this.API.checkCourseExists(this.courseLocation, this.groupHash)
        if (courseUUID) {
          // redirect to course detail
          this.$router.push({ name: 'courseDetail', params: { courseUUID: courseUUID } })
        }
      } catch (err) {
        this.MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        this.checking = false
      }
    },
    cancel() {
      this.$router.push({ name: 'courses' })
    },
    async addCourse() {
      try {
        this.uploading = true
        const courseUUID = await this.API.addCourse(
          this.name,
          this.author,
          parseInt(this.version),
          this.groupHash,
          this.courseLocation
        )
        this.$router.push({ name: 'courseDetail', params: { courseUUID } })
      } catch (err) {
        this.MSG.error(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        this.uploading = false
      }
    }
  }
})
</script>

<template>
  <n-h3>Add a new course...</n-h3>
  <n-spin :show="checking || uploading">
    <template #description>
      {{ uploading ? 'Uploading the course...' : 'Checking if course is available...' }}
    </template>
    <n-card style="max-width: 50rem; margin-left: auto; margin-right: auto; margin-top: 5%">
      <n-descriptions
        :class="loadingClass"
        title="Details"
        label-placement="left"
        bordered
        size="small"
      >
        <n-descriptions-item label="Name:">
          {{ name }}
        </n-descriptions-item>
        <n-descriptions-item label="Author:">
          {{ author }}
        </n-descriptions-item>
        <n-descriptions-item label="Version:">
          {{ version }}
        </n-descriptions-item>
        <n-descriptions-item label="Course location:">
          {{ courseLocation }}
        </n-descriptions-item>
        <n-descriptions-item label="Course URL:">
          {{ groupHash }}
        </n-descriptions-item>
      </n-descriptions>
      <template #footer>
        <!-- align to right -->
        <div class="d-flex justify-content-end">
          <n-button @click="cancel" style="margin-right: 0.5rem" ghost>Cancel</n-button>
          <n-button @click="addCourse" type="primary">Add</n-button>
        </div>
      </template>
    </n-card>
  </n-spin>
</template>

<style scoped>
.dim-on-loading {
  opacity: 0.3;
}
</style>
