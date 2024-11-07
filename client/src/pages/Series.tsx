import { useParams } from "react-router-dom";
import Card from "../components/Card";

// const series = [
//   {
//     id: 1,
//     seriesName: "Game Of Thrones",
//   },
//   {
//     id: 2,
//     seriesName: "The Walking Dead",
//   },
//   {
//     id: 3,
//     seriesName: "House of Cards",
//   },
//   {
//     id: 4,
//     seriesName: "Breaking Bad",
//   }
// ]

const character = [
  {
    id: 0,
    firstName: "Daenerys",
    lastName: "Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  {
    id: 1,
    firstName: "Samwell",
    lastName: "Tarly",
    title: "Maester",
    family: "House Tarly",
    image: "https://thronesapi.com/assets/images/sam.jpg",
  },
  {
    id: 2,
    firstName: "Jon",
    lastName: "Snow",
    title: "King of the North",
    family: "House Stark",
    image: "https://thronesapi.com/assets/images/jon-snow.jpg",
  },
  {
    id: 3,
    firstName: "Arya",
    lastName: "Stark",
    title: "No One",
    family: "House Stark",
    image: "https://thronesapi.com/assets/images/arya-stark.jpg",
  },
];

function Series() {
  const { id } = useParams();

  return (
    <>
      <h1>Hello from Series {id}</h1>
      <Card character={character} />
    </>
  );
}

export default Series;
