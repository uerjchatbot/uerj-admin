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
  title?: string;
  link?: string;
  question?: string;
}
