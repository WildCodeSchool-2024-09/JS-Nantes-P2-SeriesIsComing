import { useState } from "react";
import "./FilterBar.css";

interface eventI {
  target: targetI;
}

interface targetI {
  value: string;
}

function FilterBar() {
  const [search, setSearch] = useState<string>("");
  const MAX_LENGTH = 20;

  const handleChange = (event: eventI) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setSearch(event.target.value);
    }
  };

  const maximumReached = search.length >= MAX_LENGTH;
  // const filterCard = search ? character.filter((el) => el.firstName.includes(search) : character);

  return (
    <>
      <input
        id="filter-bar"
        type="text"
        name="filter-bar"
        placeholder="Filtre les personnages"
        value={search}
        onChange={handleChange}
        className={maximumReached ? "length-maximum-reached" : "length-ok"}
      />
      <label htmlFor="filter-bar" id="label-search">
        Recherche :
      </label>
    </>
  );
}

export default FilterBar;
