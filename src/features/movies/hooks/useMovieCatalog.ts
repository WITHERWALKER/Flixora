import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultMovieFilterValues } from "@/features/movies/constants/movie-filter-default-values";
import { useMovieFilters } from "@/features/movies/hooks/useMovieFilters";
import {
  movieFilterSchema,
  type MovieFilterValues,
} from "@/features/movies/schemas/movie-filter.schema";

export function useMovieCatalog() {
  const [showFilter, setShowFilter] = useState(false);

  const form = useForm<MovieFilterValues>({
    resolver: zodResolver(movieFilterSchema),
    defaultValues: defaultMovieFilterValues,
  });

  const watchedFilters = useWatch({
    control: form.control,
    defaultValue: defaultMovieFilterValues,
  });

  const filters = {
    ...defaultMovieFilterValues,
    ...watchedFilters,
  };

  const { filteredMovies, activeFiltersCount } = useMovieFilters(filters);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const resetFilters = () => {
    form.reset(defaultMovieFilterValues);
  };

  return {
    activeFiltersCount,
    filteredMovies,
    form,
    resetFilters,
    showFilter,
    toggleFilter,
  };
}
