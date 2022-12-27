export interface ISchedulesHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISchedulesHomeChildrenData[];
}

export interface ISchedulesHomeChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISchedulesHomeChildrenData[];
}

export interface ISchedulesHoursData {
  index: number;
  group: string;
  mastermind: string;
  day_week: string;
  hour: string;
}
