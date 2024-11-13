import "./Card.css";
import type { GOTdataI } from "../pages/Series";

function Card({ character, id }: { character: GOTdataI[]; id: string }) {
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
