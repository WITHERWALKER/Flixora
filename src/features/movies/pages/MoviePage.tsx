import { SlidersHorizontal } from "lucide-react";

import CatalogPageLayout from "@/app/layouts/CatalogPageLayout";

import Button from "@/shared/ui/Button";
import Filter from "@/shared/components/Filter";

import AddMovieForm from "@/features/movies/components/AddMovieForm";
import MovieCatalogContent from "@/features/movies/components/MovieCatalogContent";

import { useMovieCatalog } from "@/features/movies/hooks/useMovieCatalog";

import PageSeo from "@/shared/components/PageSeo";

import {
  genreOptionsData,
  sortOptionsData,
  statusOptionsData,
} from "@/shared/data/filter-options";

export default function MoviePage() {
  const {
    activeFiltersCount,
    filteredMovies,
    form,
    resetFilters,
    showFilter,
    toggleFilter,
  } = useMovieCatalog();

  return (
    <>
      <PageSeo
        title="Movies"
        description="Filter Flixora movies by genre, status, favorites, and discovery preferences."
      />

      <CatalogPageLayout
        title="Movies"
        modalTitle="Add Movie"
        description="Manage your movie catalog, refine the visible results, and keep the collection easy to browse."
        form={<AddMovieForm />}
        action={
          <Button
            size="sm"
            type="button"
            onClick={toggleFilter}
            icon={<SlidersHorizontal />}
          >
            Filter {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ""}
          </Button>
        }
      >
        <Filter
          isOpen={showFilter}
          form={form}
          genre={genreOptionsData}
          sort={sortOptionsData}
          status={statusOptionsData}
          onReset={resetFilters}
          resultsCount={filteredMovies.length}
        />

        <MovieCatalogContent movies={filteredMovies} />
      </CatalogPageLayout>
    </>
  );
}
