import React, {useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner"
import RemoveFromPlaylistsIcon from "../components/cardIcons/removeFromPlaylists";


const PlaylistMoviesPage = () => {
  const { myPlaylistMovies : movieIds } = useContext(MoviesContext);

  const playlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey : ["movie", {id:movieId}],
        queryFn: getMovie,
      };
    })
  );

  const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);

  if(isLoading) {
    return <Spinner />
  }

  const movies =  playlistMovieQueries.map((q) => q.data);

  return(
    <PageTemplate
      title="My Playlist Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylistsIcon movie={movie} />
          </>
        )
      }}
      />
  );
};

export default PlaylistMoviesPage;