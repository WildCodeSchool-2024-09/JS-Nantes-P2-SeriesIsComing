import "./Card.css";
import type { GOTdataI } from "../pages/Series";

function Card({ character }: { character: GOTdataI[] }) {
  return (
    <div>
      <div className="card-container">
        {character.map((charac) => (
          <div className="card" key={charac.id}>
            <figure>
              <img src={charac.imageUrl} alt="This is a representation" />
              <figcaption className="card-caption">
                {charac.firstName}{" "}
                {charac.lastName !== "Unkown" ? charac.lastName : ""}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
