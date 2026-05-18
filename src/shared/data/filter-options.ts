import type SelectOption from "@/shared/types/select.types";

export const genreOptionsData: SelectOption[] = [
  {
    label: "All Genres",
    value: "",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Sci‑Fi",
    value: "sci-fi",
  },
  {
    label: "Drama",
    value: "drama",
  },
  {
    label: "Comedy",
    value: "comedy",
  },
  {
    label: "Horror",
    value: "horror",
  },
];

export const sortOptionsData: SelectOption[] = [
  {
    label: "Most Popular",
    value: "popular",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Highest Rated",
    value: "rating",
  },
  {
    label: "A-Z",
    value: "alphabetical",
  },
];

export const statusOptionsData: SelectOption[] = [
  {
    label: "All Status",
    value: "",
  },
  {
    label: "Ongoing",
    value: "ongoing",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];
