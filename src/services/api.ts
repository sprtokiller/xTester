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

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL: baseURL,
      withCredentials: true
    });
  }

  async login(googleCredential: string): Promise<void>{
    return this.api.post('/user/login', { googleCredential });
  }

  async logout(): Promise<void> {
    return this.api.post('/user/logout');
  }

  async check(): Promise<void> {
    return this.api.get('/user/check');
  }

  async getCourseList(): Promise<ICourseView[]> {
    return this.fetchData<ICourseView[]>('/course/list');
  }
  
  async getTestList(): Promise<ITestView[]> {
    return this.fetchData<ITestView[]>('/test/list');
  }
  
  async getCourseDetail(courseUUID: string): Promise<ICourseDetail> {
    return this.fetchData<ICourseDetail>(`/course/detail/${courseUUID}`);
  }
}