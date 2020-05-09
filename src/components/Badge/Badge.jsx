import React from "react";
import "./Badge.css";
import Box from "ui-box";

function Badge(props) {
  const badgeText = props.badgeText;

  if (!badgeText) {
    return null;
  } else {
    return (
      <Box {...props} className="badge">
        {props.badgeText}
      </Box>
    );
  }
}

export { Badge };
