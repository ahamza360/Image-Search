import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  render() {
    const { description, urls, links } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={links.download} target="_blank" rel="noopener noreferrer">
          <img
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
            className="ui segment"
          />
        </a>
      </div>
    );
  }
}

export default ImageCard;
