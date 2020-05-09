import React from "react";
import Image from "../Image/Image";
import { Badge } from "../Badge/Badge";

const placeHolder =
  "https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const CompassDesignSystem = () => {
  return (
    <div>
      <Badge marginTop={32} badgeText="design system" />
      <h1>Compass Design System</h1>
      <Image height="44vh" image={placeHolder} />
      <h2>Heading h2</h2>

      <p className="body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Image height="40vh" image={placeHolder} marginTop={32} />
      <h2>Heading h2</h2>

      <p className="body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default CompassDesignSystem;
