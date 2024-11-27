import { useState } from "react";

import "./Card.css";
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
  const filterCharacters = useFilter({
    id,
    seriesFilter,
  });
  console.warn(filterCharacters);
  const [flippedStates, setFlippedStates] = useState<Record<number, boolean>>(
    {},
  );

  const handleFlip = (charId: number): void => {
    setFlippedStates((prevStates) => ({
      ...prevStates,
      [charId]: !prevStates[charId],
    }));
  };

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
            <button
              type="button"
              onClick={() => handleFlip(charac.id)}
              key={charac.id}
              className={`card-inner ${flippedStates[charac.id] ? "flipped" : ""}`}
            >
              <div className="card-front">
                <img
                  src={charac.imageUrl}
                  alt={`${charac.firstName} ${charac.lastName}`}
                />
              </div>
              <div className="card-back">
                <p>{charac.description || "Information indisponible"}</p>
              </div>
            </button>
          ))
      ) : (
        <p>No character to filter</p>
      )}
    </section>
  );
}

export default Card;
