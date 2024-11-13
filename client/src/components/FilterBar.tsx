import { useState } from "react";

interface eventI {
  target: targetI;
}

interface targetI {
  value: string;
}

function FilterBar() {
  const [search, setSearch] = useState<string>("");
  const handleChange = (event: eventI) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <input
        id="filter-bar"
        type="text"
        name="filter-bar"
        placeholder="Filtre les personnages"
        value={search}
        onChange={handleChange}
      />
      <label htmlFor="filter-bar">Recherche :</label>
    </>
  );
}

export default FilterBar;
