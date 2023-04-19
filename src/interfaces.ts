export interface Course {
  course_id: number;
  name: string;
  author: string;
  version: number;
  group_hash: string;
}

export interface CourseView extends Course {
  planned_tests: number;
  running_tests: number;
  completed_tests: number;
}

export interface CourseDetail extends Course {
  course_hash: string;
  tests?: TestView[];
}

export interface Test {
  test_id: number;
  name: string;
  course_id: number;
  created_at: Date;
  start_at?: Date;
  end_type?: "PLAN" | "MANUAL" | "AUTO";
  end_at?: Date;
}

export interface TestView extends Test {
  modules?: number[];
}