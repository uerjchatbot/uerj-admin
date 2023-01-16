export interface IMasterDefaultData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IMasterDefaultData[];
}

export interface ICalendarTitleData extends IMasterDefaultData {}

export interface IMasterHomeData extends IMasterDefaultData {}

export interface IMasterUpdateData {
  id?: number;
  title?: string;
  link?: string;
  question?: string;
}

export interface IFirstStepData {
  notice: IMasterDefaultData;
  vacancies: IMasterDefaultData;
  quotas: IMasterDefaultData;
  registration: IMasterDefaultData;
}

export interface ISecondStepData {
  documentation: IMasterDefaultData;
  steps: IMasterDefaultData;
  discretion: IMasterDefaultData;
  enrollment: IMasterDefaultData;
}

export interface IThirdStepData {
  results: IMasterDefaultData;
  resources: IMasterDefaultData;
}

export interface IDoctorProcessResults {
  homologation: IMasterDefaultData;
  test: IMasterDefaultData;
  analysis: IMasterDefaultData;
  interview: IMasterDefaultData;
  language: IMasterDefaultData;
  outcome: IMasterDefaultData;
}
