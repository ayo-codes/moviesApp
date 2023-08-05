import React, {useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner"

const FavouriteMoviesPage = () => {
    const { favourites : movieIds } = useContext(MoviesContext);

    // Create an array of queries and run them in parallel.
    const favouriteMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", {id: movieId}],
                queryFn : getMovie,
            };
        })
    );

    // Check if any of the parallel queires is still loading.
    const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />
    }

    const movies = favouriteMovieQueries.map((q) => q.data);
    const toDo = () => true; 


    // Get movies from local storage. changed and using contexts now
    // const movies = JSON.parse(localStorage.getItem("favourites"));

    return(
        <PageTemplate 
        title="Favourite Movies"
        movies={movies}
        selectFavouite={toDo}
        />
    );
};

export default FavouriteMoviesPage;