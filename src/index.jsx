import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route , Navigate , Routes } from "react-router-dom";
import HomePage from "./pages/homePage"; // this is actually the movieListPage;
import MoviePage from "./pages/movieDetailsPage" ; // named moviepage in the file
// import sample from './stories/sampleData' // imported from stories

// const movies = [sample, sample , sample , sample , sample , sample , sample];

// const images = [
//   "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
//   "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
//   "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
//   "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
// ]


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/movies/:id" element={<MoviePage />} />
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
