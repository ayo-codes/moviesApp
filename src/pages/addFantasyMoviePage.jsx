import React from 'react';
import FantasyMovieForm from '../components/fantasyMovieForm';
import { useLocation } from 'react-router-dom';
import { useQueries } from 'react-query';
import { getGenres } from '../api/tmdb-api';
import Spinner from "../components/spinner"

const AddFantasyMoviePage = (props) => {
  const [ getGenreQuery ,  ] = useQueries([
    {
      queryKey: 'genreId',
      queryFn: getGenres
    },
  ]);

  if (getGenreQuery.isLoading) {
    return <Spinner />;
  }

  if (getGenreQuery.isError) {
    return <h1>{getGenreQuery.error.message}</h1>;
  }

  return (
    <FantasyMovieForm />
  )
}


export default AddFantasyMoviePage;