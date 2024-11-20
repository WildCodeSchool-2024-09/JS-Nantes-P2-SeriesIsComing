import { useState } from "react";
import "./Card.css";
import type CharactersI from "../assets/interfaces/CharctersI";

function Card({
  characters,
  familyFilter,
}: { characters: CharactersI[]; familyFilter: string }) {
  const filteredFamily = characters.filter((family) =>
    family.lastName?.includes(familyFilter),
  );

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
      {filteredFamily.map((charac: CharactersI) => (
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
