import { Question } from "@/models/Question";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getQuestion(question: Question): AxiosPromise<Question> {
    return api.get(`questions/${question.chatbot_id}`);
  },

  updateQuestion(question: Question): AxiosPromise<Question> {
    return api.patch(`questions/${question.id}`, { title: question.title });
  },

  getCalendarChildrenData(node_id: number): AxiosPromise<Question> {
    return api.get(`questions/${node_id}`);
  },

  //? FirstQuestion
  updateFirstQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período letivo para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.patch(`questions/${questionId}`, {
      title,
      question
    });
  },

  //? SecondQuestion
  updateSecondQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período de recesso para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.patch(`questions/${questionId}`, {
      title,
      question
    });
  },

  //? ThirdQuestion
  updateThirdQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período de recesso para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.patch(`question/${questionId}`, {
      title,
      question
    });
  },

  updateThirdQuestionChildren(childrenId: number, title: string): AxiosPromise<any> {
    return api.patch(`question/${childrenId}`, { title });
  },

  //? FourthQuestion
  updateFourthQuestion(questionId: number, question: string, title: string): AxiosPromise<any> {
    return api.patch(`question/${questionId}`, {
      title,
      question
    });
  },

  updateQuestionDate(
    questionId: number,
    title: string,
    initialDate: string,
    finalDate: string
  ): AxiosPromise<any> {
    return api.patch(`calendar/question/${questionId}`, {
      title,
      initial_date: initialDate,
      final_date: finalDate
    });
  }
};
