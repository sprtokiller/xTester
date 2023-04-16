import axios from 'axios';
import type { Course } from '@/interfaces';
import { mockCourses } from '@/_mock';
const api = axios.create({
  baseURL: 'https://api.example.com/',
});


export interface API {
    getCourses(): Promise<Course[]>;
    // updateUser(id: string, data: any): Promise<void>;
    // add other methods and properties here
  }

export const API = {
  getCourses() {
    //return api.get(url, config);
    //return promise resolve after 1 second
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCourses);
        }, 1000);
    });
  }
}