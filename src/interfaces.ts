export interface Course {
  courseUUID: string;
  name: string;
  author: string;
  version: number;
  groupHash: string;
}

export interface CourseView extends Course {
  plannedTests: number;
  runningTests: number;
  completedTests: number;
}

export interface CourseDetail extends Course {
  courseHash: string;
  tests?: TestView[];
  otherVersions?: Course[];
}

export interface Test {
  testUUID: string;
  name: string;
  courseUUID: string;
  createdAt: Date;
  startAt?: Date;
  endType?: "PLAN" | "MANUAL" | "AUTO";
  endAt?: Date;
}

export interface TestView extends Test {
  modules?: number[];
}

export interface User {
  userUUID: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export interface UserGroup {
  name: string;
  userUUIDs: User[];
  groupUUID: string;
  colorID: number;
}
