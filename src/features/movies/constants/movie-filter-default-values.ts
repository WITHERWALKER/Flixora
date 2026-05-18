import type { MovieFilterValues } from "@/features/movies/schemas/movie-filter.schema";

export const defaultMovieFilterValues: MovieFilterValues = {
  search: "",
  genre: "",
  sort: "popular",
  status: "",
  onlyFavorites: false,
  hdAvailable: false,
  trending: false,
};
