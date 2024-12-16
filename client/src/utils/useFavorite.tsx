import { useContext } from "react";
import { FavoriteContext } from "../contexts/ProfileProvider";

function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("This context cannot be null!");
  }

  return context;
}

export default useFavorite;
