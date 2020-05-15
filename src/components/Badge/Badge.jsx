import React from "react";
import "./Badge.css";
import Box from "ui-box";

const colors = {
  red: "red",
  blue: "blue",
};

console.log(colors);

function Badge(props) {
  const badgeText = props.badgeText;
  if (!badgeText) {
    return null;
  } else {
    const newLocal = props.styleName;
    return (
      <Box {...props} className={`badge ${newLocal}`}>
        {props.badgeText}
      </Box>
    );
  }
}

export { Badge };
