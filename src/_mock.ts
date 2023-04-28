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
        courseUUID: '98f3ee48-7593-4504-9d48-3ace56f96c93',
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        courseHash: 'x76CxTXo7UHsz92k',
        otherVersions: [
            {
                courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
                name: 'xAPI_simple',
                author: 'Vítězslav Kříž',
                version: 7,
                groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb'
            }
        ]
    },
    {
        courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        courseHash: 'bxR_bN7eF90WPICq',
        otherVersions: [
            {
                courseUUID: '98f3ee48-7593-4504-9d48-3ace56f96c93',
                name: 'xAPI_simple',
                author: 'Vítězslav Kříž',
                version: 5,
                groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb'
            }
        ],
        tests: [
            {
                testUUID: '018244af-c099-43e0-9be6-0eb928fb12d6',
                name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
                // start in past and end in past -> 'Finished'
                createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
                startAt: new Date(2023, APRIL, 10, 8, 0, 0),
                endType: 'PLAN',
                endAt: new Date(2023, APRIL, 14, 23, 59, 59),
                modules: [1, 2, 4]
            },
            {
                testUUID: 'dcc0c679-3ae1-473a-a042-b7c72fb9b553',
                name: 'Test 02 of \'xAPI_simple\' (version 7)',
                courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
                // start in past and end in past -> 'Finished'
                createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
                startAt: new Date(2023, APRIL, 10, 8, 0, 0),
                endType: 'AUTO',
                endAt: new Date(2023, APRIL, 12, 11, 38, 55),
                modules: [3, 5]
            },
            {
                testUUID: '3a8fccb1-9113-43f4-b410-e10eb947e33a',
                name: 'WIP test of \'xAPI_simple\' (version 7)',
                courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
                // no start -> 'WIP' (no chip)
                createdAt: new Date(2023, APRIL, 14, 12, 13, 2),
            }
        ]
    },
    {
        courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
        name: 'Tvorba WWW stránek 1',
        author: 'Kateřina Chromčáková',
        version: 8,
        groupHash: 'd9fb6a33-e073-4603-aa7e-4c16b4b3b759',
        courseHash: '1cyFXEPcCxqzyOzf',
        tests: [
            {
                testUUID: 'cfcd95eb-4c13-4432-9a96-1892b4268b97',
                name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
                courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
                // start in past and MANUAL end -> 'Active'
                createdAt: new Date(2023, MARCH, 16, 10, 45, 16),
                startAt: new Date(2023, MARCH, 18, 8, 0, 0),
                endType: 'MANUAL',
                modules: [1, 2, 3, 4, 5]
            },
            {
                testUUID: '76ec0911-7a99-43a0-9d9c-ae3aa38180fc',
                name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
                courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
                // started and end in future -> 'Active'
                createdAt: new Date(2023, MARCH, 16, 10, 51, 18),
                startAt: new Date(2023, MARCH, 18, 8, 0, 0),
                endType: 'PLAN',
                endAt: new Date(2025, MARCH, 18, 8, 0, 0),
                modules: [1, 4]
            },
            {
                testUUID: '51e60bef-24d7-48a2-9e27-4e3f7e6c9fff',
                name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
                courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
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
        courseUUID: '98f3ee48-7593-4504-9d48-3ace56f96c93',
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 5,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        runningTests: 0,
        completedTests: 0,
        plannedTests: 0
    },
    {
        courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
        name: 'xAPI_simple',
        author: 'Vítězslav Kříž',
        version: 7,
        groupHash: 'da41b34d-fbd7-4428-a4b5-7028cd401bdb',
        runningTests: 0,
        completedTests: 2,
        plannedTests: 0
    },
    {
        courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
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
        testUUID: 'cfcd95eb-4c13-4432-9a96-1892b4268b97',
        name: 'Test 01 of \'Tvorba WWW stránek 1\' (version 8)',
        courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
        // start in past and MANUAL end -> 'Active'
        createdAt: new Date(2023, MARCH, 16, 10, 45, 16),
        startAt: new Date(2023, MARCH, 18, 8, 0, 0),
        endType: 'MANUAL',
        modules: [1, 2, 3, 4, 5]
    },
    {
        testUUID: '76ec0911-7a99-43a0-9d9c-ae3aa38180fc',
        name: 'Test 02 of \'Tvorba WWW stránek 1\' (version 8)',
        courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
        // started and end in future -> 'Active'
        createdAt: new Date(2023, MARCH, 16, 10, 51, 18),
        startAt: new Date(2023, MARCH, 18, 8, 0, 0),
        endType: 'PLAN',
        endAt: new Date(2025, MARCH, 18, 8, 0, 0),
        modules: [1, 4]
    },
    {
        testUUID: '51e60bef-24d7-48a2-9e27-4e3f7e6c9fff',
        name: 'Test 03 of \'Tvorba WWW stránek 1\' (version 8)',
        courseUUID: '0cd1da66-5db8-4218-9ab1-06134a0c7bf6',
        // start in future and MANUAL/future end -> 'Planned'
        createdAt: new Date(2023, MARCH, 17, 12, 13, 2),
        startAt: new Date(2024, MARCH, 18, 8, 0, 0),
        endType: 'AUTO',
        modules: [1, 4, 5]
    },
    {
        testUUID: '018244af-c099-43e0-9be6-0eb928fb12d6',
        name: 'Můj pojmenovaný test \'xAPI_simple\' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
        // start in past and end in past -> 'Finished'
        createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
        startAt: new Date(2023, APRIL, 10, 8, 0, 0),
        endType: 'PLAN',
        endAt: new Date(2023, APRIL, 14, 23, 59, 59),
        modules: [1, 2, 4]
    },
    {
        testUUID: 'dcc0c679-3ae1-473a-a042-b7c72fb9b553',
        name: 'Test 02 of \'xAPI_simple\' (version 7)',
        courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
        // start in past and end in past -> 'Finished'
        createdAt: new Date(2023, APRIL, 9, 12, 13, 2),
        startAt: new Date(2023, APRIL, 10, 8, 0, 0),
        endType: 'AUTO',
        endAt: new Date(2023, APRIL, 12, 11, 38, 55),
        modules: [3, 5]
    },
    {
        testUUID: '3a8fccb1-9113-43f4-b410-e10eb947e33a',
        name: 'WIP test of \'xAPI_simple\' (version 7)',
        courseUUID: '5e06909d-12ff-4c50-a460-c28d9eca69b7',
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