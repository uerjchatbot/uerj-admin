import { Home } from "@/page/home/main";
import { ViewHome } from "@/page/home/view";
import { HomeStudent } from "@/page/student/home";
import { HOME_PATH, STUDENT_PATH, VIEW_HOME_PATH } from "@/routes/paths/paths.private";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";

export const PrivateRoutesComponents: RouteComponentInterface[] = [
  {
    path: HOME_PATH(),
    Component: Home,
    breadcrumb: "Início"
  },
  {
    path: VIEW_HOME_PATH(),
    Component: ViewHome,
    breadcrumb: "Editar início"
  },
  {
    path: STUDENT_PATH(),
    Component: HomeStudent,
    breadcrumb: "1 - Aluno"
  }
];
