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
          styleName="badge-orange"
          image={Img1}
          badgeText="Design System"
          title="Compass Design System"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Img2}
          styleName="badge-pink"
          badgeText="Mobile App"
          title="Backyard App"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Img3}
          styleName="badge-green"
          badgeText="Website"
          title="Fairworlds.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Img4}
          styleName="badge-green"
          badgeText="Website"
          title="Kimweed.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
    </div>
  );
};

export default HomePage;
