import { createContext, useState } from "react";
import type { Children, UserProps } from "../types/context";

export const UserContext = createContext<UserProps | null>(null);

export default function UserProvider({ children }: Children) {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
