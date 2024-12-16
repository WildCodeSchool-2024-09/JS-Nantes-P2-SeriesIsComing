import { useEffect, useState } from "react";
import "./ButtonFavorite.css";
import type CharactersI from "../assets/interfaces/CharactersI";

const FavoriteButton = ({
  data,
  seriesId,
}: { data: CharactersI; seriesId: string | undefined }) => {
  const char: CharactersI = {
    firstName: data.firstName,
    lastName: data.lastName,
    id: data.id,
    imageUrl: data.imageUrl,
    seriesId: seriesId,
  };

  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const retrieveData = localStorage.getItem("favorites");

  useEffect(() => {
    if (retrieveData) {
      const parseRetrieveData = JSON.parse(retrieveData);
      if (parseRetrieveData.length > 0) {
        const upDatedData = parseRetrieveData.find(
          (el: CharactersI) => el.firstName === char.firstName,
        );
        if (upDatedData && upDatedData.firstName === char.firstName) {
          setIsFavorited(true);
        }
      }
    }
  });

  const toggleFavorite = (): void => {
    setIsFavorited(!isFavorited);

    if (!retrieveData) {
      const dataToStorage = JSON.stringify([char]);
      localStorage.setItem("favorites", dataToStorage);
    }

    if (retrieveData) {
      const parsedStorage: CharactersI[] = JSON.parse(retrieveData);
      const isCharacterStored = parsedStorage.some(
        (el) => el.firstName === char.firstName,
      );

      if (!isCharacterStored) {
        const tempArray = [...parsedStorage, char];
        localStorage.setItem("favorites", JSON.stringify(tempArray));
      } else {
        const filteredArr = parsedStorage.filter(
          (el) => el.firstName !== char.firstName,
        );

        if (!filteredArr.length) {
          localStorage.removeItem("favorites");
        } else {
          const parsedFilteredArr = JSON.stringify(filteredArr);
          localStorage.setItem("favorites", parsedFilteredArr);
        }
      }
    }
  };

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorited ? "favorited" : ""}`}
      onClick={toggleFavorite}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <span className="heart-icon" />
      <span className="button-text">
        {isFavorited ? "Retirer des favoris" : "Ajouter aux favoris"}
      </span>
    </button>
  );
};

export default FavoriteButton;
