import { z } from "zod";

export const AddMovieSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title cannot exceed 100 characters."),
  posterUrl: z.url().trim(),
});

export type AddMovieFormValues = z.infer<typeof AddMovieSchema>;
