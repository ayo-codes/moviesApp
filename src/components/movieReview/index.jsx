import React from "react";

const MovieReview =  (props) => {
  const review = props.review;
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default MovieReview
