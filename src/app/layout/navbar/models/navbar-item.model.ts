import { IconNamesEnum } from "ngx-bootstrap-icons";

import { NavbarItemPath } from "./navbar-item-path.enum";

export interface NavbarItem {
  title: string;
  path: NavbarItemPath;
  icon: IconNamesEnum;
}
