// Types for UserProvider

import type { ReactNode } from "react";
import type { UserI } from "../pages/ContactUs";

export type Children = {
  children: ReactNode;
};

export type UserProps = {
  user: UserI | null;
  setUser: (user: UserI) => void;
};
