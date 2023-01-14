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
  title?: string;
  link?: string;
  question?: string;
}
