import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
// import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png' 
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddCheck  from "@mui/icons-material/PlaylistAddCheckCircle";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function MovieCard(props) {
  const movie = props.movie;

  const action = props.action; // added for icon change

  const { favourites, myPlaylistMovies } = useContext(MoviesContext);

  // console.log(favourites)
  // console.log(myPlaylistMovies);

  
  if ( favourites.find((id) => id === movie.id)){
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  if ( myPlaylistMovies.find((id) => id === movie.id)){
    movie.isinPlaylist = true;
  } else {
    movie.isinPlaylist = false
  }

  // let isInPlaylist = myPlaylistMovies.includes((movie.id));
  // console.log(isInPlaylist);



//-- start removed during icon change 
  // const handleAddToFavourite = (e) => {
  //   e.preventDefault();
  //   addToFavourites(movie);
// -- end removed during icon change  
    // props.selectFavourite(movie.id); // removed to allow for using contexts
  // }

  return (
    <Card sx={styles.card}>
          <CardHeader
      sx={styles.header}
      avatar={
        movie.favourite ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : movie.isinPlaylist ? (
          <Avatar sx={styles.avatar}>
          <PlaylistAddCheck />
        </Avatar>
      ) : null
      
      }
      // avatar={
      //   movie.isinPlaylist ? (
      //     <Avatar sx={styles.avatar}>
      //       <FavoriteIcon />
      //     </Avatar>
      //   ) : null
      // }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
      />
      <CardMedia
        sx={styles.media}
        image={  // ternary operator to show the movie poster or the default image
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" d component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* IconButton component removed during add favourite bit and replaced with {action(movie)} */}
        {/* <IconButton aria-label="add to favorites" onClick={handleAddToFavourite}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton> */} 
        {action(movie)}

        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}