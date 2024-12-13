import { createContext, useState } from "react";

import type { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export type FavProps = {
  favorite: boolean;
  setFavorite: (value: boolean) => void;
};

export const FavoriteContext = createContext<FavProps | null>(null);

export default function FavoriteProvider({ children }: Children) {
  const [favorite, setFavorite] = useState(false);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
