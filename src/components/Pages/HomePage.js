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
        my Corgi.
      </h1>
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Featured Projects</h3>

      <div className="grid">
        <Card
          image={Img1}
          title="Compass Design System"
          content="I was the founding UX Designer of the Compass Design System at EagleView. My toolkit consisted of Figma, React.js, Material UI, and more."
        />
        <Card
          image={Img2}
          title="Backyard App"
          content="I designed a mobile app with augmented reality to create and visualize swimming pools in backyards. The V1 was successfully shipped to the App Store."
        />
        <Card
          image={Img3}
          title="Fairworlds.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Img4}
          title="Kimweed.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
    </div>
  );
};

export default HomePage;
