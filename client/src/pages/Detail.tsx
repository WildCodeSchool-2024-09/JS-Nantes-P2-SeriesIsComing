import type CharactersI from "../assets/interfaces/CharactersI";
import "./Detail.css";
import { useLoaderData } from "react-router-dom";

import type { FavoriteCharI } from "../assets/interfaces/FavoriteCharI";

function Detail() {
  const data = useLoaderData() as CharactersI;

  const retrieveData = localStorage.getItem("favorites");

  const char: FavoriteCharI = {
    firstName: data.firstName,
    lastName: data.lastName,
    id: data.id,
    img: data.imageUrl,
  };

  if (!retrieveData) {
    const dataToStorage = JSON.stringify([char]);
    localStorage.setItem("favorites", dataToStorage);
    console.warn(dataToStorage, "coucou");
  } else {
    const parseData = JSON.parse(retrieveData) as undefined | FavoriteCharI[];
    if (parseData) {
      if (!parseData.find((el) => el.firstName === data.firstName)) {
        parseData.push(char);
        const updatedParseData = JSON.stringify(parseData);
        localStorage.setItem("favorites", updatedParseData);
      }
    }
  }

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
