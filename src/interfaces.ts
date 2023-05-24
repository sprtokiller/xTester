export interface ICourse {
  courseUUID: string
  name: string
  author: string
  version: number
  groupHash: string
}

export interface ITimeSpan {
  startAt?: Date
  endAt?: Date
}

export interface ICourseView extends ICourse {
  tests: ITimeSpan[]
  contentType: 'RISE' | 'STORYLINE' | 'STUDIO' | 'OTHER'
}

export interface ICourseDetail extends ICourse {
  courseLocation: string
  tests?: ITestView[]
  otherVersions?: ICourse[]
}

export type EndType = 'MANUAL' | 'PLAN' 

export interface ITest {
  testUUID: string
  name: string
  courseUUID: string
  createdAt: Date
  startAt?: Date
  endType: EndType
  endAt?: Date
}

export interface ITestView extends ITest {
  modules?: number[]
}

export interface IUser {
  userUUID: string
  firstname?: string
  lastname?: string
  email?: string
}

export interface IUserGroup {
  name: string
  userUUIDs: IUser[]
  groupUUID: string
  colorID: number
}
