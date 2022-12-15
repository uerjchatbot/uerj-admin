import { Login } from "@/page/login";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { RouteComponentInterface } from "@/types/interface/routes/route-component.interface";

export const PublicRoutesComponents: RouteComponentInterface[] = [
  {
    path: INITIAL_PATH(),
    Component: Login
  }
];
