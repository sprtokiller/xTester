import axios from 'axios';
import type { CourseView } from '@/interfaces';
import { mockCourses } from '@/_mock';
const api = axios.create({
  baseURL: 'https://api.example.com/',
});


export interface API {
    getCourseList(): Promise<CourseView[]>;
    // updateUser(id: string, data: any): Promise<void>;
    // add other methods and properties here
  }

export const API = {
  getCourseList() {
    //return api.get(url, config);
    //return promise resolve after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCourses);
        }, 1000);
    });
  }
}