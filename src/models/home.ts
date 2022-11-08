export interface IHomeData {
  id: number;
  question: string | null;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IHomeChildrenData[];
}

export interface IHomeChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IHomeChildrenData[];
}
