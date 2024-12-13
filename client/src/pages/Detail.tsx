import "./Detail.css";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import type CharactersI from "../assets/interfaces/CharactersI";
import FavoriteButton from "../components/ButtonFavorite";

function Detail() {
  const data = useLoaderData() as CharactersI;

  const { id } = useParams();

  return (
    <main className="detail">
      <NavLink to={`/series/${id}`}>
        <div className="button-return">
          <p>Retour</p>
        </div>
      </NavLink>
      <section className="section-detail">
        <section className="img-center">
          <div className="image-container">
            <img
              className="img-detail"
              src={data.imageUrl}
              alt={data.firstName}
            />
          </div>
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
              <FavoriteButton data={data} seriesId={id} />
            </div>
          </section>
        </section>

        <hgroup className="description-container">
          <h2 className="description-style"> Description </h2>
          <p>{data.description}</p>
        </hgroup>
      </section>
    </main>
  );
}

export default Detail;
