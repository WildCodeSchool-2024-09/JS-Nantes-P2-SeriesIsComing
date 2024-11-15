import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GOTdata from "../assets/GOTdata";
import Card from "../components/Card";
import "./Series.css";

import ScrollToTopButton from "../components/ScrollToTopButton";

export interface GOTdataI {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  family: string;
  imageUrl: string;
}

interface eventI {
  target: targetI;
}

interface targetI {
  value: string;
}

function Series() {
  const { id } = useParams();

  const [character, setCharacter] = useState<null | GOTdataI[]>(null);

  const [search, setSearch] = useState<string>("");

  const MAX_LENGTH = 20;

  const handleChange = (event: eventI) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setSearch(event.target.value);
    }
  };

  const maximumReached = search.length >= MAX_LENGTH;

  useEffect(() => {
    switch (id) {
      case "1":
        setCharacter(GOTdata);
        break;
      // case "2":
      //   setCharacter();
      //   break;
      // case "3":
      //   setCharacter();
      //   break;
      // case "4":
      //   setCharacter();
      // PBcharacter
      // break;
      default:
        console.warn("No valid page");
    }
  }, [id]);

  return (
    <>
      <section id="filter-bar">
        <input
          id="filter-bar"
          type="text"
          name="filter-bar"
          placeholder="Filtre les personnages"
          value={search}
          onChange={handleChange}
          className={maximumReached ? "length-maximum-reached" : "length-ok"}
        />
        <label htmlFor="filter-bar" id="label-search">
          Recherche :
        </label>
      </section>
      {character ? (
        <Card character={character} search={search} />
      ) : (
        <p>loading</p>
      )}
      <ScrollToTopButton />
    </>
  );
}

export default Series;
