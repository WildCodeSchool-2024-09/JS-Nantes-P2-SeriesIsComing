import { useState } from "react";
import "./Card.css";
import type dataI from "../assets/interfaces/dataI";

interface CardProps {
  character: dataI[];
}

const Card: React.FC<CardProps> = ({ character }) => {
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
        {character.map((charac) => (
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
};

export default Card;
