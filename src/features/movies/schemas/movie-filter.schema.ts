import { z } from "zod";

export const movieFilterSchema = z.object({
  search: z.string(),
  genre: z.string(),
  sort: z.string(),
  status: z.string(),
  onlyFavorites: z.boolean(),
  hdAvailable: z.boolean(),
  trending: z.boolean(),
});

export type MovieFilterValues = z.infer<typeof movieFilterSchema>;
