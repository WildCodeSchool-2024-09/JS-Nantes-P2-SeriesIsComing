import "./Detail.css";
import { useLoaderData } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharctersI";
import FavoriteButton from "../components/ButtonFavorite";

function Detail() {
  const data = useLoaderData() as CharactersI;

  return (
    <body className="detail">
      <section className="section-detail">
        <hgroup>
          <img
            className="img-detail"
            src={data.imageUrl}
            alt={data.firstName}
          />
        </hgroup>
        <hgroup>
          <h2> Prenom </h2>
          <p>{data.firstName}</p>
        </hgroup>
        <hgroup>
          <h2> Nom </h2>
          <p>{data.lastName}</p>
        </hgroup>
        <hgroup>
          <h2> Description </h2>
          <p>{data.description}</p>
          <div className="div-button">
            <FavoriteButton />
          </div>
        </hgroup>
      </section>
    </body>
  );
}

export default Detail;
