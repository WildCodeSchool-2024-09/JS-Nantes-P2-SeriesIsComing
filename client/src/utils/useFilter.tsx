import type { UseFilterI } from "../assets/interfaces/UseFilterI";

function useFilter({ id, characters, seriesFilter }: UseFilterI) {
  let filterCharacters = [];
  switch (id) {
    case "1":
      filterCharacters = characters.filter((el) =>
        el.lastName?.includes(seriesFilter),
      );
      break;
    case "2":
      filterCharacters = characters.filter((el) =>
        el.about?.includes(seriesFilter),
      );
      break;
    case "3":
      filterCharacters = characters.filter((el) =>
        el.description?.includes(seriesFilter),
      );
      break;
    case "4":
      filterCharacters = characters.filter((el) =>
        el.description?.includes(seriesFilter),
      );
      break;
    default:
      throw new Error("Nope");
  }

  return filterCharacters;
}

export default useFilter;
