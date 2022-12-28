import { Home } from "@/page/home/main";
import { ViewHome } from "@/page/home/view";
import { HomeStudent } from "@/page/student/home";
import { CalendarPage } from "@/page/student/calendar";
import * as Private from "@/routes/paths/paths.private";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";
import { FacultAndStudents } from "@/page/student/faculty_and_students";
import { Matters } from "@/page/student/matters";
import { Events } from "@/page/student/events";
import { Schedules } from "@/page/student/schedules";
import { SelectiveProcess } from "@/page/student/selective_process";

export const PrivateRoutesComponents: RouteComponentInterface[] = [
  {
    path: Private.HOME_PATH(),
    Component: Home,
    breadcrumb: "Início"
  },
  {
    path: Private.VIEW_HOME_PATH(),
    Component: ViewHome,
    breadcrumb: "Editar início"
  },
  {
    path: Private.STUDENT_PATH(),
    Component: HomeStudent,
    breadcrumb: "1 - Aluno"
  },
  {
    path: Private.STUDENT_CALENDAR_PATH(),
    Component: CalendarPage,
    breadcrumb: " / 1 - Calendário letivo"
  },
  {
    path: Private.STUDENT_FACULTY_AND_STUDENDS(),
    Component: FacultAndStudents,
    breadcrumb: " / 2 - Corpos Docentes e Discentes"
  },
  {
    path: Private.STUDENT_MATTERS(),
    Component: Matters,
    breadcrumb: " / 3 - Disciplinas"
  },
  {
    path: Private.STUDENT_EVENTS(),
    Component: Events,
    breadcrumb: " / 4 - Eventos"
  },
  {
    path: Private.STUDENT_SCHEDULES(),
    Component: Schedules,
    breadcrumb: " / 5 - Horários"
  },
  {
    path: Private.STUDENT_SELECTIVE_PROCESS(),
    Component: SelectiveProcess,
    breadcrumb: " / 7 - Processo seletivo de bolsas"
  }
];
