import React ,{ useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  console.log(props)
  const [favourites , setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} )  // NEW
  const [myPlaylistMovies, setMyPlaylistMovies] = useState([]);
  const [myFantasyMovies, setMyFantasyMovies] = useState( [] );

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)){
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  // Used Later
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addFantasyMovie = (fantasyMovie) => {   // NEW
    let updatedFantasyMovies = [...myFantasyMovies];
    console.log(fantasyMovie);
    updatedFantasyMovies.push(fantasyMovie);
    setMyFantasyMovies(updatedFantasyMovies);
    console.log(updatedFantasyMovies);
    console.log(myFantasyMovies);
    // setMyFantasyMovies( [{...myFantasyMovies, fantasyMovie }] )
  };


  const addToPlaylists = (movie) => {
    let updatedPlaylists = [...myPlaylistMovies];
    if (!myPlaylistMovies.includes(movie.id)) {
      updatedPlaylists.push(movie.id);
    }
    // console.log(updatedPlaylists);
    setMyPlaylistMovies(updatedPlaylists);
    // console.log(updatedPlaylists);
    // console.log(myPlaylistMovies);
  };

  return (
    <MoviesContext.Provider 
      value = {{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylists,
        myPlaylistMovies,
        addFantasyMovie,
        myFantasyMovies
      }}>
        {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;