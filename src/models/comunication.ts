import { Meta } from "./meta";

export interface Comunication {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  text: string;
}

export type CreateComunication = Pick<Comunication, "title" | "text">;

export type List = {
  meta: Partial<Meta>;
  data: Comunication[];
};
