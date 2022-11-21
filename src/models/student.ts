export interface ITeacherData {
  id: number;
  question_id: number;
  name: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface IFfpData {
  id: number;
  question: string;
  father_question: number;
  title: string | null;
  response: boolean;
  identifier: string;
  created_at: string;
  update_at: string;
  teachers: ITeacherData[];
}

export interface ICordinationData {
  id: number;
  question: string;
  father_question: number;
  title: string | null;
  response: boolean;
  identifier: string;
  created_at: string;
  update_at: string;
  teachers: ITeacherData[];
}

export interface IRepresentationData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  identifier: string;
  created_at: string;
  updated_at: string;
}

export interface ITeachersData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  identifier: string;
  created_at: string;
  updated_at: string;
}

export interface IChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}

export interface IStudentHomeData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}

export interface ICalendarTitleData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}

export interface ICalendarChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: IChildrenData[];
}
