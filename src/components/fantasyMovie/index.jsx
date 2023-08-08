import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FantasyMovie() {
  const { myFantasyMovies } = useContext(MoviesContext);
  const { id: paramsid } = useParams();
  console.log(myFantasyMovies);

  const currentfantasyMovie = myFantasyMovies.find(({ id }) => paramsid === id);

  console.log(paramsid);
  console.log(currentfantasyMovie);

  return (
    <Box align="center" padding={10}>
      <Typography variant="h3" margin={2}>
        Fantasy Movie Page
      </Typography>
      <Typography variant="h4" margin={2}>
        Movie:
        <Typography
          variant="h4"
          margin={2}
          sx={{ textDecoration: "underline" }}
          display="inline"
        >
          {currentfantasyMovie.title.toUpperCase()}
        </Typography>
      </Typography>

      <Typography variant="h6" margin={1}>
        Movie Overview
      </Typography>
      <Typography
        align="justify"
        paddingLeft={10}
        paddingRight={10}
        variant="body1"
      >
        {currentfantasyMovie.overview}
      </Typography>
      <Typography variant="h6" margin={1}>
        Movie Genre
      </Typography>
      <Typography variant="body1">{currentfantasyMovie.genre}</Typography>
      <Typography variant="h6" margin={1}>
        Movie Runtime
      </Typography>
      <Typography variant="body1">
        {currentfantasyMovie.runtime} mins
      </Typography>
      <Typography variant="h6" margin={1}>
        Movie Production Company
      </Typography>
      <Typography variant="body1">
        {currentfantasyMovie.productioncompany}
      </Typography>
    </Box>
  );
}
