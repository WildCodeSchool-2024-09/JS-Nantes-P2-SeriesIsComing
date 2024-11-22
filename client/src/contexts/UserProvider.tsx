import { createContext, useState } from "react";
import type { ReactNode } from "react";

export const UserContext = createContext<UserProps | null>(null);

export type Children = {
  children: ReactNode;
};

export type UserProps = {
  user: [] | never[];
  setUser: (value: []) => void;
};

export default function UserProvider({ children }: Children) {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
