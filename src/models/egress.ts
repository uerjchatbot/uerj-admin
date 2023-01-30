export interface IEgressDefaultData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IEgressDefaultData[];
}
