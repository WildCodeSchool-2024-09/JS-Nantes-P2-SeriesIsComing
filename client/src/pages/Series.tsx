import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GOTdata from "../assets/GOTdata";
import PBcharacter from "../assets/PrisonBreakData";
import Card from "../components/Card";
import "./Series.css";
import type { GOTdataI } from "../assets/interfaces/GOTdataI";
import type { PBdataI } from "../assets/interfaces/PBdataI";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Series() {
  const { id } = useParams<string>();

  const [character, setCharacter] = useState<null | GOTdataI[] | PBdataI[]>(
    null,
  );

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
      <h1 className="coucou">Hello from Series {id}</h1>
      {character && id !== undefined ? (
        <Card character={character} id={id} />
      ) : (
        <p>loading</p>
      )}
      <ScrollToTopButton />
    </>
  );
}

export default Series;
