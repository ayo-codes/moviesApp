import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { getUpcomingMovies } from "../api/tmdb-api";
import  PlaylistAdd  from "@mui/icons-material/PlaylistAdd";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylists";


const UpcomingPage = (props) => {
  console.log(props)
  // const [movies , setMovies] = useState([]); // sets the movies state and also setter method for movies
  // console.log(movies)

  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies); 
  if (isLoading) { 
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  //-- start removed due to favourites changing
  // const favourites = movies.filter(m => m.favourite);
  // localStorage.setItem('favourites', JSON.stringify(favourites))
 // -- end removeddue to favourites changing 

  // --start removed due to useQuery
  // const addToFavourites = (movieId) => {
  //   const updatedMovies = movies.map((m) => 
  //   m.id === movieId ? {...m , favourite:true} : m 
  //   );
  //   setMovies(updatedMovies)
  // }


  // useEffect(() => {
  //   getUpcomingMovies()
  //  .then((movies) => {
  //     setMovies(movies);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //-- end removed use to useQuery

  return (
    <PageTemplate 
    title= 'Upcoming Movies'
    movies={movies}
    action={(movie) => 
      {  
        // this is a render prop added 
      return <AddToPlaylistIcon movie={movie}/> 
    }}
    // selectFavourite={addToFavourites}
     />
  );
};

export default UpcomingPage;