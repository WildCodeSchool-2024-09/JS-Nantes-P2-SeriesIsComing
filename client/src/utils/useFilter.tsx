import seriesData from "../assets/data/seriesData";

export function useFilter({
  id,
  seriesFilter,
}: { id: string; seriesFilter: string }) {
  const findSeries = seriesData.find((serie) => serie.id === id);
  console.warn("Ou est ma série ?", findSeries);
  console.warn("Coucou", findSeries?.dataSeries);
  const filterCharacters = findSeries?.dataSeries?.filter((el) => {
    let result = null;
    if (id === "1") {
      result = el.lastName?.includes(seriesFilter);
    } else if (id === "2") {
      result = el.about?.includes(seriesFilter);
    } else if (id === "3" || id === "4") {
      result = el.description?.includes(seriesFilter);
    } else {
      throw new Error("No valid page");
    }
    return result;
  });
  return filterCharacters;
}
