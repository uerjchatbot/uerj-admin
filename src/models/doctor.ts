import { Question } from "./Question";

export interface IDoctorDefaultData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IDoctorDefaultData[];
}

export interface ICalendarTitleData extends IDoctorDefaultData {}

export interface IDoctorHomeData extends IDoctorDefaultData {}

export interface IDoctorUpdateData {
  id?: number;
  title?: string;
  link?: string;
  question?: string;
}

export interface IFirstStepData {
  notice: Question;
  vacancies: Question;
  quotas: Question;
  registration: Question;
}

export interface ISecondStepData {
  documentation: Question;
  steps: Question;
  discretion: Question;
  enrollment: Question;
}

export interface IThirdStepData {
  results: Question;
  resources: Question;
}

export interface IDoctorProcessResults {
  homologation: IDoctorDefaultData;
  test: IDoctorDefaultData;
  analysis: IDoctorDefaultData;
  interview: IDoctorDefaultData;
  language: IDoctorDefaultData;
  outcome: IDoctorDefaultData;
}

export interface IDoctorProgram {
  program: Question;
  lines: Question;
  project: Question;
  handbag: Question;
}

export interface IDoctorTeacher {
  index: number;
  teacher: string;
}
