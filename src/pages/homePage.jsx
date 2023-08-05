import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";



const HomePage = (props) => {
  // const [movies , setMovies] = useState([]); // sets the movies state and also setter method for movies
  
  //new -- begins here 

  const { data, error, isLoading, isError } = useQuery("discover", getMovies); 
  if (isLoading) { 
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

 // new -- ends here

  const favourites = movies.filter(m => m.favourite);
  localStorage.setItem('favourites', JSON.stringify(favourites))

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) => 
    m.id === movieId ? {...m , favourite:true} : m 
    );
    setMovies(updatedMovies)
  }


  // removed during caching 
  // useEffect(() => {
  //   getMovies().then((movies) => {
  //     setMovies(movies);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PageTemplate 
    title= 'Discover Movies'
    movies={movies}
    selectFavourite={addToFavourites} 
   />
  );
};

export default HomePage;