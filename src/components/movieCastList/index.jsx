import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function MovieCastList(props) {
  // sets the local moviecast to the props.moviecast object passed from the movie details parent

  const moviecast = props.moviecast;

  const styles = {
    heading: {
      align:"center",
      margin: 3,
    },
    li: {
      listStyle : "none"
    }
  };

  return (
    <>
      <Typography align="center" variant="h5" component="h3" sx={styles.heading}>
        Cast Members
      </Typography>
      <Paper align="center" component="ul" sx={styles.li}>
        <Typography>
          {moviecast.cast.map((cast) => (
            <li align="center" key={cast.id} >
              {cast.name} as {cast.character}
            </li>
          ))}
        </Typography>
      </Paper>
    </>
  );
}

export default MovieCastList;
