import type { MouseEvent } from "react";
import { families } from "../assets/dataFamiliesGOT";
import type { FamilyI } from "../assets/interfaces/familyI";
import "../components/SideBar.css";

function SideBar({ familyFilter, setFamilyFilter }: FamilyI) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const familyValue = (event.target as HTMLElement).innerText;
    console.warn("pouet", familyValue);
    setFamilyFilter(familyFilter === familyValue ? "" : familyValue);
  };

  return (
    <div className="sidebar">
      <h3>Filtre en choisissant ta famille préférée !</h3>
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
