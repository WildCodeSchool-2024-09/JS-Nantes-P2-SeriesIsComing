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
import seriesData from "../assets/seriesData";

// Import data interfaces
import type CharactersI from "../assets/interfaces/CharctersI";

function Series() {
  const { id } = useParams<string>();

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
      {characters && id !== undefined ? (
        <Card characters={characters} familyFilter={familyFilter} />
      ) : (
        <p>loading</p>
      )}
      <ScrollToTopButton />
    </>
  );
}

export default Series;
