import React from "react";
import "./Section.css";
import Box from "ui-box";

const Section = (props) => (
  <Box is="section" {...props} className="section">
    {props.children}
  </Box>
);

export default Section;
