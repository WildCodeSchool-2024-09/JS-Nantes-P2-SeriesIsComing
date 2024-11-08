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
        {character.map((personnage) => (
          <div className="card" key={personnage.id}>
            <figure>
              <img src={personnage.imageUrl} alt="This is a representation" />
              <figcaption>
                {personnage.firstName} {personnage.lastName}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
