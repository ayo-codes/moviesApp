import React from "react";
import Movie from "../movieCard"; // check this import it is actually importing movieCard but named movie here
import  Grid  from "@mui/material/Grid";

const MovieList = (props) => {
  console.log(props)
  let movies = props.movies;
  console.log(movies)
  let action = props.action;
  console.log(action)
  let movieCards = movies.map((m) => (
  <Grid key={m.id} item xs={12} sm ={6} md={4} lg={3} xl={2}>
    <Movie key={m.id} movie={m}
    //  selectFavourite={props.selectFavourite} // removed during icon change 
     action ={action} />
  </Grid>
  ));
  return movieCards; 
};

export default MovieList;