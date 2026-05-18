import DefaultList from "@/shared/components/DefaultList";
import type Movie from "../types/movie.types";
import MovieCard from "./MovieCard";

interface ListFilmsProps {
  movies?: Movie[];
  title: string;
}

export default function ListFilms({ movies, title }: ListFilmsProps) {
  const sectionId = `${title.toLowerCase().replace(/\s+/g, "-")}-section`;

  return (
    <section
      aria-labelledby={sectionId}
      className="surface-card flex flex-col gap-4 rounded-md p-5"
    >
      <h2 id={sectionId} className="text-xl font-black text-surface-900">
        {title}
      </h2>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <DefaultList
          list={movies}
          renderItem={(movie) => (
            <li key={movie.id} className="h-full">
              <MovieCard movie={movie} />
            </li>
          )}
          loadingMessage="Cargando películas..."
          emptyMessage="No hay películas disponibles."
        />
      </ul>
    </section>
  );
}
