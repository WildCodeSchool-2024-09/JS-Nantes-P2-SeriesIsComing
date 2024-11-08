import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data";
import Card from "../components/Card";
import type { Character } from "../components/Card";

function Series() {
  const { id } = useParams();

  const [character, setCharacter] = useState<null | Character[]>(null);

  useEffect(() => {
    setCharacter(data);
  });

  // console.warn(character);

  // useEffect(() => {
  //   async function getApi() {
  //     // if(id) {
  //     //   const url = urls[id as keyof typeof urls]

  //     // }
  //     const response = await fetch("https://thronesapi..com/api/v2/Characters");
  //     const data = await response.json();
  //     setCharacter(data);
  //   }
  //   getApi();
  // }, []);

  return (
    <>
      <h1>Hello from Series {id}</h1>
      {character ? <Card character={character} /> : <p>loading</p>}
    </>
  );
}

export default Series;