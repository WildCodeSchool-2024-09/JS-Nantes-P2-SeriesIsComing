import "./Card.css";

interface Character {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  family: string;
  image: string;
}

interface CardProps {
  character: Character[];
}

function Card({ character }: CardProps) {
  return (
    <div className="card-container">
      {character.map((personnage) => (
        <div className="card" key={personnage.id}>
          <figure>
            <img
              src={personnage.image}
              alt="This is a representation of ${personnage.firstName}"
            />
            <figcaption>{personnage.firstName}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Card;
