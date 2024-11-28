import { useState } from "react";
import "./ButtonFavorite.css";

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorited(!isFavorited);
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
