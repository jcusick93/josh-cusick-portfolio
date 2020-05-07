import React from "react";
import "./Image.css";
import Box from "ui-box";
// create a div and then assign a background img to it {props.image}

const Image = (props) => (
  <Box
    {...props}
    className="image"
    style={{ backgroundImage: `url(${props.image})` }}
  ></Box>
);

export default Image;
