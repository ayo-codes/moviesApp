import React from 'react'
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {useQuery , useQueries } from "react-query";
import Spinner from '../spinner'
import { getCastImages } from '../../api/tmdb-api';

// Styles
const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

// Start of Component 
const TemplatePersonPage = ({person, children}) => {

// useQuery for caching
  const [ getPersonImageQuery  ] = useQueries([
    {
      queryKey: ['person_images', {person_id: person.id}] ,
      queryFn: getCastImages
    },
  ]);

  if (getPersonImageQuery.isLoading) {
    return <Spinner />;
  }

  if (getPersonImageQuery.isError) {
    return <h1>{getPersonImageQuery.error.message}</h1>;
  }

  console.log(getPersonImageQuery);
  const images = getPersonImageQuery.data.profiles
  console.log(images)

  return (
    <>
    <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
              {images.map((image) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
        
        <Grid item xs={9}>
        {children}
        </Grid>
      </Grid>
    <div>
      <p> This is Coming from the Template People Page </p>
      
    </div>
    </>
    

  );
};



export default TemplatePersonPage;