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

import type { CourseView, TestView, CourseDetail, User, UserGroup } from '@/interfaces';

export const mockCourseDetails: CourseDetail[] = [
    {
        courseID: 1,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        courseHash: 'x76CxTXo7UHsz92k',
        otherVersions: [
            {
                courseID: 2,
                name: 'xAPI_simple',
                author: 'Vítězslav Kříž',
                version: 7,
                groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb'
            }
        ]
    },
    {
        courseID: 2,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        courseHash: 'bxR_bN7eF90WPICq',
        otherVersions: [
            {
                courseID: 1,
                name: 'xAPI_simple',
                author: 'Vítězslav Kříž',
                version: 5,
                groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb'
            }
        ],
        tests: [
            {
                testID: 5,
                name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                courseID: 2,
                // start in past and end in past -> 'Finished'
                createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
                startAt: new Date(2023, APRIL, 10, 8, 0, 0),
                endType: 'PLAN',
                endAt: new Date(2023, APRIL, 14, 23, 59, 59),
                modules: [1, 2, 4]
            },
            {
                testID: 6,
                name: 'Test 02 of \'xAPI_simple\' (version 7)',
                courseID: 2,
                // start in past and end in past -> 'Finished'
                createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
                startAt: new Date(2023, APRIL, 10, 8, 0, 0),
                endType: 'AUTO',
                endAt: new Date(2023, APRIL, 12, 11, 38, 55),
                modules: [3, 5]
            },
            {
                testID: 7,
                name: 'WIP test of \'xAPI_simple\' (version 7)',
                courseID: 2,
                // no start -> 'WIP' (no chip)
                createdAt: new Date(2023, APRIL, 14, 12, 13, 2),
            }
        ]
    },
    {
        courseID: 4,
        name: 'Tvorba WWW stránek 1',
        author: 'Kateřina Chromčáková',
        version: 8,
        groupHash: 'd9fb6a33-e073-4603-aa7e-4c16b4b3b759',
        courseHash: '1cyFXEPcCxqzyOzf',
        tests: [
            {
                testID: 1,
                name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
                courseID: 4,
                // start in past and MANUAL end -> 'Active'
                createdAt: new Date(2023, MARCH, 16, 10, 45, 16),
                startAt: new Date(2023, MARCH, 18, 8, 0, 0),
                endType: 'MANUAL',
                modules: [1, 2, 3, 4, 5]
            },
            {
                testID: 2,
                name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
                courseID: 4,
                // started and end in future -> 'Active'
                createdAt: new Date(2023, MARCH, 16, 10, 51, 18),
                startAt: new Date(2023, MARCH, 18, 8, 0, 0),
                endType: 'PLAN',
                endAt: new Date(2025, MARCH, 18, 8, 0, 0),
                modules: [1, 4]
            },
            {
                testID: 3,
                name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
                courseID: 4,
                // start in future and MANUAL/future end -> 'Planned'
                createdAt: new Date(2023, MARCH, 17, 12, 13, 2),
                startAt: new Date(2024, MARCH, 18, 8, 0, 0),
                endType: 'AUTO',
                modules: [1, 4, 5]
            }
        ]
    }
];

export const mockCourses: CourseView[] = [
    {
        courseID: 1,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        runningTests: 0,
        completedTests: 0,
        plannedTests: 0
    },
    {
        courseID: 2,
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        runningTests: 0,
        completedTests: 2,
        plannedTests: 0
    },
    {
        courseID: 4,
        name: 'Tvorba WWW stránek 1',
        author: 'Kateřina Chromčáková',
        version: 8,
        groupHash: 'd9fb6a33-e073-4603-aa7e-4c16b4b3b759',
        runningTests: 2,
        completedTests: 0,
        plannedTests: 1
    }
];

export const mockTests: TestView[] = [
    {
        testID: 1,
        name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
        courseID: 4,
        // start in past and MANUAL end -> 'Active'
        createdAt: new Date(2023, MARCH, 16, 10, 45, 16),
        startAt: new Date(2023, MARCH, 18, 8, 0, 0),
        endType: 'MANUAL',
        modules: [1, 2, 3, 4, 5]
    },
    {
        testID: 2,
        name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
        courseID: 4,
        // started and end in future -> 'Active'
        createdAt: new Date(2023, MARCH, 16, 10, 51, 18),
        startAt: new Date(2023, MARCH, 18, 8, 0, 0),
        endType: 'PLAN',
        endAt: new Date(2025, MARCH, 18, 8, 0, 0),
        modules: [1, 4]
    },
    {
        testID: 3,
        name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
        courseID: 4,
        // start in future and MANUAL/future end -> 'Planned'
        createdAt: new Date(2023, MARCH, 17, 12, 13, 2),
        startAt: new Date(2024, MARCH, 18, 8, 0, 0),
        endType: 'AUTO',
        modules: [1, 4, 5]
    },
    {
        testID: 5,
        name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        courseID: 2,
        // start in past and end in past -> 'Finished'
        createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
        startAt: new Date(2023, APRIL, 10, 8, 0, 0),
        endType: 'PLAN',
        endAt: new Date(2023, APRIL, 14, 23, 59, 59),
        modules: [1, 2, 4]
    },
    {
        testID: 6,
        name: 'Test 02 of \'xAPI_simple\' (version 7)',
        courseID: 2,
        // start in past and end in past -> 'Finished'
        createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
        startAt: new Date(2023, APRIL, 10, 8, 0, 0),
        endType: 'AUTO',
        endAt: new Date(2023, APRIL, 12, 11, 38, 55),
        modules: [3, 5]
    },
    {
        testID: 7,
        name: 'WIP test of \'xAPI_simple\' (version 7)',
        courseID: 2,
        // no start -> 'WIP' (no chip)
        createdAt: new Date(2023, APRIL, 14, 12, 13, 2),
    }
];

export const mockUsers: User[] = [
    {
        userUUID: 'f2c9bdc0-31c8-41e5-92a1-8a0d68c0321d',
        firstname: 'Vítězslav',
        lastname: 'Kříž',
        email: 'sprtokiller.6c@gmail.com'
    }
];