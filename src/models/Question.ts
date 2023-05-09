export interface Question {
  id: string;
  chatbot_id: number;
  node_chatbot_id: number | null;
  question: string;
  title: string;
  childrens: Question[];
  response: boolean;
  updated_at: string;
  created_at: string;
}
