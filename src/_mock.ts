const JANUARY = 0;
const FEBRUARY = 1;
const MARCH = 2;
const APRIL = 3;
const MAY = 4;
const JUNE = 5;
const JULY = 6;
const AUGUST = 7;
const SEPTEMBER = 8;
const OCTOBER = 9;
const NOVEMBER = 10;
const DECEMBER = 11;

import type { CourseView, TestView, CourseDetail } from '@/interfaces';

export const mockCourseDetails: CourseDetail[] = [
    {
        course_id: 1,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        group_hash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        course_hash: 'x76CxTXo7UHsz92k'
    },
    {
        course_id: 2,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        group_hash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        course_hash: 'bxR_bN7eF90WPICq',
        tests: [
            {
                test_id: 5,
                name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                course_id: 2,
                // start in past and end in past -> 'Finished'
                created_at: new Date(2023, APRIL, 9, 12, 13, 2),
                start_at: new Date(2023, APRIL, 10, 8, 0, 0),
                end_type: 'PLAN',
                end_at: new Date(2023, APRIL, 14, 23, 59, 59),
                modules: [1, 2, 4]
            },
            {
                test_id: 6,
                name: 'Test 02 of \'xAPI_simple\' (version 7)',
                course_id: 2,
                // start in past and end in past -> 'Finished'
                created_at: new Date(2023, APRIL, 9, 12, 13, 2),
                start_at: new Date(2023, APRIL, 10, 8, 0, 0),
                end_type: 'AUTO',
                end_at: new Date(2023, APRIL, 12, 11, 38, 55),
                modules: [3, 5]
            },
            {
                test_id: 7,
                name: 'WIP test of \'xAPI_simple\' (version 7)',
                course_id: 2,
                // no start -> 'WIP' (no chip)
                created_at: new Date(2023, APRIL, 14, 12, 13, 2),
            }
        ]
    },
    {
        course_id: 4,
        name: 'Tvorba WWW stránek 1',
        author: 'Kateřina Chromčáková',
        version: 8,
        group_hash: 'd9fb6a33-e073-4603-aa7e-4c16b4b3b759',
        course_hash: '1cyFXEPcCxqzyOzf',
        tests: [
            {
                test_id: 1,
                name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
                course_id: 4,
                // start in past and MANUAL end -> 'Active'
                created_at: new Date(2023, MARCH, 16, 10, 45, 16),
                start_at: new Date(2023, MARCH, 18, 8, 0, 0),
                end_type: 'MANUAL',
                modules: [1, 2, 3, 4, 5]
            },
            {
                test_id: 2,
                name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
                course_id: 4,
                // started and end in future -> 'Active'
                created_at: new Date(2023, MARCH, 16, 10, 51, 18),
                start_at: new Date(2023, MARCH, 18, 8, 0, 0),
                end_type: 'PLAN',
                end_at: new Date(2025, MARCH, 18, 8, 0, 0),
                modules: [1, 4]
            },
            {
                test_id: 3,
                name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
                course_id: 4,
                // start in future and MANUAL/future end -> 'Planned'
                created_at: new Date(2023, MARCH, 17, 12, 13, 2),
                start_at: new Date(2024, MARCH, 18, 8, 0, 0),
                end_type: 'AUTO',
                modules: [1, 4, 5]
            }
        ]
    }
];

export const mockCourses: CourseView[] = [
    {
        course_id: 1,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        group_hash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        running_tests: 0,
        completed_tests: 0,
        planned_tests: 0
    },
    {
        course_id: 2,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        group_hash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        running_tests: 0,
        completed_tests: 2,
        planned_tests: 0
    },
    {
        course_id: 4,
        name: 'Tvorba WWW stránek 1',
        author: 'Kateřina Chromčáková',
        version: 8,
        group_hash: 'd9fb6a33-e073-4603-aa7e-4c16b4b3b759',
        running_tests: 2,
        completed_tests: 0,
        planned_tests: 1
    }
];

export const mockTests: TestView[] = [
    {
        test_id: 1,
        name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
        course_id: 4,
        // start in past and MANUAL end -> 'Active'
        created_at: new Date(2023, MARCH, 16, 10, 45, 16),
        start_at: new Date(2023, MARCH, 18, 8, 0, 0),
        end_type: 'MANUAL',
        modules: [1, 2, 3, 4, 5]
    },
    {
        test_id: 2,
        name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
        course_id: 4,
        // started and end in future -> 'Active'
        created_at: new Date(2023, MARCH, 16, 10, 51, 18),
        start_at: new Date(2023, MARCH, 18, 8, 0, 0),
        end_type: 'PLAN',
        end_at: new Date(2025, MARCH, 18, 8, 0, 0),
        modules: [1, 4]
    },
    {
        test_id: 3,
        name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
        course_id: 4,
        // start in future and MANUAL/future end -> 'Planned'
        created_at: new Date(2023, MARCH, 17, 12, 13, 2),
        start_at: new Date(2024, MARCH, 18, 8, 0, 0),
        end_type: 'AUTO',
        modules: [1, 4, 5]
    },
    {
        test_id: 5,
        name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        course_id: 2,
        // start in past and end in past -> 'Finished'
        created_at: new Date(2023, APRIL, 9, 12, 13, 2),
        start_at: new Date(2023, APRIL, 10, 8, 0, 0),
        end_type: 'PLAN',
        end_at: new Date(2023, APRIL, 14, 23, 59, 59),
        modules: [1, 2, 4]
    },
    {
        test_id: 6,
        name: 'Test 02 of \'xAPI_simple\' (version 7)',
        course_id: 2,
        // start in past and end in past -> 'Finished'
        created_at: new Date(2023, APRIL, 9, 12, 13, 2),
        start_at: new Date(2023, APRIL, 10, 8, 0, 0),
        end_type: 'AUTO',
        end_at: new Date(2023, APRIL, 12, 11, 38, 55),
        modules: [3, 5]
    },
    {
        test_id: 7,
        name: 'WIP test of \'xAPI_simple\' (version 7)',
        course_id: 2,
        // no start -> 'WIP' (no chip)
        created_at: new Date(2023, APRIL, 14, 12, 13, 2),
    }
];