import axios, { type AxiosInstance } from 'axios';
import type { ICourseView, ITestView, ICourseDetail } from '@/interfaces';

export class API {
  private api: AxiosInstance;

  private async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private e(toEncode: string): string {
    return encodeURIComponent(toEncode);
  }

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL: baseURL,
      withCredentials: true
    });
  }

  async login(googleCredential: string): Promise<void>{
    return this.api.post(`/user/login`, { googleCredential });
  }

  async logout(): Promise<void> {
    return this.api.post(`/user/logout`);
  }

  async check(): Promise<void> {
    return this.api.get(`/user/check`);
  }
  /* COURSE */
  async getCourseList(): Promise<ICourseView[]> {
    return this.fetchData<ICourseView[]>(`/course/list`);
  }
  
  async getCourseDetail(courseUUID: string): Promise<ICourseDetail> {
    return this.fetchData<ICourseDetail>(`/course/detail/${this.e(courseUUID)}`);
  }

  async renameCourse(courseUUID: string, courseName: string): Promise<void> {
    return this.api.put(`/course/rename/${this.e(courseUUID)}`, { courseName });
  }

  async deleteCourse(courseUUID: string): Promise<void> {
    return this.api.delete(`/course/delete/${this.e(courseUUID)}`);
  }

  /**
   * @returns course UUID if exists, null if not
   */
  async checkCourseExists(courseHash: string, groupHash: string): Promise<string> {
    return this.fetchData<string>(`/course/check/${this.e(groupHash)}/${this.e(courseHash)}`);
  }

  /* TEST */
  async getTestList(): Promise<ITestView[]> {
    return this.fetchData<ITestView[]>(`/test/list`);
  }
}