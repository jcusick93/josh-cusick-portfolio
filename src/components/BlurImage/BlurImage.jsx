import React from "react";
import "./BlurImage.css";
import Box from "ui-box";

const preloadImageWithPromise = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve();
    };

    image.src = src;
  });
};

export default class BlurImage extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    this.loadImage();
  }

  loadImage = async () => {
    await preloadImageWithPromise(this.props.src);
    this.setState({ loaded: true });
  };

  render() {
    const { src, base64 } = this.props;
    const { loaded } = this.state;
    const currentSrc = loaded ? src : base64;

    return (
      <Box
        is="img"
        className="blur-image"
        {...this.props}
        alt={this.props.alt}
        src={currentSrc}
      />
    );
  }
}
