import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";



const UpcomingPage = (props) => {
  const [movies , setMovies] = useState([]); // sets the movies state and also setter method for movies
  const favourites = movies.filter(m => m.favourite);
  localStorage.setItem('favourites', JSON.stringify(favourites))


  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) => 
    m.id === movieId ? {...m , favourite:true} : m 
    );
    setMovies(updatedMovies)
  }


  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate 
    title= 'Upcoming Movies'
    movies={movies}
    selectFavourite={addToFavourites} 
   />
  );
};

export default UpcomingPage;