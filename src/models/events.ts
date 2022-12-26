interface ITeacherData {
  index: number;
  teacher: string;
}

export interface IEventChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IEventChildrenData[];
}

export interface IEventsHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IEventChildrenData[];
}

export interface IEventData {
  date: string;
  hour: string;
  link: string;
  name: string;
}

export interface IEditHomeDataResponse {
  oneQuestion: Omit<IEventsHomeData, "childrens">;
}

export interface IFirstStepEventData {
  date: string;
  hour: string;
  teachers: ITeacherData[];
}

export interface IEventBoardData {
  teachers: ITeacherData[];
}
