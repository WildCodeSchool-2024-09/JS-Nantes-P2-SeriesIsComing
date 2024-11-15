// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import page components
import Card from "../components/Card";
import SideBar from "../components/SideBar";
import "./Series.css";

import ScrollToTopButton from "../components/ScrollToTopButton";

// Import page style sheet
import "./Series.css";

// Import data
import GOTdata from "../assets/GOTdata";
import PBcharacter from "../assets/PrisonBreakData";
import { breakinBadCharacters } from "../assets/breakinBadCharacters";
import walkingDead from "../assets/wd";

// Import data interfaces
import type dataI from "../assets/interfaces/dataI";

interface eventI {
  target: targetI;
}

interface targetI {
  value: string;
}

function Series() {
  const { id } = useParams<string>();

  const [character, setCharacter] = useState<null | dataI[]>(null);

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
      case "2":
        setCharacter(walkingDead);
        break;
      case "3":
        setCharacter(breakinBadCharacters);
        break;
      case "4":
        setCharacter(PBcharacter);
        PBcharacter;
        break;
      default:
        console.warn("No valid page");
    }
  }, [id]);

  return (
    <>
      <SideBar />
      {character && id !== undefined ? (
        <Card character={character} id={id} search={search} />
      ) : (
        <p>loading</p>
      )}
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
      <ScrollToTopButton />
    </>
  );
}

export default Series;
