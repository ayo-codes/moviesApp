import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage = () => {
    const toDo = () => true; 
    // Get movies from local storage.
    const movies = JSON.parse(localStorage.getItem("favourites"));

    return(
        <PageTemplate 
        title="Favourite Movies"
        movies={movies}
        selectFavouite={toDo}
        />
    )
}

export default FavouriteMoviesPage