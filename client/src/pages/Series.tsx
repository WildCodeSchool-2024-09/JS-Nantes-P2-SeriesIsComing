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

// Import data interfaces
import type { SeriesI } from "../assets/interfaces/SeriesI";

function Series() {
  const { id } = useParams<string>();

  const [search, setSearch] = useState<string>("");

  const [series, setSeries] = useState<SeriesI[] | []>([]);

  const [familyFilter, setFamilyFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:4000/api/series")
      .then((response) => response.json())
      .then((data) => setSeries(data));
  }, []);

  const charactersSeries = series.find((serie) => serie.id === id);

  const characters = charactersSeries?.dataSeries;

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
