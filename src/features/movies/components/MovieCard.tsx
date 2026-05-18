import type Movie from "@/features/movies/types/movie.types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-2xl p-2 transition-colors duration-200 hover:bg-support-50/80">
      <div className="overflow-hidden rounded-2xl">
        <figure className="aspect-2/3 overflow-hidden rounded-2xl bg-surface-200">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-surface-950 transition-colors group-hover:text-brand-700">
          {movie.title}
        </h3>
        {movie.genre ? (
          <p className="text-xs uppercase tracking-wide text-support-700">
            {movie.genre}
          </p>
        ) : null}
      </div>
    </article>
  );
}
