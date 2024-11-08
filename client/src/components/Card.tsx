import "./Card.css";

export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

interface CardProps {
  character: Character[];
}

function Card({ character }: CardProps) {
  return (
    <div>
      <div className="card-container">
        {character.map((charac) => (
          <div className="card" key={charac.id}>
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
