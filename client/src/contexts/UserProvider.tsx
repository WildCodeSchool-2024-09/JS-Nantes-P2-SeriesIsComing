import { createContext, useState } from "react";
import type { UserI } from "../assets/interfaces/UserI";
import type { Children, UserProps } from "../types/context";

export const UserContext = createContext<UserProps | null>(null);

export default function UserProvider({ children }: Children) {
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
