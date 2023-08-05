import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";

export default {
  title: "Home Page/ MovieCard",
  component : MovieCard,
};

export const Basic = () => { 
  return ( 
    <MovieCard movie={SampleMovie} /> 
    // movie card with a prop called movie with sample data
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  // if the movie has no poster i.e poster_path returns undefined 
  const sampleNoPoster = { ...SampleMovie , poster_path: undefined}; 
  return (
    <MovieCard movie={sampleNoPoster} />
  );
};

Exceptional.storyName = "exception";