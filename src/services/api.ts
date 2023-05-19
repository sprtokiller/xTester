import axios, { type AxiosInstance } from 'axios'
import type { ICourseView, ITestView, ICourseDetail } from '@/interfaces'
import { inject } from 'vue';

export interface BackendApiInjection extends API {}

export function useApi() : BackendApiInjection {
  const apiInstance = inject('API') as BackendApiInjection;
  if (!apiInstance) {
    throw new Error('API is not provided');
  }
  return apiInstance;
}

export class API {
  private static api: AxiosInstance

  private static async request<T>(method: string, endpoint: string, body?: any): Promise<T> {
    const response = await API.api.request({
      method,
      url: endpoint,
      data: body
    })
    return response?.data
  }

  private static e(toEncode: string): string {
    return encodeURIComponent(toEncode)
  }

  constructor(baseURL: string) {
    API.api = axios.create({
      baseURL: baseURL,
      withCredentials: true
    })
  }

  async login(googleCredential: string): Promise<void> {
    return API.request<void>(`POST`, `/user/login`, { googleCredential })
  }

  async logout(): Promise<void> {
    return API.request<void>(`POST`, `/user/logout`)
  }

  async check(): Promise<void> {
    return API.request<void>(`GET`, `/user/check`)
  }

  /* ------------- COURSE ------------- */

  // C
  async addCourse(
    name: string,
    author: string,
    version: number,
    groupHash: string,
    courseLocation: string
  ): Promise<string> {
    return API.request<string>(`POST`, `/course/add`, {
      name,
      author,
      version,
      groupHash,
      courseLocation
    })
  }
  // R
  async getCourseDetail(courseUUID: string): Promise<ICourseDetail> {
    return API.request<ICourseDetail>(`GET`, `/course/detail/${API.e(courseUUID)}`)
  }
  // U
  async renameCourse(courseUUID: string, name: string): Promise<void> {
    return API.request<void>(`PUT`, `/course/rename/${API.e(courseUUID)}`, { name })
  }
  // D
  async deleteCourse(courseUUID: string): Promise<void> {
    return API.request<void>(`DELETE`, `/course/delete/${API.e(courseUUID)}`)
  }
  // L
  async getCourseList(): Promise<ICourseView[]> {
    return API.request<ICourseView[]>(`GET`, `/course/list`)
  }

  /**
   * @returns course UUID if exists, null if not
   */
  async checkCourseExists(courseLocation: string, groupHash: string): Promise<string> {
    return API.request<string>(`GET`, `/course/check/${API.e(groupHash)}/${API.e(courseLocation)}`)
  }

  /* TEST */
  async getTestList(): Promise<ITestView[]> {
    return API.request<ITestView[]>(`GET`, `/test/list`)
  }
}
