import React from "react";
import { useViewportSize } from "./hooks/useViewportSize";

const ViewportSize = (props) => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};

export default ViewportSize;
