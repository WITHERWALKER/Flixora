import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddMovieSchema,
  type AddMovieFormValues,
} from "@/features/movies/schemas/movie.schema";

import Button from "@/shared/ui/Button";

interface AddMovieFormProps {
  onClose?: () => void;
}

export default function AddMovieForm({ onClose }: AddMovieFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AddMovieFormValues>({
    resolver: zodResolver(AddMovieSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AddMovieFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    onClose?.();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="movie-title"
          className="text-sm font-bold text-surface-900"
        >
          Title
        </label>

        <input
          id="movie-title"
          type="text"
          placeholder="Movie title"
          {...register("title")}
          autoComplete="off"
          className="rounded-md border-2 border-surface-900 bg-surface-50 px-4 py-3 outline-none transition-all duration-200 focus:shadow-[4px_4px_0_#d1d1e9] focus:ring-4 focus:ring-brand-100"
        />

        {errors.title && (
          <p className="text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="poster-url"
          className="text-sm font-bold text-surface-900"
        >
          Poster URL
        </label>

        <input
          id="poster-url"
          type="url"
          placeholder="https://..."
          {...register("posterUrl")}
          autoComplete="off"
          className="rounded-md border-2 border-surface-900 bg-surface-50 px-4 py-3 outline-none transition-all duration-200 focus:shadow-[4px_4px_0_#d1d1e9] focus:ring-4 focus:ring-brand-100"
        />

        {errors.posterUrl && (
          <p className="text-sm text-red-600">{errors.posterUrl.message}</p>
        )}
      </div>

      <div className="mt-2 flex items-center justify-end gap-4">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          variant="primary"
          size="sm"
        >
          {isSubmitting ? "Saving..." : "Add Movie"}
        </Button>

        <Button type="button" variant="ghost" size="sm" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
