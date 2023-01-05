export interface IChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}

export interface IMasterHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}
