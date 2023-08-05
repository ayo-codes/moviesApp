import React from "react";
import CircularIndeterminate from "../components/spinner";

export default {
  title: "Small/CircularIndeterminate",
  component: CircularIndeterminate,
};

export const Basic = () => {
  return <CircularIndeterminate />;
};
Basic.storyName = "Default";