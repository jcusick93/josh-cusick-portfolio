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
        Hello there I’m Josh, a UX Designer at{" "}
        <span className="msft">Microsoft</span>. I build design systems & I love
        my corgi.
      </h1>
      <h3 style={{ marginTop: 64 }}>Featured Projects</h3>
      <div className="grid">
        <Card
          image={Img1}
          badgeText="Design System"
          title="Compass Design System"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          linkText="read case study"
        />
        <Card
          image={Img2}
          badgeText="Mobile App"
          title="Backyard App"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          linkText="read case study"
        />
        <Card
          image={Img3}
          badgeText="Website"
          title="Fairworlds.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          linkText="see website"
        />
        <Card
          image={Img4}
          badgeText="Website"
          title="Kimweed.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          linkText="see website"
        />
      </div>
    </div>
  );
};

export default HomePage;
