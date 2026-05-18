import { useEffect, useState } from "react";

import {
  homeMovieSections,
  type HomeMoviesProps,
} from "@/features/home/data/home-movie-sections";

export function useHomeMovies() {
  const [movies, setMovies] = useState<HomeMoviesProps>({
    nowPlaying: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        setMovies(homeMovieSections);
      } catch (error) {
        console.error("Error obteniendo películas:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchMovies();
  }, []);

  return {
    loading,
    movies,
  };
}
