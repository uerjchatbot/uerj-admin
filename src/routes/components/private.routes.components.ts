import { Home } from "@/page/home";
import { HOME_PATH } from "@/routes/paths/paths.private";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";

export const PrivateRoutesComponents: RouteComponentInterface[] = [
  {
    path: HOME_PATH(),
    Component: Home,
  },
];
