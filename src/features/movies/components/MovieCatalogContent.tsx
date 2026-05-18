import MovieList from "@/features/movies/components/MovieList";
import type Movie from "@/features/movies/types/movie.types";
import EmptyState from "@/shared/components/EmptyState";

interface MovieCatalogContentProps {
  movies: Movie[];
}

export default function MovieCatalogContent({
  movies,
}: MovieCatalogContentProps) {
  if (movies.length === 0) {
    return (
      <EmptyState
        title="No movies match the current filters"
        description="Try another genre, remove a toggle, or clear the search to explore more titles."
      />
    );
  }

  return <MovieList movies={movies} title="Available Movies" />;
}
