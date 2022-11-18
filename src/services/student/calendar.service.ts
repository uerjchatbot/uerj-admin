import { ICalendarTitleData, ICalendarChildrenData } from "@/models/student";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(titleId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${titleId}`);
  },

  updateTitle(titleId: number, title: string): AxiosPromise<ICalendarTitleData> {
    return api.put(`question/${titleId}`, { title });
  },

  getCalendarChildrenData(childrenId: number): AxiosPromise<ICalendarChildrenData> {
    return api.get(`question/${childrenId}`);
  },

  //? FirstQuestion
  updateFirstQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período letivo para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.put(`question/${questionId}`, {
      title,
      question
    });
  },

  //? SecondQuestion
  updateSecondQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período de recesso para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.put(`question/${questionId}`, {
      title,
      question
    });
  },

  //? ThirdQuestion
  updateThirdQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período de recesso para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.put(`question/${questionId}`, {
      title,
      question
    });
  },

  //? FourthQuestion
  updateFourthQuestion(questionId: number, question: string): AxiosPromise<any> {
    const title = "O período de recesso para alunos do PPGEdu tem início em |x| e finaliza em |x|";

    return api.put(`question/${questionId}`, {
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
    return api.put(`calendar/question/${questionId}`, {
      title,
      initial_date: initialDate,
      final_date: finalDate
    });
  }
};
