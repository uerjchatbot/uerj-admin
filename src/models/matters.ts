export interface IMattersChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IMattersChildrenData[];
}

export interface IMattersHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  created_at: string;
  updated_at: string;
  childrens: IMattersChildrenData[];
}
