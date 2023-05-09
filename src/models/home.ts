export interface IHomeData {
  id: string;
  chatbot_id: number;
  node_chatbot_id: number | null;
  question: string;
  title: string;
  response: boolean;
  updated_at: string;
  childrens: IHomeData[];
}
