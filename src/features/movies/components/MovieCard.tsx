import type Movie from "@/features/movies/types/movie.types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-md border-2 border-transparent p-2 transition-all duration-200 hover:border-surface-900 hover:bg-support-300 hover:shadow-[4px_4px_0_#2b2c34]">
      <div className="overflow-hidden rounded-md border-2 border-surface-900">
        <figure className="aspect-2/3 overflow-hidden bg-support-300">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-black text-surface-900 transition-colors group-hover:text-brand-700">
          {movie.title}
        </h3>
        {movie.genre ? (
          <p className="text-xs uppercase tracking-wide text-surface-900/75">
            {movie.genre}
          </p>
        ) : null}
      </div>
    </article>
  );
}
