// Import style sheet
import "./Card.css";

// Import data interfaces
import type dataI from "../assets/interfaces/dataI";
function Card({
  character,
  id,
  familyFilter,
}: { character: dataI[]; id: string; familyFilter: string }) {
  const filteredFamily = character.filter((family) =>
    family.lastName?.includes(familyFilter),
  );

  console.warn("Est-ce que je suis rééxécuté ?? ", filteredFamily);

  return (
    <section>
      <div className="card-container">
        {filteredFamily.map((charac) => (
          <article className={`card-${id}`} key={charac.id}>
            <figure>
              <img src={charac.imageUrl} alt="This is a representation" />
              <figcaption>
                {charac.firstName} {charac.lastName}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;
