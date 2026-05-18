import type Movie from "@/features/movies/types/movie.types";

export const moviesMock: Movie[] = [
  {
    id: 1,
    title: "Dune",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg",
    genre: "sci-fi",
    status: "ongoing",
    favorite: true,
    hdAvailable: true,
    trending: true,
  },
  {
    id: 2,
    title: "John Wick",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/John_Wick_%28film%29.jpg",
    genre: "action",
    status: "completed",
    favorite: false,
    hdAvailable: true,
    trending: false,
  },
  {
    id: 3,
    title: "Past Lives",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/20/Past_Lives_film_poster.jpg",
    genre: "drama",
    status: "completed",
    favorite: true,
    hdAvailable: true,
    trending: false,
  },
  {
    id: 4,
    title: "Alien: Romulus",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Alien_Romulus.jpg",
    genre: "horror",
    status: "upcoming",
    favorite: false,
    hdAvailable: false,
    trending: true,
  },
];
