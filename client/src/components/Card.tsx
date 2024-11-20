import { useState } from "react";
import "./Card.css";

// Import data interfaces
import type CardI from "../assets/interfaces/CardI";

function Card({ character, search }: CardI) {
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
    <section>
      <div className="card-container">
        {character
          .filter((el) => el.firstName.includes(search))
          .map((charac) => (
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
      </div>
    </section>
  );
}

export default Card;
