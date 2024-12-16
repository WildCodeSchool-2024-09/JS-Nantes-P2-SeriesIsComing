import seriesData from "../assets/data/seriesData";

export function useFilter({
  id,
  seriesFilter,
}: { id: string; seriesFilter: string }) {
  const findSeries = seriesData.find((serie) => serie.id === id);
  const filterCharacters = findSeries?.dataSeries?.filter((el) => {
    let result = null;
    if (id === "1") {
      result = el.lastName?.includes(seriesFilter);
    } else if (id === "2") {
      result = el.about?.toLowerCase().includes(seriesFilter.toLowerCase());
    } else if (id === "3" || id === "4") {
      result = el.description
        ?.toLowerCase()
        .includes(seriesFilter.toLowerCase());
    } else {
      throw new Error("No valid page");
    }
    return result;
  });
  return filterCharacters;
}
