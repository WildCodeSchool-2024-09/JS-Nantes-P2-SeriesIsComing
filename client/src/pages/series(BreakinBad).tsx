import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import type { CharacterData } from "../types/character";
import breakinBadCharacters from "../assets/breakinBadCharacters";

function Series() {
  const { id } = useParams();

  const [character, setCharacter] = useState<null | CharacterData[]>(null);

  useEffect(() => {
    setCharacter(breakinBadCharacters);
  }, []);

  return (
    <>
      <h1>Hello from Series {id}</h1>
      {character ? <Card character={character} /> : <p>loading</p>}
    </>
  );
}

export default Series;
