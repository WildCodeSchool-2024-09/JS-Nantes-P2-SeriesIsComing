import "./Favorite.css";
import type { FavoriteCharI } from "../assets/interfaces/FavoriteCharI";

function Favorite() {
  // Retrieve charcater data from localstorage
  const retrieveData = localStorage.getItem("favorites");

  const parseData: FavoriteCharI[] | null =
    retrieveData && JSON.parse(retrieveData);

  return (
    <div className="favorite">
      <section className="card-container">
        {parseData ? (
          parseData.map((el) => (
            <figure key={el.id} className="card-fav">
              <img
                src={el.imageUrl}
                alt={`Representation of ${el.firstName}`}
              />
              <figcaption>
                {el.firstName} {el.lastName}
              </figcaption>
            </figure>
          ))
        ) : (
          <p>Aucun personnage ajouté aux favoris !</p>
        )}
      </section>
    </div>
  );
}

export default Favorite;
