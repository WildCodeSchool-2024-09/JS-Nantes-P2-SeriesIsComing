import { useParams } from "react-router-dom";

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

function Series() {
  const { id } = useParams();

  return (
    <>
      <h1>Hello from Series {id}</h1>
    </>
  );
}

export default Series;
