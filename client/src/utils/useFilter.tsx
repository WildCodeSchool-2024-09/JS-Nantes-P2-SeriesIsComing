import type CharactersI from "../assets/interfaces/CharctersI";

export interface UseFilterI {
  id: string;
  array: CharactersI[];
  filterArgument: string;
}

function useFilter({ id, array, filterArgument }: UseFilterI) {
  let filterCharacters = [];
  switch (id) {
    case "1":
      filterCharacters = array.filter((el) =>
        el.lastName?.includes(filterArgument),
      );
      break;
    case "2":
      filterCharacters = array.filter((el) =>
        el.about?.includes(filterArgument),
      );
      break;
    // case "3":
    //   filterCharacters = array.filter((el) =>
    //     el.about?.includes(filterArgument),
    //   );
    //   break;
    // case "4":
    //   filterCharacters = array.filter((el) =>
    //     (el.nickname?)
    //   );
    //   break;
    default:
      throw new Error("Nope");
  }

  return filterCharacters;
}

export default useFilter;
