// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import Components
import Card from "../components/Card";
import FilterBar from "../components/FilterBar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SideBar from "../components/SideBar";

// Import data interfaces
import type { SeriesI } from "../assets/interfaces/SeriesI";

// Import page style sheet
import "./Series.css";

function Series() {
  const { id } = useParams<string>();

  const [search, setSearch] = useState<string>("");

  const [series, setSeries] = useState<SeriesI[] | []>([]);

  const [seriesFilter, setSeriesFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:4000/api/series")
      .then((response) => response.json())
      .then((data) => setSeries(data));
  }, []);

  const charactersSeries = series.find((serie) => serie.id === id);

  const characters = charactersSeries?.dataSeries;

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
        <Card seriesFilter={seriesFilter} search={search} id={id} />
      ) : (
        <p>loading</p>
      )}

      <ScrollToTopButton />
    </>
  );
}

export default Series;
