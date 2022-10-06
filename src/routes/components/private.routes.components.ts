import { Home } from "@/page/home/main";
import { ViewHome } from "@/page/home/view";
import { HomeStudent } from "@/page/student/home";
import { CalendarPage } from "@/page/student/calendar";
// import { HOME_PATH, STUDENT_PATH, VIEW_HOME_PATH } from "@/routes/paths/paths.private";
import * as Private from "@/routes/paths/paths.private";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";

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
  }
];
