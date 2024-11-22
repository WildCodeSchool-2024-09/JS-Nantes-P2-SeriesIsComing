// Types for UserProvider

import type { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export type UserProps = {
  user: [] | never[];
  setUser: (value: []) => void;
};
