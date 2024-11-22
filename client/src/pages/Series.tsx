// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import page components
import Card from "../components/Card";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SideBar from "../components/SideBar";

// Import page style sheet
import "./Series.css";

// Import data
import seriesData from "../assets/data/seriesData";

// Import data interfaces
import type CharactersI from "../assets/interfaces/CharctersI";
import type EventI from "../assets/interfaces/EventI";

function Series() {
  const { id } = useParams<string>();

  const [search, setSearch] = useState<string>("");

  const maxLength = 20;

  const handleChange = (event: EventI) => {
    if (event.target.value.length <= maxLength) {
      setSearch(event.target.value);
    }
  };

  const maximumReached = search.length >= maxLength;
  const [characters, setCharacters] = useState<null | CharactersI[]>(null);

  const [seriesFilter, setSeriesFilter] = useState<string>("");

  useEffect(() => {
    const findSeries = seriesData.find((serie) => serie.id === id);
    if (findSeries) {
      setCharacters(findSeries.dataName);
    }
  }, [id]);

  return (
    <>
      <SideBar seriesFilter={seriesFilter} setSeriesFilter={setSeriesFilter} />
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
      {characters && id !== undefined ? (
        <Card
          characters={characters}
          seriesFilter={seriesFilter}
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
