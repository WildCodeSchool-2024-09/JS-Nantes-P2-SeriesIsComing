import "./Card.css";
import { Link } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharactersI";
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
        <p>No characters found</p>
      )}
    </section>
  );
}
export default Card;
