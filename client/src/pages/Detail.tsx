import "./Detail.css";
import { useLoaderData } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharactersI";
import FavoriteButton from "../components/ButtonFavorite";

function Detail() {
  const data = useLoaderData() as CharactersI;

  return (
    <main className="detail">
      <section className="section-detail">
        <section className="img-center">
          <hgroup>
            <img
              className="img-detail"
              src={data.imageUrl}
              alt={data.firstName}
            />
          </hgroup>
          <section className="card-center">
            <hgroup>
              <h2> Prenom </h2>
              <p>{data.firstName}</p>
            </hgroup>
            <hgroup>
              <h2> Nom </h2>
              <p>{data.lastName}</p>
            </hgroup>
            <div className="div-button">
              <FavoriteButton data={data} />
            </div>
          </section>
        </section>

        <hgroup>
          <h2 className="description-style"> Description </h2>
          <p>{data.description}</p>
        </hgroup>
      </section>
    </main>
  );
}

export default Detail;
