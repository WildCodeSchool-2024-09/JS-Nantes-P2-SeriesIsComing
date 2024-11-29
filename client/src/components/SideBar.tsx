// Import Data
import { filterSeries } from "../assets/data/filterSeries";

// Import Types and Interfaces
import type { MouseEvent } from "react";
import type { SeriesFiltersI } from "../assets/interfaces/SeriesFilterI";
import type { TableFilterI } from "../assets/interfaces/TableInterfaceI";

// Import Style Sheets
import "../components/SideBar.css";

function SideBar({ seriesFilter, setSeriesFilter, id }: SeriesFiltersI) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const filterValue = (event.target as HTMLElement).innerText;
    setSeriesFilter(seriesFilter === filterValue ? "" : filterValue);
  };

  let toFilter: TableFilterI[] | undefined;
  if (id !== undefined) {
    const numId = Number(id) - 1;
    toFilter = filterSeries[numId].tableFilter;
  }

  return (
    <div className="sidebar">
      <h3>Choisis ton filtre !</h3>
      {toFilter?.map((series) => (
        <button type="button" key={series.name} onClick={handleClick}>
          <figure>
            <img
              className="logo-button"
              src={series.image}
              alt={`This is the representation of House ${series.name}`}
            />
            <figcaption>{series.name}</figcaption>
          </figure>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
