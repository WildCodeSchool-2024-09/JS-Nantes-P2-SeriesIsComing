import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GOTdata from "../assets/GOTdata";
import Card from "../components/Card";
import "./Series.css";

export interface GOTdataI {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  family: string;
  imageUrl: string;
}

import ScrollToTopButton from "../components/ScrollToTopButton";

function Series() {
  const { id } = useParams();

  const [character, setCharacter] = useState<null | GOTdataI[]>(null);

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
      // case "4":
      //   setCharacter();
      // PBcharacter
      // break;
      default:
        console.warn("No valid page");
    }
  }, [id]);

  return (
    <>
      <h1 className="coucou">Hello from Series {id}</h1>
      {character ? <Card character={character} /> : <p>loading</p>}
      <ScrollToTopButton />
    </>
  );
}

export default Series;
