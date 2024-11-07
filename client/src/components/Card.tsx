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

function Card() {
  return (
    <>
      <p>This is {character[0].firstName}</p>
    </>
  );
}

export default Card;
