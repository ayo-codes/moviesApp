import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function MovieCastList(props) {
  // sets the local moviecast to the props.moviecast object passed from the movie details parent

  const moviecast = props.moviecast;

  const styles = {
    heading: {
      align: "center",
      margin: 3,
    },
    li: {
      listStyle: "none",
    },
  };

  return (
    <>
      <Typography
        align="center"
        variant="h5"
        component="h3"
        sx={styles.heading}
      >
        Cast Members
      </Typography>
      <Paper align="center" component="ul" sx={styles.li}>
        <Typography>
          {moviecast.cast.map((cast) => (
            <Link to={`/cast/${cast.id}`}>
              <li key={cast.id} align="center" >
                {cast.name} as '{cast.character}'
              </li>
            </Link>
          ))}
        </Typography>
      </Paper>
    </>
  );
}

export default MovieCastList;
