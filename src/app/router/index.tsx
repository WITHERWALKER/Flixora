import { createBrowserRouter } from "react-router";

import MainLayout from "@/app/layouts/MainLayout";

import HomePage from "@/features/home/pages/HomePage";
import MoviePage from "@/features/movies/pages/MoviePage";
import SeriesPage from "@/features/series/pages/SeriesPage";
import KidsPage from "@/features/kids/pages/KidsPage";

import NotFoundPage from "@/shared/components/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviePage />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
      {
        path: "kids",
        element: <KidsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
