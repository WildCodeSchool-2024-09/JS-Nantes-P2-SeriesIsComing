// Import style sheet
import "./Card.css";

// Import data interfaces
import type { GOTdataI } from "../assets/interfaces/GOTdataI";
import type { PBdataI } from "../assets/interfaces/PBdataI";
import type { walkingDeadI } from "../assets/interfaces/walkingDeadI";

function Card({
  character,
  id,
}: { character: GOTdataI[] | PBdataI[] | walkingDeadI[]; id: string }) {
  return (
    <div>
      <div className="card-container">
        {character.map((charac) => (
          <div className={`card-${id}`} key={charac.id}>
            <figure>
              <img src={charac.imageUrl} alt="This is a representation" />
              <figcaption>
                {charac.firstName} {charac.lastName}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
