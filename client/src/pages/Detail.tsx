import type CharactersI from "../assets/interfaces/CharctersI";
import "./Detail.css";
import { useLoaderData } from "react-router-dom";

function Detail() {
  const data = useLoaderData() as CharactersI;

  return (
    <main className="detail">
      <section>
        <hgroup>
          <h2> Image </h2>
          <img src={data.imageUrl} alt={data.firstName} />
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
        </hgroup>
      </section>
    </main>
  );
}

export default Detail;
