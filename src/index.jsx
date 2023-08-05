import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route , Navigate , Routes , Link } from "react-router-dom";
import HomePage from "./pages/homePage"; // this is actually the movieListPage;
import MoviePage from "./pages/movieDetailsPage" ; // named moviepage in the file
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider , QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />  
              <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
              <Route path="/movies/upcoming" element={<UpcomingPage/>} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider> 
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>


    // <HomePage movies={movies} />

    //<MovieDetailsPage movie={sample} images={images}/>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
