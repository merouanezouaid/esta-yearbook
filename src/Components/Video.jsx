import React from "react";
import PropTypes from "prop-types";

const Video = ({ embedId }) => (
  <div className="flex content-center">
    <iframe
      width="853"
      height="500"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video;