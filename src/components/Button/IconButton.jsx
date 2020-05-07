import React from "react";
import "./IconButton.css";
import Box from "ui-box";

const IconButton = (props) => (
  <Box is="button" className="icon-button" {...props}>
    {props.children}
  </Box>
);

export default IconButton;
