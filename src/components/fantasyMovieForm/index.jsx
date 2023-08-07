import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "../reviewForm/styles";
import { v4 as uuidv4 } from "uuid";

const FantasyMovieForm = (props) => {
  const genres = props.genres.genres;
  // console.log(typeof(genres[0].id))

  // console.log(props);

  const defaultValues = {
    title: "",
    overview: "",
    agree: false,
    genre: 28,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [genre, setGenre] = useState(28);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };


  const onSubmit = (fantasyMovie) => {
    console.log ("submitted")
    fantasyMovie.id = uuidv4();
    fantasyMovie.genre = genre;
    context.addFantasyMovie(fantasyMovie);
    reset({
      title: "",
      overview: "",
    });

  };

  // const onSubmit = () => {
  //   console.log("submitted");
  // };
  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Create your own Fantasy Movie
      </Typography>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie Title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty",
            minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Movie Overview"
              id="overview"
              multiline
              minRows={3}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}
        <Controller
          control={control}
          name="genre"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-genre"
              select
              variant="outlined"
              margin="normal"
              label="Genre Select"
              value={genre}
              onChange={handleGenreChange}
              helperText="Don't forget your Genre"
            >
              {genres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
            onClick={() => {
              onSubmit
            }}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
                overview: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FantasyMovieForm;
