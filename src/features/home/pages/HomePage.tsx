import MovieList from "@/features/movies/components/MovieList";
import LoadingPage from "@/shared/components/LoadingPage";
import NavbarGenres from "@/features/genres/components/NavbarGenres";
import PageSeo from "@/shared/components/PageSeo";
import { useHomeMovies } from "@/features/home/hooks/useHomeMovies";

export default function HomePage() {
  const { loading, movies } = useHomeMovies();

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <PageSeo
          title="Home"
          description="Explore featured movies, trending releases, and upcoming titles on Flixora."
        />
        <LoadingPage message="Cargando películas..." />
      </div>
    );
  }

  return (
    <>
      <PageSeo
        title="Home"
        description="Explore featured movies, trending releases, and upcoming titles on Flixora."
      />

      <section className="space-y-10">
        {/* <header className="space-y-3 rounded-3xl bg-neutral-950 px-6 py-10 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-300">
            Discover your next movie night
          </p>
          <h1 className="text-4xl font-semibold">
            Featured titles for every mood
          </h1>
          <p className="max-w-2xl text-sm text-neutral-300">
            Browse what is playing now, jump into upcoming releases, and move
            across genres without leaving the catalog.
          </p>
        </header> */}

        <MovieList movies={movies.nowPlaying} title="Now Playing" />

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-surface-950">
              Browse by genre
            </h2>
            <p className="text-sm text-muted">
              Jump to the sections your audience is most likely to explore
              first.
            </p>
          </div>

          <NavbarGenres />
        </section>

        <MovieList movies={movies.upcoming} title="Upcoming" />
      </section>
    </>
  );
}
