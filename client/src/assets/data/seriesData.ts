import GOTdata from "./GOTdata";
import PBcharacter from "./PrisonBreakData";
import breakinBadCharacters from "./breakinBadCharacters";
import walkingDead from "./wd";

const seriesData = [
  {
    id: "1",
    title: "Game of Thrones",
    dataName: GOTdata,
  },
  {
    id: "2",
    title: "The Walking Dead",
    dataName: walkingDead,
  },
  {
    id: "3",
    title: "Breaking Bad",
    dataName: breakinBadCharacters,
  },
  {
    id: "4",
    title: "Prison Break",
    dataName: PBcharacter,
  },
];

export default seriesData;
