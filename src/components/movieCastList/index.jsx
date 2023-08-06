import React from 'react';
import  Paper  from '@mui/material/Paper';
import  Typography  from '@mui/material/Typography';


function MovieCastList(props) {
  
  let moviecast = props.moviecast

  return (
        <Paper> 
        <Typography>
        {moviecast.cast.map((cast) =>
        (
          <li key={cast.id}>
            {cast.name} as {cast.character}
          </li>
        ))};
        </Typography>
      </Paper>
  )
}

export default MovieCastList;
