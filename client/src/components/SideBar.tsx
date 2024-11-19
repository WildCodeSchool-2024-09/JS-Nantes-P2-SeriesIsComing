import type { MouseEvent } from "react";
import "../components/SideBar.css";

const families = [
  {
    name: "Targaryen",
    image:
      "https://th.bing.com/th/id/R.21cbab467bba4128f2affe32c71757be?rik=IOS%2bJma4fmbVVw&pid=ImgRaw&r=0",
  },
  {
    name: "Stark",
    image:
      "https://www.pngitem.com/pimgs/m/115-1150419_stark-game-of-thrones-stark-logo-png-transparent.png",
  },
  {
    name: "Lannister",
    image:
      "https://i.etsystatic.com/14980242/r/il/6d95b5/1289225300/il_794xN.1289225300_k9sf.jpg",
  },
  {
    name: "Baratheon",
    image:
      "https://th.bing.com/th/id/OIP.A15v83ZnJU-6s6mLFw8G5gHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Greyjoy",
    image:
      "https://th.bing.com/th/id/R.2038d44d4ecf244a68e68dbc2ad800b4?rik=7MQitibvLpEmFg&pid=ImgRaw&r=0",
  },
  {
    name: "Tyrell",
    image:
      "https://th.bing.com/th/id/R.3b89dddcdd8ff0a728dcd7b5feeb3ee7?rik=uDRANVojum7G6Q&riu=http%3a%2f%2fwww.freestencilgallery.com%2fwp-content%2fuploads%2f2014%2f05%2fGame-of-Thrones-House-Tyrell-Sigil-Stencil-Thumb.jpg&ehk=x25psSzApIHhwAw%2fBqDuL23qUWFFyCMiPOnyyjVOnkc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Martell",
    image:
      "https://inkboxdesigns.imgix.net/artist_designs/img_395bd6046ec69c5cb84dd699e7497c52_627c0b8c3b4cc.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7",
  },
];

export interface FamilyI {
  familyFilter: string;
  setFamilyFilter: (index: string) => void;
}

function SideBar({ familyFilter, setFamilyFilter }: FamilyI) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const familyValue = (event.target as HTMLElement).innerText;
    console.warn("pouet", familyValue);
    setFamilyFilter(familyFilter === familyValue ? "" : familyValue);
  };

  return (
    <div className="sidebar">
      <h3>Filtre selon ta famille préférée !</h3>
      {families.map((family) => (
        <button type="button" key={family.name} onClick={handleClick}>
          <figure>
            <img
              className="logo-button"
              src={family.image}
              alt={`This is the representation of House ${family.name}`}
            />
            <figcaption>{family.name}</figcaption>
          </figure>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
