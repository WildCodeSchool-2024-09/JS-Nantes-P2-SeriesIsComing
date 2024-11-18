// Import react modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import page components
import Card from "../components/Card";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Import page style sheet
import "./Series.css";

// Import data
import GOTdata from "../assets/GOTdata";
import PBcharacter from "../assets/PrisonBreakData";
import walkingDead from "../assets/wd";

// Import data interfaces
import type dataI from "../assets/interfaces/dataI";

function Series() {
  const { id } = useParams<string>();

  const [character, setCharacter] = useState<null | dataI[]>(null);

  useEffect(() => {
    switch (id) {
      case "1":
        setCharacter(GOTdata);
        break;
      case "2":
        setCharacter(walkingDead);
        break;
      // case "3":
      //   setCharacter();
      //   break;
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
      {character && id !== undefined ? (
        <Card character={character}/>
      ) : (
        <p>loading</p>
      )}
      <ScrollToTopButton />
    </>
  );
}

export default Series;
