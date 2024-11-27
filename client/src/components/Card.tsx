// Import React Modules
import { Link } from "react-router-dom";

// Import Custom Hook
import { useFilter } from "../utils/useFilter";

// Import React Interfaces
import type { CardI } from "../assets/interfaces/CardI";
import type CharactersI from "../assets/interfaces/CharactersI";

// Import Style
import "./Card.css";

function Card({ seriesFilter, search, id }: CardI) {
  const filterCharacters = useFilter({
    id,
    seriesFilter,
  });

  return (
    <section className="card-container">
      {filterCharacters !== undefined ? (
        filterCharacters
          .filter(
            (el) =>
              el.firstName.toLowerCase().includes(search.toLowerCase()) ||
              el.lastName?.toLowerCase().includes(search.toLowerCase()),
          )
          .map((charac: CharactersI) => (
            <Link key={charac.id} to={`/series/${id}/detail/${charac.id}`}>
              <div className="card-front">
                <img
                  src={charac.imageUrl}
                  alt={`${charac.firstName} ${charac.lastName}`}
                />
              </div>
            </Link>
          ))
      ) : (
        <p>No character found</p>
      )}
    </section>
  );
}
export default Card;
