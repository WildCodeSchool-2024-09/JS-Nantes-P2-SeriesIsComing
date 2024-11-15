// Import style sheet
import "./Card.css";

// Import data interfaces
import type dataI from "../assets/interfaces/dataI";
function Card({
  character,
  id,
  search,
}: { character: dataI[]; id: string; search: string }) {
  return (
    <section>
      <div className="card-container">
        {character
          .filter((el) => el.firstName.includes(search))
          .map((charac) => (
            <article className={`card-${id}`} key={charac.id}>
              <figure>
                <img src={charac.imageUrl} alt="This is a representation" />
                <figcaption className="card-caption">
                  {charac.firstName}{" "}
                  {charac.lastName !== "Unkown" ? charac.lastName : ""}
                </figcaption>
              </figure>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Card;
