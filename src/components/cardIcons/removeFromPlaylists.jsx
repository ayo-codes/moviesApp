import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const RemoveFromPlaylistsIcon = ({ movie }) => {
  return (
    <IconButton
    aria-label="remove from favorites"
    // onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
  );
};

export default  RemoveFromPlaylistsIcon;