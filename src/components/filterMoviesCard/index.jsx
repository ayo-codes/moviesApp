import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { getGenres } from "../../api/tmdb-api";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}`;
}

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
  slider: {
    margin: 2,
  },
};

const sortOptions = [
  {
    sortId: 1,
    name: "Alphabetical",
  },
  { sortId: 2, name: "Ratings" },
];

export default function FilterMoviesCard(props) {
  console.log(props);

  // -- start -- added for caching
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }
  // -- end -- added for caching

  // -- start -- removed for caching
  // const [genres , setGenres] = useState([{ id: '0' , name:"All"}])

  // useEffect(() => {
  //   getGenres().then((allGenres) => {
  //     setGenres([genres[0], ...allGenres]);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  // -- end -- removed for caching

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // this comes from the homepage
  };

  const handleTextChange = (e) => {
    handleChange(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleVoteChange = (e) => {
    console.log(e.target.value);
    handleChange(e, "vote_average", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            value={props.titleFilter}
            onChange={handleTextChange}
          />
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <InputLabel sx={styles.slider} id="vote-average-label">
            Vote Average
          </InputLabel>
          <Slider
            aria-label="vote average"
            defaultValue={props.voteAverageFilter}
            getAriaValueText={valuetext}
            step={0.1}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={10}
            onChange={handleVoteChange}
          ></Slider>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
          <FormControl sx={styles.formControl}>
            <InputLabel id="sort-label">Sort Options</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {sortOptions.map((sort) => {
                return (
                  <MenuItem key={sort.sortId} value={sort.sortId}>
                    {sort.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}
