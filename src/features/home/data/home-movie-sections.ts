import type Movie from "@/features/movies/types/movie.types";

export interface HomeMoviesProps {
  nowPlaying: Movie[];
  upcoming: Movie[];
}

export const homeMovieSections: HomeMoviesProps = {
  nowPlaying: [
    {
      id: 1,
      title: "Dune: Part Two",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/250px-Dune_Part_Two_poster.jpeg",
      genre: "sci-fi",
      status: "ongoing",
      trending: true,
      hdAvailable: true,
    },
    {
      id: 2,
      title: "Godzilla x Kong: The New Empire",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Godzilla_x_kong_the_new_empire_poster.jpg/250px-Godzilla_x_kong_the_new_empire_poster.jpg",
      genre: "action",
      status: "ongoing",
      trending: true,
      hdAvailable: true,
    },
    {
      id: 3,
      title: "Kung Fu Panda 4",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Kung_Fu_Panda_4_poster.jpg/250px-Kung_Fu_Panda_4_poster.jpg",
      genre: "comedy",
      status: "ongoing",
      trending: false,
      hdAvailable: true,
    },
  ],
  upcoming: [
    {
      id: 6,
      title: "Deadpool & Wolverine",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg",
      genre: "action",
      status: "upcoming",
      favorite: true,
      hdAvailable: true,
    },
    {
      id: 7,
      title: "Inside Out 2",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
      genre: "comedy",
      status: "upcoming",
      hdAvailable: true,
    },
    {
      id: 8,
      title: "Furiosa: A Mad Max Saga",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg",
      genre: "action",
      status: "upcoming",
      trending: true,
      hdAvailable: true,
    },
    {
      id: 9,
      title: "The Fall Guy",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/The_Fall_Guy_%282024%29_poster.jpg/250px-The_Fall_Guy_%282024%29_poster.jpg",
      genre: "comedy",
      status: "upcoming",
      hdAvailable: true,
    },
  ],
};
