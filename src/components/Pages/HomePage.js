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
        Hello there I’m Josh. I work on the{" "}
        <a target="blank" href="https://www.microsoft.com/design/fluent/#/">
          Fluent Design System
        </a>{" "}
        at Microsoft. In my free time I enjoy frolicking in the park with my dog
        or listening to smooth jazz.
      </h1>
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Featured Projects</h3>

      <div className="grid">
        <Card
          page="/compass-design-system"
          alt="array of UI component"
          src={Img1}
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkklEQVQ4jX2Uy49URRTGf1W37u17+znT3dMzAz0DQR1gmOERHUQkPkhYsHBlTNiY8B/4F7h3Z2JIiK5dsiDR6EZQYwIGMRh5wwwyyAwwr37dvn3f5aKhYSDxS2pzqur7zvnOqRK+H2g/CNFaYlkOURTh+wGGYdDpuFiWSbk8zDNoNFEScH1pla7nsXOizkgux48PN/jq5jJnPtzNN99d4Nrft6gXbC7+eV2rIAyRUmIqRRCGmKZFFMU4jk0ul+VlCASmsthdH0NJga0M4hiObRliV9JERgHbHcnP9x8gqmUyloXqeT02Gi10CmPjWzFNBuRJqrm32uTs5btcurfMiUO7+XhuJ0pKmmFAHGqkEJQtGyUlleFhpJQcmZuh7Xq8//Ys2yfGEE9W2to0FUJITNNECMHVlRanLs1zeblBXcHa0mO21coc2jXJZx/MkmqNl0RIASr2ydgFtBabKtZaIyUIUi2dQp7AsXjiSB4YKUL0Dze8gElLsK9aQE3UmTcynL62BNDP3lGUMhLbdkjT5AXyGK1D2q0V2q1Vlpcfon4yQpbDlEdhTOolfF4ZYrZWYuHqXdwgxK0U+eSDA4zZkoNjeeI4QimTKJZoLft9Es+zj+OQlZVVRker+L2ASqWC+nZhg7V2wKP1LhsNj5PHZpgoOJx4Zzd+FLGw0uQNK2FvzSFjGmitnxL2ieMkxQsSilnzqQsG5fIwPc+n2WwipUT98Mtd/LYHfghRzLkdI5zcv53xUo776y2O793BzoktjFdLAysB0lTz/e93eLDWYlstw0eH9j2Np7RbbUqlIlJKtNYo/+EqRBF4PVS7xcVfE07u386nR2ZeGd8XIaXA8W4hFy9z/sIVjs+dRRkKpSxMy6Lb7RLHMbZto7I3rmN3mmQ6G5RMTXlSbZqQJS/kQTdgquhQtc1NQtnsCOnkXqDG49Um9bEqUkpy2Syra2tUqxUazSbqWCHg8NE53j24n717plCGMSDxvB4dP+a1nEU5o3gZO6b28NfiOuO5UW7/c4P62Hv995WAbTv4fkKlMo7wev0Wuq5Lo9Gg2+0yNTWFlJJVP6LpB/haYwqDXUObf4A4jvn69Be4vsu/y/Oc+vLMwIH+1AkArRYW5onjmCAImZ6eRqnnGVczCjoNwuIQWf1qX5RSjNZneBjHDFXn8KKErNl3ohel+EGE57mIW7cXdZqmZDIWSZISRSHV6giFQuF/G/8Mv80/ZvHmFYKox76ZXbw1NQ3AWicijFPKptZKCAgCH8/rUq9PUCwWB+X2S09xOx2iKECZJsXi8CaRySGT++u3iIwe58/dGYiMBF2iP+6SqggFgnw+j2ladLsuruuilKJWqw38FZmUrurS0y4FSgjkQKReKZPUZmGowuFybRAXysCo5aFuo0AThhFBEJLP56jVRkmS53+RkJKNdIOCKlOMtm4SADCE4OibB1h5vEjgztP1iuSyBZKhHNenm6RpgsxkbF0slvTw8LC2bUe32y3d63ka0IAWCJ2PJ7XbzGhHdjStm4O9ZytrxNpRqXZ7nn60vPT0ntSvO1v1rJnnP/SKKD2AZe4UAAAAAElFTkSuQmCC"
          title="EagleView | Compass Design System"
          content="I was the founding UX Designer of the Compass Design System at EagleView. My toolkit consisted of Figma, React.js, Material UI, and more."
        />
        <Card
          page="/compass-design-system"
          src={Img2}
          alt="iPad view of a mobile app"
          title="Backyard App"
          content="I designed a mobile app with augmented reality to create and visualize swimming pools in backyards. The V1 was successfully shipped to the App Store."
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAACXBIWXMAAAsSAAALEgHS3X78AAACOklEQVQ4jb2Vy09TURCHv3PubW9buLalCGIozxpQwEdCUKPxz9Dwv7lwY4wuXRhJXLEQSNDEjWJCgAAGSinUltL7PMeFjw1HLSQwy8nMfJn5zZkj1jc2NOds8rwBFwaxTU6tzz5BIcT/IVprnr94yfz7JcIwbLt4Op3m4b1pZp88PgEydvLxwzJSx0gUXV0Fuvv60dFPYNX32T5q8btXAWjAQ7P8eYVZQz0jJPaaHJTLFAeKZBMBj7o9rmYUX/c9KoVBbk/NGLspLywa/UaIXSjQMz6Gyl0mlXSouw7lapnVtU3CyGV4SqHjGNFq4TWaOG4HpFIIzFoaIXK4RDxzH1tqhAq4sruK7smRS0zwab9Jc3EBHUm26gonnaE7GWJHTcJ6o32IruzgL87hq4gVbSFaDVwZ02w08HsGyeWz2Ac1Jvs6sCR4foy4VsJZ2zRCjO8kqKyy8+4pk0f7PBi6gTt0hyAR82ZpjurxN7LjI1ijA/hBCy8MSF4fJd1bON24bAm3+ksM5ovsNUKk7ZDvmeZu8QsJJ4kkJtObJ+pMgwA7kwLiU2pSU4zIKvOvn6HtKVwnQEc7RDKitV7le7lCV28BqyP5K0Oxu7VL6HntQyI7ydwaCJ3m0CvjW0WcyOKSqwmCPbZevcXNun/iBXBYrTGQ7WwfMnZzmu2aT8KS5GOF4BhEH1prOqUkrhxQr9YQQKwUtmVBHFOanDBChOnUK6VQShkT/mVSSqQ8uUtmTf4SfFa7sFN/7j/jDyBM5+fXzUh7AAAAAElFTkSuQmCC"
        />
        <Card
          page="/skeleton"
          src={Img3}
          alt="a loading screen"
          title="Fluent Design System | Skeleton"
          content="I worked with engineers, PMs, and other designers to design and deploy the Skeleton component for the Fluent Design System."
          base64="data:image/png;base64,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"
        />
        <Card
          page="/compass-design-system"
          src={Img4}
          alt="an iPhone view of a website"
          title="Microsoft | Design Systems For Figma"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAACXBIWXMAAAsSAAALEgHS3X78AAABOUlEQVQ4jd2Vu07DQBBFz3htx0nIg1eDEKKkRAiEEL8A/w0dLQhBgRJQFAIkzsNee4cCUXsjSJOp9+7ZmdG9K7c3qqy4glUD1gsSVh1QVay1vI8K5lmIzZUwFNrtgJ0tg4j8HeKcYzgcYuoxl+ddBgNHpw1vrymqHTwY1RAAay13TzP6eYqrG6IyZpwKF00ftee4VJX5xwgZK+kgY7u2j2YJZaIYU92K1+JFBEqLaEA2meJyQ1CGXgDwHBfAJJ3zcJ+wsHsUcYdkcwq7flpviDGGJOrT6iZEsSP78lzIMpDrq2POTkGCCBGh32vwOfLTLmVGeXymaQy1WryMrLqTX7PlhSJHJ+ShI88W5DZAxO+NUpXCzjnSNOWlN6Mowh/zSUBro8bhQcPL8ZUQrfgJ/iVWfC6pqvWJ+m9tMXpZdvZdowAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export default HomePage;
