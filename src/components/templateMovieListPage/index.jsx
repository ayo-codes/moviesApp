import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import AuthContextProvider from "../../contexts/authContext";
import ProtectedRoute from "../../auth/protectedRoute";


const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate(props){
  let movies = props.movies;
  let title = props.title;
  // let selectFavourite = props.selectFavourite;  // removed during icon change
  let action = props.action; // added during icon change

  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [voteAverageFilter , setVoteAverageFilter] = useState(0);
  const [sortOption , setsortOption] = useState(0);

  const genreId = Number(genreFilter);

  let displayedMovies = movies.filter((m) => {
    return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  }).filter((m) => {
    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  }).filter((m) => {
    return m.vote_average >= voteAverageFilter
  }).sort(function (a,b) {
    if(sortOption === 1){
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    } else if (sortOption === 2){
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;      
    } else if (sortOption === 3){
      if (a.vote_average < b.vote_average) {
        return -1;
      }
      if (a.vote_average > b.vote_average) {
        return 1;
      }
      return 0;      
    } else if (sortOption === 4){
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      return 0;      
    }

  });

const handleChange = (type, value) => {
  if (type === "title") {
    setTitleFilter(value);
  } else if (type === "genre") {
    setGenreFilter(value);
  } else if (type === "sort_option") {  
    setsortOption(value);
  } else {
    setVoteAverageFilter(value);
  }
};

return (
  <>
     <Grid container sx={styles.root}>
       <Grid item xs={12}>
         <Header title={title} />
       </Grid>
       <Grid item container spacing={5}>
         <MovieList
           movies={displayedMovies}
          //  selectFavourite={selectFavourite} // removed during icon change
          action={action}
         />
       </Grid>
     </Grid>
     <Fab
       color="secondary"
       variant="extended"
       onClick={() => setDrawerOpen(true)}
       sx={styles.fab}
     >
       Filter
     </Fab>
     <Drawer
       anchor="left"
       open={drawerOpen}
       onClose={() => setDrawerOpen(false)}
     >
      <ProtectedRoute>
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          voteAverageFilter={voteAverageFilter}
          sortOption={sortOption}          
        />
      </ProtectedRoute>
     </Drawer>
   </>  
 );
}
export default MovieListPageTemplate;

