import { useState } from "react";

import "./Card.css";
import type CharactersI from "../assets/interfaces/CharctersI";
import useFilter from "../utils/useFilter";

function Card({
  characters,
  seriesFilter,
  search,
  id,
}: {
  characters: CharactersI[];
  seriesFilter: string;
  search: string;
  id: string;
}) {
  // const filterCharacters = characters.filter((character) =>
  //   character.lastName?.includes(seriesFilter),
  // );
  const filterCharacters = useFilter({
    id,
    array: characters,
    filterArgument: seriesFilter,
  });

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
      {filterCharacters
        .filter((el) => el.firstName.includes(search))
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
        ))}
    </section>
  );
}

export default Card;
