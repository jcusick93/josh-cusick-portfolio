import React from "react";
import "./Badge.css";
import Box from "ui-box";

const badgeType = {
  default: "badge-primary",
  website: "badge-website",
  mobileApp: "badge-mobile-app",
  designSystem: "badge-design-system",
};

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

// const Badge = (props) => (
//   <Box {...props} className="badge">
//     {props.badgeText}
//   </Box>
// );

export { Badge };
