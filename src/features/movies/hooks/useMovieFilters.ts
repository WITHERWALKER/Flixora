import { useMemo } from "react";

import { moviesMock } from "@/features/movies/data/movies.mock";
import type { MovieFilterValues } from "../schemas/movie-filter.schema";

export function useMovieFilters(filters: MovieFilterValues) {
  const filteredMovies = useMemo(() => {
    let filtered = [...moviesMock];

    if (filters.search) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.genre) {
      filtered = filtered.filter((movie) => movie.genre === filters.genre);
    }

    if (filters.onlyFavorites) {
      filtered = filtered.filter((movie) => movie.favorite);
    }

    if (filters.hdAvailable) {
      filtered = filtered.filter((movie) => movie.hdAvailable);
    }

    if (filters.trending) {
      filtered = filtered.filter((movie) => movie.trending);
    }

    if (filters.status) {
      filtered = filtered.filter((movie) => movie.status === filters.status);
    }

    if (filters.sort === "alphabetical") {
      filtered = [...filtered].sort((firstMovie, secondMovie) =>
        firstMovie.title.localeCompare(secondMovie.title),
      );
    }

    return filtered;
  }, [filters]);

  const activeFiltersCount = useMemo(() => {
    return [
      Boolean(filters.search),
      Boolean(filters.genre),
      Boolean(filters.status),
      filters.onlyFavorites,
      filters.hdAvailable,
      filters.trending,
    ].filter(Boolean).length;
  }, [filters]);

  return {
    activeFiltersCount,
    filteredMovies,
  };
}
