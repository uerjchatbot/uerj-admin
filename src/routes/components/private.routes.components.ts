import { Home } from "@/page/home/main";
import { ViewHome } from "@/page/home/view";
import { HOME_PATH, VIEW_HOME_PATH } from "@/routes/paths/paths.private";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";

export const PrivateRoutesComponents: RouteComponentInterface[] = [
  {
    path: HOME_PATH(),
    Component: Home
  },
  {
    path: VIEW_HOME_PATH(),
    Component: ViewHome
  }
];
