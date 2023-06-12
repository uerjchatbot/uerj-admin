export interface CreateFormAPI {
  title: string;
  documentTitle?: string;
}

export interface CreateFormRequestAPI {
  info: CreateFormAPI;
}

export interface CreateFormResponseAPI {
  formId: string;
  info: CreateFormAPI;
  revisionId: string;
  responderUri: string;
}

export interface CreateFormRequest {
  questionId: string;
  title: string;
  userId: string;
}

export interface OptionsFormAPI {
  value: string;
}

export interface TextQuestionFormAPI {
  paragraph: boolean;
}

interface ChoiceQuestionFormAPI {
  type: QuestionOptionType;
  options: OptionsFormAPI[];
}

interface QuestionFormAPI {
  // textQuestion?: TextQuestionFormAPI;
  choiceQuestion?: ChoiceQuestionFormAPI;
}

interface QuestionItemFormAPI {
  question: QuestionFormAPI;
}

export interface ItemFormAPI {
  title: string;
  description?: string;
  questionItem: QuestionItemFormAPI;
}

interface LocationFormAPI {
  index: number;
}

export interface CreateItemFomAPI {
  item: ItemFormAPI;
  location: LocationFormAPI;
}

export interface RequestFormAPI {
  createItem?: CreateItemFomAPI;
}

export interface CreateForm {
  form: CreateFormResponseAPI;
  questionId: string;
}

export interface RequestsFormAPI {
  requests: RequestFormAPI[];
}

export type QuestionOptionType = "CHECKBOX" | "RADIO";

export interface FormQuestion {
  title: string;
  // description: string;
  type: QuestionOptionType;
  options?: OptionsFormAPI[];
}

export interface RequestFormCreateQuestions {
  questions: FormQuestion[];
  formId: string;
  userId: string;
}

export const questionTypeMap = {
  // TEXT: { textQuestion: { paragraph: true } },
  CHECKBOX: { choiceQuestion: { type: "CHECKBOX", options: [] } },
  RADIO: { choiceQuestion: { type: "RADIO", options: [] } }
};

export interface CreatedFormResponse {
  created_at: string;
  form_id: string;
  form_url: string;
  id: string;
  question_id: string;
  updated_at: string;
}
