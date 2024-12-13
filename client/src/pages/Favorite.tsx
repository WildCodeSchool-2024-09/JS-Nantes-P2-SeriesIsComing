import "./Favorite.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { FavoriteCharI } from "../assets/interfaces/FavoriteCharI";

function Favorite() {
  // Retrieve charcater data from localstorage
  const [parseData, setParseData] = useState<FavoriteCharI[] | []>([]);

  useEffect(() => {
    const retrieveData = localStorage.getItem("favorites");
    setParseData(retrieveData && JSON.parse(retrieveData));
  }, []);

  const removeFavorite = (firstName: string) => {
    // update
    const updatedData = parseData?.filter((el) => el.firstName !== firstName);
    setParseData(updatedData);

    const stringifiedData = JSON.stringify(updatedData);
    localStorage.setItem("favorites", stringifiedData);
  };

  return (
    <div className="favorite">
      <section className="card-container">
        {parseData ? (
          parseData.map((el) => (
            <div key={el.firstName}>
              <NavLink to={`/series/${el.seriesId}/detail/${el.id}`}>
                <figure className="card-fav">
                  <img
                    src={el.imageUrl}
                    alt={`Representation of ${el.firstName}`}
                  />
                  <figcaption>
                    {el.firstName} {el.lastName}
                  </figcaption>
                </figure>
              </NavLink>
              <button
                type="button"
                onClick={() => {
                  removeFavorite(el.firstName);
                }}
              >
                🗑
              </button>
            </div>
          ))
        ) : (
          <p>pouet</p>
        )}
      </section>
    </div>
  );
}

export default Favorite;
