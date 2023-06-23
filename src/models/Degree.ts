import { GiDoctorFace, GiMasterOfArms, GiMultipleTargets } from "react-icons/gi";
import { IconType } from "react-icons/lib";

export interface Degree {
  id?: string;
  degree: "master" | "doctor" | "union";
  icon?: IconType;
}

export const degrees: Degree[] = [
  {
    id: "7b1a9d28-5eef-11eb-8c82-8d80b2d19438",
    degree: "master",
    icon: GiMasterOfArms
  },
  {
    id: "f4babe5d-5eef-11eb-8c82-8d80b2d19438",
    degree: "doctor",
    icon: GiDoctorFace
  },
  {
    id: "7b1a9d28-5eef-11eb-8c82-8d80b2d1219e",
    degree: "union",
    icon: GiMultipleTargets
  }
];

export const DegreeTranspile = {
  master: "Mestrado",
  doctor: "Doutorado",
  union: "Mestrado e Doutorado"
};
