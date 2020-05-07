import React from "react";
import { Card } from "../Card/Card";
import Img1 from "../../Images/project-img-01.png";
import Img2 from "../../Images/project-img-02.png";
import Img3 from "../../Images/project-img-03.png";
import Img4 from "../../Images/project-img-04.png";

const HomePage = () => {
  return (
    <div>
      <h1>
        hello there i’m josh, a ux designer at{" "}
        <span className="msft">microsoft</span>. i build design systems & i love
        my corgi.
      </h1>
      <h3 style={{ marginTop: 64 }}>featured projects</h3>
      <div className="grid">
        <Card
          image={Img1}
          badgeText="Design System"
          title="Compass Design System"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          link="read case study"
        />
        <Card
          image={Img2}
          badgeText="Mobile App"
          title="Backyard App"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          link="read case study"
        />
        <Card
          image={Img3}
          badgeText="Website"
          title="Fairworlds.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          link="see website"
        />
        <Card
          image={Img4}
          badgeText="Website"
          title="Kimweed.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          link="see website"
        />
      </div>
    </div>
  );
};

export default HomePage;
