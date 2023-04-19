import axios from 'axios';
import type { CourseView, TestView, CourseDetail } from '@/interfaces';
import { mockCourses, mockTests, mockCourseDetails } from '@/_mock';
const api = axios.create({
  baseURL: 'https://api.example.com/',
});


export interface API {
    getCourseList(): Promise<CourseView[]>;
    getTestList(): Promise<TestView[]>;
    getCourseDetail(courseId: number): Promise<CourseDetail>;
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
  },

  getCourseDetail(courseId: number) { // TODO: Real API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCourseDetails.find((c) => c.course_id === courseId));
        }, 2000);
    });
  }
}