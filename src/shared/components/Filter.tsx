import type SelectOption from "@/shared/types/select.types";

import SearchInput from "@/shared/ui/SearchInput";
import Select from "@/shared/ui/Select";
import Checkbox from "@/shared/ui/Checkbox";
import type { UseFormReturn } from "react-hook-form";
import type { MovieFilterValues } from "@/features/movies/schemas/movie-filter.schema";
import Button from "../ui/Button";

interface FilterProps {
  isOpen: boolean;
  genre: SelectOption[];
  sort: SelectOption[];
  status: SelectOption[];
  form: UseFormReturn<MovieFilterValues>;
  onReset: () => void;
  resultsCount: number;
}

export default function Filter({
  isOpen,
  genre,
  sort,
  status,
  form,
  onReset,
  resultsCount,
}: FilterProps) {
  if (!isOpen) return null;

  return (
    <aside aria-label="Movie filters" className="surface-panel rounded-md p-6">
      <form
        className="flex flex-col gap-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-surface-900">Filters</h2>

            <p className="text-sm text-muted">Refine your movie search</p>
          </div>

          <p className="text-sm text-muted" aria-live="polite">
            {resultsCount} result{resultsCount === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SearchInput
            id="search"
            label="Search"
            placeholder="Search..."
            {...form.register("search")}
          />

          <Select
            id="genre"
            label="Genre"
            options={genre}
            {...form.register("genre")}
          />
          <Select
            id="sort"
            label="Sort By"
            options={sort}
            {...form.register("sort")}
          />
          <Select
            id="status"
            label="Status"
            options={status}
            {...form.register("status")}
          />
        </div>

        <fieldset className="flex flex-wrap gap-4 border-t-2 border-surface-900 pt-4">
          <legend className="sr-only">Additional filters</legend>
          <div className="flex flex-wrap gap-4">
            <Checkbox
              label="Only favorites"
              {...form.register("onlyFavorites")}
            />
            <Checkbox label="HD Available" {...form.register("hdAvailable")} />
            <Checkbox label="Trending" {...form.register("trending")} />
          </div>
        </fieldset>

        <footer className="flex flex-wrap justify-end gap-2 border-t-2 border-surface-900 pt-4">
          <div className="flex gap-2">
            <Button
              size="sm"
              type="button"
              variant="secondary"
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </footer>
      </form>
    </aside>
  );
}
