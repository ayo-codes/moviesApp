import React from "react";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { excerpt } from "../../util";
import { MoviesContext } from "../../contexts/moviesContext";
import { Typography } from "@mui/material";

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function FantasyMovieList({ movie }) {
  const { myFantasyMovies } = useContext(MoviesContext);

  

  return (
    <>
      {myFantasyMovies.length != 0 ? (
        <>
          <Typography margin={5} variant="h3">
            List of Fantasy Movies
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={styles.table} aria-label="fantasy movies table">
              <TableHead align="center">
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Overview</TableCell>
                  <TableCell align="center">More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myFantasyMovies.map((fantasyMovie) => (
                  <TableRow key={fantasyMovie.id}>
                    <TableCell align="center" component="th" scope="row">
                      {fantasyMovie.title}
                    </TableCell>
                    <TableCell align="center">
                      {excerpt(fantasyMovie.overview)}
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/fantasymovie/${fantasyMovie.id}`}
                        state={{
                          fantasyMovie: fantasyMovie,
                        }}
                      >
                        Full Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
}
