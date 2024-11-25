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

  const [seriesFilter, setSeriesFilter] = useState<string>("");

  useEffect(() => {
    const findSeries = seriesData.find((serie) => serie.id === id);
    if (findSeries) {
      setCharacters(findSeries.dataSeries);
    }
  }, [id]);

  return (
    <>
      {id && (
        <SideBar
          seriesFilter={seriesFilter}
          setSeriesFilter={setSeriesFilter}
          id={id}
        />
      )}
      <section id="filter-bar">
        <FilterBar search={search} setSearch={setSearch} />
      </section>
      {characters && id !== undefined ? (
        <Card
          characters={characters}
          seriesFilter={seriesFilter}
          search={search}
          id={id}
        />
      ) : (
        <p>loading</p>
      )}

      <ScrollToTopButton />
    </>
  );
}

export default Series;
