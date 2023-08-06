import React from 'react'
import MovieCastList from '../components/movieCastList'
import SampleCastList from './sampleCastList';

export default {
  title: "Movie Details Page/ MovieCastList",
  component: MovieCastList,

};

export const Basic = () => < MovieCastList moviecast={SampleCastList} />;

Basic.storyName = "Default";
