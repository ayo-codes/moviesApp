import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../reviewForm/styles";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const SearchForm = (props) => {
  const defaultValues = {
    year: "",
    withCast: "",
    voteAverageGte: "",
    voteAverageLte: "",
  };

  // const location = useLocation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);

  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [withCast, setWithCast] = useState("");
  const [voteAverageGte, setVoteAverageGte] = useState("");
  const [voteAverageLte, setVoteAverageLte] = useState("");



  const onSubmit = (searchMulti) => {
    console.log("submitted");
    searchMulti.id = uuidv4();
    setYear(searchMulti.year)
    setWithCast(searchMulti.withCast)
    setVoteAverageGte(searchMulti.setVoteAverageGte);
    setVoteAverageLte(searchMulti.setVoteAverageLte);
    console.log(searchMulti);
    navigate("/movies/searchresults", {
      state : {
        searchMulti
      }
    }   
    )    
    reset({
      year: "",
      withCast: "",
      voteAverageGte: "",
      voteAverageLte: "",
    });
 


  };
  return (
    <Box component="div" sx={styles.root2}>
      <Typography component="h2" variant="h3">
        Refine Your Discovery Movie Search
      </Typography>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="year"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              type="number"
              margin="normal"
              onChange={onChange}
              value={value}
              id="year"
              label="Search By Year"
              helperText="Enter a year"
              autoFocus
            />
          )}
        />
        {errors.year && (
          <Typography variant="h6" component="p">
            {errors.year.message}
          </Typography>
        )}
        <br />
        <Controller
          name="withCast"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              onChange={onChange}
              value={value}
              id="withCast"
              label="Search Cast Members"
              autoFocus
            />
          )}
        />
        {errors.withCast && (
          <Typography variant="h6" component="p">
            {errors.withCast.message}
          </Typography>
        )}
        <br />
        <Controller
          name="voteAverageGte"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              type="number"
              variant="outlined"
              margin="normal"
              onChange={onChange}
              value={value}
              id="voteAverageGte"
              label="Movies with vote Averages greater than"
              autoFocus
            />
          )}
        />
        {errors.voteAverageGte && (
          <Typography variant="h6" component="p">
            {errors.voteAverageGte.message}
          </Typography>
        )}

        <br />
        <Controller
          name="voteAverageLte"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              type="number"
              variant="outlined"
              margin="normal"
              onChange={onChange}
              value={value}
              id="voteAverageLte"
              label="Movies with vote Averages Less than"
              autoFocus
            />
          )}
        />

        {errors.voteAverageLte && (
          <Typography variant="h6" component="p">
            {errors.voteAverageLte.message}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
            onClick={() => {
              onSubmit;

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
                year: "",
                withCast: "",
                voteAverageGte: "",
                voteAverageLte: "",
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

export default SearchForm;
