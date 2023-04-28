import axios from 'axios';
import type { CourseView, TestView, CourseDetail } from '@/interfaces';
import { mockCourses, mockTests, mockCourseDetails } from '@/_mock';

const api = axios.create({
  baseURL: 'http://localhost:7331/api/',
  withCredentials: true
});

export interface API {
    login(googleCredential: string): Promise<void>;
    logout(): Promise<void>;
    check(): Promise<void>;

    getCourseList(): Promise<CourseView[]>;
    getTestList(): Promise<TestView[]>;
    getCourseDetail(courseUUID: string): Promise<CourseDetail>;
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

  getCourseList() { // TODO: Real API
    //return api.get(url, config);
    //return promise resolve after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCourses);
        }, 1000);
    });
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