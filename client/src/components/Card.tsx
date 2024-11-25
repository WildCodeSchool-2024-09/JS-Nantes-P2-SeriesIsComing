import "./Card.css";
import { Link } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharctersI";

function Card({
  characters,
  familyFilter,
  search,
}: { characters: CharactersI[]; familyFilter: string; search: string }) {
  // Filtrer les personnages par famille et par recherche
  const filteredFamily = characters.filter(
    (character) =>
      character.lastName?.includes(familyFilter) &&
      character.firstName?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="card-container">
      {filteredFamily.map((charac: CharactersI) => (
        <Link key={charac.id} to={`/detail/${charac.id}`}>
          <div className="card-front">
            <img
              src={charac.imageUrl}
              alt={`${charac.firstName} ${charac.lastName}`}
            />
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Card;
