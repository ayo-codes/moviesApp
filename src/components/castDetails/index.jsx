import React from "react";
import Typography from "@mui/material/Typography";

const CastDetails = ({ person }) => {
  console.log(person);

  return (
    <>
      <Typography variant="p" component="p">
        Overview -This is coming from the return statement of the CastDetails
      </Typography>
      <Typography variant="h2" component="h3">
        {person.name}
      </Typography>
      <Typography variant="h6" component="h3">
        a.k.a{person.also_known_as}
      </Typography>
      <br/>
      <Typography variant="body1" component="p">
        {person.biography}
      </Typography>
    </>
  );
};

export default CastDetails;
