import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage"; // this is actually the movieListPage;
import MoviePage from "./pages/movieDetailsPage"; // named moviepage in the file
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import PlaylistMoviesPage from "./pages/myPlaylistMoviesPage";
import { createTheme, ThemeProvider } from "@mui/material";
import CastDetailsPage from "./pages/castDetailsPage";
import AddFantasyMoviePage from "./pages/addFantasyMoviePage";
import FantasyMoviePage from "./pages/fantasyMoviePage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import AuthContextProvider from "./contexts/authContext";
import LoginPage from "./pages/loginSignupMoviePage";
import ProtectedRoute from "./auth/protectedRoute";
import MultiSearchPage from "./pages/multiSearchPage";
import MovieSearchResultsPage from "./pages/movieSearchResultsPage";
import SuccessPage from "./pages/loginSuccessPage";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <SiteHeader />
            <MoviesContextProvider>
              <Routes>
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/multisearch" element={<MultiSearchPage/>} />
                <Route path="/movies/searchresults" element={<MovieSearchResultsPage/>} />
                <Route
                  path="/fantasymovie/add"
                  element={<AddFantasyMoviePage />}
                />
                <Route
                  path="/fantasymovie/:id"
                  element={
                  
                    <FantasyMoviePage />
                  
                    }
                />
                <Route
                  path="/movies/favourites"
                  element={
                  <ProtectedRoute>
                    <FavouriteMoviesPage />
                  </ProtectedRoute>
                  }
                />
                <Route
                  path="/movies/playlists"
                  element={
                  <ProtectedRoute>
                    <PlaylistMoviesPage />
                  </ProtectedRoute>  
                  }
                />
                <Route path="/movies/upcoming" element={<UpcomingPage />} />
                <Route
                  path="/movies/similar/:id"
                  element={<SimilarMoviesPage />}
                />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cast/:id" element={<CastDetailsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </MoviesContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>

    // <HomePage movies={movies} />

    //<MovieDetailsPage movie={sample} images={images}/>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
