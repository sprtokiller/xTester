export interface Course {
  id: number;
  name: string;
  author: string;
  version: number;
  group_hash: string;
}

export interface CourseView extends Course {
  active_tests: number;
  finished_tests: number;
  prepared_tests: number;
}