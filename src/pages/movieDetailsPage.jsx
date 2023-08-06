import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom"
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage"
import { getMovie, getMovieCast } from "../api/tmdb-api";
import useMovie from "../hooks/useMovie";
import Spinner from '../components/spinner'
import { useQueries, useQuery } from "react-query";

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  
  //  start -- removed for caching 
  // const [ movie ] = useMovie(id);
 //  end -- removed for caching 
  

  // start --  became a custom hook 
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   getMovie(id).then((movie) => {
  //     setMovie(movie);
  //   });
  // }, [id]);
  // end -- became a custom hook

  //  start -- added for caching 
  // const { data: movie, error, isLoading, isError } = useQuery(
  //   ["movie", { id: id }],
  //   getMovie
  // );
  const[getMovieQuery, getMovieCastQuery] = useQueries([
    {
      queryKey: ['movie', {id: id}],
      queryFn: getMovie
    },
    {
      queryKey: ['movieCast', {movie_id: id}],
      queryFn: getMovieCast
    },
   ]
   );

   console.log(getMovieQuery);
   const movie = getMovieQuery.data

  if (getMovieQuery.isLoading) {
    return <Spinner />;
  }

  if (getMovieQuery.isError) {
    return <h1>{error.message}</h1>;
  }

   console.log(getMovieCastQuery);
   let movieCast = getMovieCastQuery.data

  if (getMovieCastQuery.isLoading) {
    return <Spinner />;
  }

  if (getMovieCastQuery.isError) {
    return <h1>{error.message}</h1>;
  }
 //  end -- added for caching 


   

    // {
    //   queryKey: ["movieCast", {id: id}],
    //   queryFn : getMovieCast
    // },

 

//  if (getMovieQuery.isLoading) {
//     return <Spinner />;
//   };

//   if (getMovieCastQuery.isLoading) {
//     return <Spinner />;
//   };

//     if (getMovieQuery.isError) {
//     return <h1>{getMovieQuery.error.message}</h1>;
//   }

//       if (getMovieCastQuery.isError) {
//     return <h1>{getMovieCastQuery.error.message}</h1>;
//   }

//   console.log(getMovieCastQuery);
//   console.log(getMovieQuery);

 return (
    <>
      {movie ? (
        <>
         <PageTemplate movie={movie}>
          <MovieDetails movie={movie} moviecast={movieCast} />
         </PageTemplate>
        </>
      ) : (
        <h2>Waiting for movie details</h2>
      )}
    </>
  );
};

export default MovieDetailsPage;  