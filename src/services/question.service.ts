import { Question } from "@/models/Question";
import { AxiosPromise } from "axios";
import { api } from "./api";

export const QuestionServices = {
  create(
    question: Omit<Question, "id" | "chatbot_id" | "updated_at" | "created_at" | "childrens">
  ): AxiosPromise<Question> {
    return api.post(`/questions`, question);
  },

  getQuestionByNodeId(nodeId: number): AxiosPromise<Question> {
    return api.get(`/questions/${nodeId}`);
  },

  getQuestion(question: Question): AxiosPromise<Question> {
    return api.get(`/questions/${question.chatbot_id}`);
  },

  updateQuestion(question: Question): AxiosPromise<Question> {
    return api.patch(`/questions/${question.id}`, {
      title: question.title,
      question: question.question
    });
  },

  deleteQuestion(question: Question): AxiosPromise<void> {
    return api.delete(`/questions/${question.id}`);
  }
};
