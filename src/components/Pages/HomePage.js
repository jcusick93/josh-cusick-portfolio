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
          alt="array of UI component"
          src={Img1}
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkklEQVQ4jX2Uy49URRTGf1W37u17+znT3dMzAz0DQR1gmOERHUQkPkhYsHBlTNiY8B/4F7h3Z2JIiK5dsiDR6EZQYwIGMRh5wwwyyAwwr37dvn3f5aKhYSDxS2pzqur7zvnOqRK+H2g/CNFaYlkOURTh+wGGYdDpuFiWSbk8zDNoNFEScH1pla7nsXOizkgux48PN/jq5jJnPtzNN99d4Nrft6gXbC7+eV2rIAyRUmIqRRCGmKZFFMU4jk0ul+VlCASmsthdH0NJga0M4hiObRliV9JERgHbHcnP9x8gqmUyloXqeT02Gi10CmPjWzFNBuRJqrm32uTs5btcurfMiUO7+XhuJ0pKmmFAHGqkEJQtGyUlleFhpJQcmZuh7Xq8//Ys2yfGEE9W2to0FUJITNNECMHVlRanLs1zeblBXcHa0mO21coc2jXJZx/MkmqNl0RIASr2ydgFtBabKtZaIyUIUi2dQp7AsXjiSB4YKUL0Dze8gElLsK9aQE3UmTcynL62BNDP3lGUMhLbdkjT5AXyGK1D2q0V2q1Vlpcfon4yQpbDlEdhTOolfF4ZYrZWYuHqXdwgxK0U+eSDA4zZkoNjeeI4QimTKJZoLft9Es+zj+OQlZVVRker+L2ASqWC+nZhg7V2wKP1LhsNj5PHZpgoOJx4Zzd+FLGw0uQNK2FvzSFjGmitnxL2ieMkxQsSilnzqQsG5fIwPc+n2WwipUT98Mtd/LYHfghRzLkdI5zcv53xUo776y2O793BzoktjFdLAysB0lTz/e93eLDWYlstw0eH9j2Np7RbbUqlIlJKtNYo/+EqRBF4PVS7xcVfE07u386nR2ZeGd8XIaXA8W4hFy9z/sIVjs+dRRkKpSxMy6Lb7RLHMbZto7I3rmN3mmQ6G5RMTXlSbZqQJS/kQTdgquhQtc1NQtnsCOnkXqDG49Um9bEqUkpy2Syra2tUqxUazSbqWCHg8NE53j24n717plCGMSDxvB4dP+a1nEU5o3gZO6b28NfiOuO5UW7/c4P62Hv995WAbTv4fkKlMo7wev0Wuq5Lo9Gg2+0yNTWFlJJVP6LpB/haYwqDXUObf4A4jvn69Be4vsu/y/Oc+vLMwIH+1AkArRYW5onjmCAImZ6eRqnnGVczCjoNwuIQWf1qX5RSjNZneBjHDFXn8KKErNl3ohel+EGE57mIW7cXdZqmZDIWSZISRSHV6giFQuF/G/8Mv80/ZvHmFYKox76ZXbw1NQ3AWicijFPKptZKCAgCH8/rUq9PUCwWB+X2S09xOx2iKECZJsXi8CaRySGT++u3iIwe58/dGYiMBF2iP+6SqggFgnw+j2ladLsuruuilKJWqw38FZmUrurS0y4FSgjkQKReKZPUZmGowuFybRAXysCo5aFuo0AThhFBEJLP56jVRkmS53+RkJKNdIOCKlOMtm4SADCE4OibB1h5vEjgztP1iuSyBZKhHNenm6RpgsxkbF0slvTw8LC2bUe32y3d63ka0IAWCJ2PJ7XbzGhHdjStm4O9ZytrxNpRqXZ7nn60vPT0ntSvO1v1rJnnP/SKKD2AZe4UAAAAAElFTkSuQmCC"
          title="Compass Design System"
          content="I was the founding UX Designer of the Compass Design System at EagleView. My toolkit consisted of Figma, React.js, Material UI, and more."
        />
        <Card
          src={Img2}
          alt="iPad view of a mobile app"
          title="Backyard App"
          content="I designed a mobile app with augmented reality to create and visualize swimming pools in backyards. The V1 was successfully shipped to the App Store."
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAACXBIWXMAAAsSAAALEgHS3X78AAACOklEQVQ4jb2Vy09TURCHv3PubW9buLalCGIozxpQwEdCUKPxz9Dwv7lwY4wuXRhJXLEQSNDEjWJCgAAGSinUltL7PMeFjw1HLSQwy8nMfJn5zZkj1jc2NOds8rwBFwaxTU6tzz5BIcT/IVprnr94yfz7JcIwbLt4Op3m4b1pZp88PgEydvLxwzJSx0gUXV0Fuvv60dFPYNX32T5q8btXAWjAQ7P8eYVZQz0jJPaaHJTLFAeKZBMBj7o9rmYUX/c9KoVBbk/NGLspLywa/UaIXSjQMz6Gyl0mlXSouw7lapnVtU3CyGV4SqHjGNFq4TWaOG4HpFIIzFoaIXK4RDxzH1tqhAq4sruK7smRS0zwab9Jc3EBHUm26gonnaE7GWJHTcJ6o32IruzgL87hq4gVbSFaDVwZ02w08HsGyeWz2Ac1Jvs6sCR4foy4VsJZ2zRCjO8kqKyy8+4pk0f7PBi6gTt0hyAR82ZpjurxN7LjI1ijA/hBCy8MSF4fJd1bON24bAm3+ksM5ovsNUKk7ZDvmeZu8QsJJ4kkJtObJ+pMgwA7kwLiU2pSU4zIKvOvn6HtKVwnQEc7RDKitV7le7lCV28BqyP5K0Oxu7VL6HntQyI7ydwaCJ3m0CvjW0WcyOKSqwmCPbZevcXNun/iBXBYrTGQ7WwfMnZzmu2aT8KS5GOF4BhEH1prOqUkrhxQr9YQQKwUtmVBHFOanDBChOnUK6VQShkT/mVSSqQ8uUtmTf4SfFa7sFN/7j/jDyBM5+fXzUh7AAAAAElFTkSuQmCC"
        />
        <Card
          src={Img3}
          alt="a laptop view of a website"
          title="Fairworlds.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVRIie2Uu0oDQRSGv9kZiOKKom4uagIhkNo3sA2IpWDpa4ilj2BrZ2cpXipJYSuI2oUkooEkm8LCSy57GwttAprdJQRE/Ms5c/7vnDnDEa2zA82EZUwa8A/5nRD1U+DRfua4fIMmyucTbK2vkc8sxoPc15uUtnewFuaZNs2hmO8HCCHgq4Bms8Xd1Wl8CEA6nSSXy35elBLD+P51g0BTHeEzEgJQf3gCAYEfsLqSYUa7vHUcyrfXyCnJ5kYpzCJ88Eopet0+fhDw3u2hew7ui+by/IJqrYbW4TML7aSQz+F5HkIIpJSAwJzrs7u/hzlrhqVHgziOi1IS13UBkFJiGBLLspDSYDBwxoO07Q6JRCLUpG3b8SGVhs1rt8/J0eHQued5aK0RQqDUcGpheYlKo0Mxm4wGKWZTFLOp0eXH0N/ZXX8HoiDSmh1LH/eFaN+LL7+JAAAAAElFTkSuQmCC"
        />
        <Card
          src={Img4}
          alt="an iPhone view of a website"
          title="Kimweed.com"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAACXBIWXMAAAsSAAALEgHS3X78AAABOUlEQVQ4jd2Vu07DQBBFz3htx0nIg1eDEKKkRAiEEL8A/w0dLQhBgRJQFAIkzsNee4cCUXsjSJOp9+7ZmdG9K7c3qqy4glUD1gsSVh1QVay1vI8K5lmIzZUwFNrtgJ0tg4j8HeKcYzgcYuoxl+ddBgNHpw1vrymqHTwY1RAAay13TzP6eYqrG6IyZpwKF00ftee4VJX5xwgZK+kgY7u2j2YJZaIYU92K1+JFBEqLaEA2meJyQ1CGXgDwHBfAJJ3zcJ+wsHsUcYdkcwq7flpviDGGJOrT6iZEsSP78lzIMpDrq2POTkGCCBGh32vwOfLTLmVGeXymaQy1WryMrLqTX7PlhSJHJ+ShI88W5DZAxO+NUpXCzjnSNOWlN6Mowh/zSUBro8bhQcPL8ZUQrfgJ/iVWfC6pqvWJ+m9tMXpZdvZdowAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export default HomePage;
