export interface SeriesFiltersI extends IdI {
  seriesFilter: string;
  setSeriesFilter: (index: string) => void;
}

interface IdI {
  id?: string | number;
}
