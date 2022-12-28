export interface ISelectiveProcessHomeChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISelectiveProcessHomeChildrenData[];
}

export interface ISelectiveProcessHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISelectiveProcessHomeChildrenData[];
}

export interface IQuestionData {
  id?: number;
  question?: string;
  text?: string;
}
