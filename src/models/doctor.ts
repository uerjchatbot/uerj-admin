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
  notice: IDoctorDefaultData;
  vacancies: IDoctorDefaultData;
  quotas: IDoctorDefaultData;
  registration: IDoctorDefaultData;
}

export interface ISecondStepData {
  documentation: IDoctorDefaultData;
  steps: IDoctorDefaultData;
  discretion: IDoctorDefaultData;
  enrollment: IDoctorDefaultData;
}

export interface IThirdStepData {
  results: IDoctorDefaultData;
  resources: IDoctorDefaultData;
}

export interface IDoctorProcessResults {
  homologation: IDoctorDefaultData;
  test: IDoctorDefaultData;
  analysis: IDoctorDefaultData;
  interview: IDoctorDefaultData;
  language: IDoctorDefaultData;
  outcome: IDoctorDefaultData;
}
