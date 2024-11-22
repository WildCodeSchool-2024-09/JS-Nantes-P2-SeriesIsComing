import type { MouseEvent } from "react";
import { filterSeries } from "../assets/data/filterSeries";
import type { SeriesFiltersI } from "../assets/interfaces/SeriesFilterI";
import "../components/SideBar.css";

function SideBar({ seriesFilter, setSeriesFilter }: SeriesFiltersI) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const filterValue = (event.target as HTMLElement).innerText;
    setSeriesFilter(seriesFilter === filterValue ? "" : filterValue);
  };

  const toFilter = filterSeries[0].tableFilter;

  return (
    <div className="sidebar">
      <h3>Filtre en choisissant ta famille préférée !</h3>
      {toFilter.map((series) => (
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
