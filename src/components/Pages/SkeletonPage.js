import React from "react";
import Img1 from "../../Images/project-img-01.png";
import ImageContainer from "../ImageContainer/ImageContainer";

const Skeleton = () => {
  return (
    <div>
      <ImageContainer src={Img1} alt="array of UI components" />
      <h1 style={{ marginTop: 32, marginBottom: 16 }}>
        EagleView | Compass Design System
      </h1>

      <p>
        From 2019-2020 I was the lead UX Designer on the Compass Design System
        at{" "}
        <a target="blank" href="https://www.eagleview.com/">
          EagleView
        </a>
        . I collaborated with multiple designers, engineers, and PMs on several
        applications ranging from native mobile to web apps. I led the birth of
        this system from conception to launch. Throughout my research I
        determined that we should leverage Google's{" "}
        <a target="blank" href="https://material.io/">
          Material Design System
        </a>{" "}
        for our guiding principles and fork{" "}
        <a target="blank" href="https://material-ui.com/">
          Material UI's
        </a>{" "}
        repo to provide us initial velocity and out of the box components. V1 of
        the Compass Design System included exclusively React web components.
        Within 3 months post-launch of the design system, engineering and design
        teams were reporting as much as a{" "}
        <span className="italicized">
          50% uptick in productivity and sprint velocity.
        </span>
      </p>
    </div>
  );
};

export default Skeleton;
