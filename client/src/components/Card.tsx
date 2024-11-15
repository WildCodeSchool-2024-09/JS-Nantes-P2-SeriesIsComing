// Import style sheet
import "./Card.css";

// Import data interfaces
import type dataI from "../assets/interfaces/dataI";
function Card({ character, id }: { character: dataI[]; id: string }) {
  return (
    <section>
      <div className="card-container">
        {character.map((charac) => (
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
