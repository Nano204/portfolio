import { IconNamesEnum } from "ngx-bootstrap-icons";

import { NavbarItem, NavbarItemPath, NavbarItemTitle } from "./models";

export const pages: NavbarItem[] = [
    {
      title: NavbarItemTitle.HOME,
      path: NavbarItemPath.HOME,
      icon: IconNamesEnum.House,
    },
    {
      title: NavbarItemTitle.PROFILE,
      path: NavbarItemPath.PROFILE,
      icon: IconNamesEnum.PersonCircle,
    },
    {
      title: NavbarItemTitle.STACK,
      path: NavbarItemPath.STACK,
      icon: IconNamesEnum.Stack,
    },
    {
      title: NavbarItemTitle.PROJECTS,
      path: NavbarItemPath.PROJECTS,
      icon: IconNamesEnum.JournalCode,
    },
  ];