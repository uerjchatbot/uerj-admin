import React from "react";

export interface ISelectiveProcessHomeChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISelectiveProcessHomeChildrenData[];
}

export interface ISelectiveProcessHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ISelectiveProcessHomeChildrenData[];
}

export interface IQuestionData {
  id?: number;
  question?: string;
  text?: string;
}

export interface IEditModalData {
  id?: number;
  index?: number;
  questionId?: number;
  question?: string;
  title?: string;
  setData: React.Dispatch<React.SetStateAction<ISelectiveProcessHomeData>>;
}
