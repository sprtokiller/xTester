import axios from 'axios';
import type { CourseView, TestView } from '@/interfaces';
import { mockCourses, mockTests } from '@/_mock';
const api = axios.create({
  baseURL: 'https://api.example.com/',
});


export interface API {
    getCourseList(): Promise<CourseView[]>;
    getTestList(): Promise<TestView[]>;
  }

export const API = {
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
  }
}