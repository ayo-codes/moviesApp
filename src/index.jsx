import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route , Navigate , Routes , Link } from "react-router-dom";
import HomePage from "./pages/homePage"; // this is actually the movieListPage;
import MoviePage from "./pages/movieDetailsPage" ; // named moviepage in the file
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingMoviesPage";


const App = () => {
  return (

    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingPage/>} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    // <HomePage movies={movies} />

    //<MovieDetailsPage movie={sample} images={images}/>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
