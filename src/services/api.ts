import axios, { type AxiosInstance } from 'axios'
import type { ICourseView, ITestView, ICourseDetail, EndType, ITester, IGroupView } from '@/interfaces'
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

  /* ------------- TEST ------------- */
  // C
  async addTest(courseUUID: string, name: string, endType: EndType, startAt: number, endAt: number, anonymousCount: number, testerUUIDs: string[]): Promise<string> {
    return API.request<string>(`POST`, `/test/add`, {
      courseUUID,
      name,
      endType,
      startAt,
      endAt,
      anonymousCount,
      testerUUIDs
    })
  }
  // R
  async getTestDetail(testUUID: string): Promise<ITestView> {
    return API.request<ITestView>(`GET`, `/test/detail/${API.e(testUUID)}`)
  }
  // L
  async getTestList(): Promise<ITestView[]> {
    return API.request<ITestView[]>(`GET`, `/test/list`)
  }
  /* ------------- TESTER ------------- */
  // Preview of testers
  async getTesterPreview(testerUUIDs: string[], groupUUIDs: string[]): Promise<ITester[]> {
    return API.request<ITester[]>(`POST`, `/tester/preview`, {testerUUIDs, groupUUIDs})
  }
  // C
  async addTester(firstname: string, lastname: string, email: string): Promise<string> {
    return API.request<string>(`POST`, `/tester/add`, {
      firstname : firstname.length > 0 ? firstname : null,
      lastname : lastname.length > 0 ? lastname : null,
      email : email.length > 0 ? email : null
    })
  }
  // D
  async deleteTester(testerUUID: string): Promise<void> {
    return API.request<void>(`DELETE`, `/tester/delete/${API.e(testerUUID)}`)
  }
  // L
  async getTesterList(): Promise<ITester[]> {
    return API.request<ITester[]>(`GET`, `/tester/list`)
  }
  /* ------------- GROUP ------------- */
  // C
  async addGroup(groupName: string): Promise<string> {
    return API.request<string>(`POST`, `/group/add`, {
      groupName
    })
  }
  // R (sort of)
  async getGroupTesterUUIDs(groupUUID: string): Promise<string[]> {
    return API.request<string[]>(`GET`, `/group/testers/${API.e(groupUUID)}`)
  }
  // U (sort of)
  async assignTestersToGroup(groupUUID: string, testerUUIDs: string[]): Promise<void> {
    return API.request<void>(`PUT`, `/group/testers/${API.e(groupUUID)}`, { testerUUIDs })
  }
  // D
  async deleteGroup(groupUUID: string): Promise<void> {
    return API.request<void>(`DELETE`, `/group/delete/${API.e(groupUUID)}`)
  }
  // L
  async getGroupList(): Promise<IGroupView[]> {
    return API.request<IGroupView[]>(`GET`, `/group/list`)
  }
}
