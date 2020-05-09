import React from "react";
import "./Image.css";
import Box from "ui-box";

const Image = (props) => (
  <Box
    {...props}
    className="image"
    style={{ backgroundImage: `url(${props.image})` }}
  />
);

export default Image;
