// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import page components
import Card from "../components/Card";
import SideBar from "../components/SideBar";
import "./Series.css";
import FilterBar from "../components/FilterBar";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Import page style sheet
import "./Series.css";

// Import data
import GOTdata from "../assets/data/GOTdata";
import PBcharacter from "../assets/data/PrisonBreakData";
import breakinBadCharacters from "../assets/data/breakinBadCharacters";
import walkingDead from "../assets/data/wd";

// Import data interfaces
import type DataI from "../assets/interfaces/DataI";

function Series() {
  const { id } = useParams<string>();

  const [character, setCharacter] = useState<null | DataI[]>(null);

  const [search, setSearch] = useState<string>("");

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
      <section id="filter-bar">
        <FilterBar search={search} setSearch={setSearch} />
      </section>
      {character && id !== undefined ? (
        <Card character={character} search={search} />
      ) : (
        <p>loading</p>
      )}

      <ScrollToTopButton />
    </>
  );
}

export default Series;
