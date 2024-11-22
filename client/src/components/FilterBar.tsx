import "./FilterBar.css";
import type EventI from "../assets/interfaces/EventI";

interface SearchI {
  search: string;
  setSearch: (index: string) => void;
}

function FilterBar({ search, setSearch }: SearchI) {
  const maxLength = 20;

  const handleChange = (event: EventI) => {
    if (event.target.value.length <= maxLength) {
      setSearch(event.target.value);
    }
  };

  const maximumReached = search.length >= maxLength;

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
