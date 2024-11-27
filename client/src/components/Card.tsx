import "./Card.css";
import { Link } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharctersI";
import { useFilter } from "../utils/useFilter";

function Card({
  seriesFilter,
  search,
  id,
}: {
  seriesFilter: string;
  search: string;
  id: string;
}) {
  // Filtrer les personnages par famille et par recherche
  const filterCharacters = useFilter({
    id,
    seriesFilter,
  });

  return (
    <section className="card-container">
      {filterCharacters !== undefined ? (
        filterCharacters
          .filter((el) => el.firstName.includes(search))
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
        <p>No characters found</p>
      )}
    </section>
  );
}
export default Card;
