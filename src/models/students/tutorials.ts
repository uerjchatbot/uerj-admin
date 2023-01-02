import React from "react";

export interface ITutorialHomeChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ITutorialHomeChildrenData[];
}

export interface ITutorialHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ITutorialHomeChildrenData[];
}

export interface ICalendarData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ITutorialHomeChildrenData[];
}

export interface IEditCalendarModalData {
  id: number | undefined;
  questionId: number;
  datesArr: ITutorialHomeData;
  setData: React.Dispatch<React.SetStateAction<ITutorialHomeData>>;
}
