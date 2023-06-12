import { CreatedFormResponse, FormQuestion } from "@/models/form";
import { AxiosPromise } from "axios";
import { api } from "../api";

interface CreateForm {
  title: string;
  token: string;
  questionId: string;
}

interface CreateFormQuestions {
  formId: string;
  questions: FormQuestion[];
  token: string;
}

export interface Fetch {
  id: string;
  title: string;
  form_id: string;
  form_url: string;
  created_at: string;
  updated_at: string;
  question_id: string;
}

export interface FetchResponse {
  forms: Fetch[];
}

export const FormService = {
  create({ title, token, questionId }: CreateForm): AxiosPromise<CreatedFormResponse> {
    return api.post(`/forms/${questionId}`, { title, token });
  },

  createQuestion(data: CreateFormQuestions): AxiosPromise<any> {
    return api.post(`/forms/create-questions`, data);
  },

  list(questionId: string): AxiosPromise<FetchResponse> {
    return api.get(`/forms/${questionId}`);
  }
};
