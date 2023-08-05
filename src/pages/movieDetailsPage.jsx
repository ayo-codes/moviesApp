import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom"
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage"
import { getMovie } from "../api/tmdb-api";
import useMovie from "../hooks/useMovie";
import Spinner from '../components/spinner'
import { useQuery } from "react-query";

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
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  //  end -- removed for caching 
  return (
    <>
      {movie ? (
        <>
         <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
         </PageTemplate>
        </>
      ) : (
        <h2>Waiting for movie details</h2>
      )}
    </>
  );
};

export default MovieDetailsPage;  