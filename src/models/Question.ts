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

export interface ProcessFirstStepData {
  notice: Question;
  vacancies: Question;
  quotas: Question;
  registration: Question;
}

export interface ProcessSecondStepData {
  documentation: Question;
  steps: Question;
  discretion: Question;
  enrollment: Question;
}

export interface ProcessThirdStepData {
  results: Question;
  resources: Question;
}
