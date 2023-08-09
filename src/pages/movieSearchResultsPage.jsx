import React from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from "../components/spinner"
import { useParams } from 'react-router-dom';
import { searchMultiDiscover } from '../api/tmdb-api';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylists';
import { useLocation } from 'react-router-dom';

const MovieSearchResultsPage = (props) => {

  const location = useLocation();

  console.log(location?.state?.searchMulti);

  const { year, withCast, voteAverageGte , voteAverageLte }  = location?.state?.searchMulti;

  const pageTitle = `Search Results`

  const { data , error , isLoading, isError } = useQuery(["searchResults" , {year:year}, {withCast:withCast} , {voteAverageGte : voteAverageGte} , {voteAverageLte : voteAverageLte }] , searchMultiDiscover );

  if (isLoading) { 
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const movies = data ? data.results : [];

  return (
    <PageTemplate 
    title= {pageTitle}
    movies={movies}
    action={(movie) => 
      {  
        // this is a render prop added 
      return <AddToPlaylistIcon movie={movie}/> 
    }}/>
  );
};

export default MovieSearchResultsPage;