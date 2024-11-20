import type { MouseEvent } from "react";
import { families } from "../assets/data/dataFamiliesGOT";
import type { FamilyFiltersI } from "../assets/interfaces/FamilyFiltersI";
import "../components/SideBar.css";

function SideBar({ familyFilter, setFamilyFilter }: FamilyFiltersI) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const familyValue = (event.target as HTMLElement).innerText;
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
