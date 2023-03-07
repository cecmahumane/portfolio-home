import React from "react";
import PropTypes from "prop-types";
 
const MobileYoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="380"
      height="237"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      modestbranding='1'
    />
  </div>
);
 
MobileYoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
 
export default MobileYoutubeEmbed;