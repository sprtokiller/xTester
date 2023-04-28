import axios from 'axios';
import type { ICourseView, ITestView, ICourseDetail } from '@/interfaces';
import { mockCourses, mockTests, mockCourseDetails } from '@/_mock';

const api = axios.create({
  baseURL: 'http://localhost:7331/api/',
  withCredentials: true
});

export interface API {
    login(googleCredential: string): Promise<void>;
    logout(): Promise<void>;
    check(): Promise<void>;

    getCourseList(): Promise<ICourseView[]>;
    getTestList(): Promise<ITestView[]>;
    getCourseDetail(courseUUID: string): Promise<ICourseDetail>;
  }

export const API = {
  login(googleCredential: string) {
    return api.post('/user/login', { googleCredential });
  },

  logout() {
    return api.post('/user/logout');
  },

  check() {
    return api.get('/user/check');
  },

  async getCourseList(): Promise<ICourseView[]> {
    const response = await api.get('/course/list');
    const data: ICourseView[] = response.data;
    return data;
  },

  getTestList() { // TODO: Real API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTests);
        }, 2000);
    });
  },

  getCourseDetail(courseUUID: string) { // TODO: Real API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCourseDetails.find((c) => c.courseUUID === courseUUID));
        }, 2000);
    });
  }
}