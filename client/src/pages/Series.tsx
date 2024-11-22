// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import page components
import Card from "../components/Card";
import "./Series.css";
import FilterBar from "../components/FilterBar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SideBar from "../components/SideBar";

// Import page style sheet
import "./Series.css";

// Import data
import seriesData from "../assets/data/seriesData";

// Import data interfaces
import type CharactersI from "../assets/interfaces/CharctersI";

function Series() {
  const { id } = useParams<string>();

  const [search, setSearch] = useState<string>("");

  const [characters, setCharacters] = useState<null | CharactersI[]>(null);

  const [familyFilter, setFamilyFilter] = useState<string>("");

  useEffect(() => {
    const findSeries = seriesData.find((serie) => serie.id === id);
    if (findSeries) {
      setCharacters(findSeries.dataName);
    }
  }, [id]);

  return (
    <>
      <SideBar familyFilter={familyFilter} setFamilyFilter={setFamilyFilter} />
      <section id="filter-bar">
        <FilterBar search={search} setSearch={setSearch} />
      </section>
      {characters && id !== undefined ? (
        <Card
          characters={characters}
          familyFilter={familyFilter}
          search={search}
        />
      ) : (
        <p>loading</p>
      )}

      <ScrollToTopButton />
    </>
  );
}

export default Series;
