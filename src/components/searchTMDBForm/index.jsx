import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../reviewForm/styles";

const SearchForm = (props) => {
  const defaultValues = {
    year: "",
    withCast: "",
    voteAverageGte: "",
    voteAverageLte: "",
  };

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
    console.log ("submitted")

  }
  return (
    <Box>
      <Typography component="h2" variant="h3">
        Refeine Your Discovery Movie Search
      </Typography>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
          name="Year"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              type='number'
              margin="normal"
              onChange={onChange}
              value={value}
              id="year"
              label="Search By Year"
              autoFocus
            />
          )}
        />
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

<Controller
          name="voteAverageGte"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              type='number'
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

<Controller
          name="voteAverageLte"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              type='number'
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

export default SearchForm;