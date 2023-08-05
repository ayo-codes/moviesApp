import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


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

 // start -- removed to change icons 
  // const favourites = movies.filter(m => m.favourite);
  // localStorage.setItem('favourites', JSON.stringify(favourites))

  // const addToFavourites = (movieId) => {
  //   const updatedMovies = movies.map((m) => 
  //   m.id === movieId ? {...m , favourite:true} : m 
  //   );
  //   setMovies(updatedMovies)
  // }
 // end -- removed to change icons 
  
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
    action={(movie) => { // this is a render prop 
      return <AddToFavouritesIcon movie={movie}/>
    }}
    // selectFavourite={addToFavourites} // removed during favourite icon change
   />
  );
};

export default HomePage;