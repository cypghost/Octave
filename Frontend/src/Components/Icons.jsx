import React from "react";
import PropTypes from "prop-types";
import Player from "../Components/Player";
import "../css/Icons.css";

const Icons = ({ onPrevious, onNext, isPlaying }) => {
  return (
    <div className="icons-container">
      <Player onClick={onPrevious} source="/assets/icons8-previous-16.png" />
      <Player onClick="play" isPlaying={isPlaying} />
      <Player onClick={onNext} source="/assets/icons8-forward-16.png" />
    </div>
  );
};

Icons.propTypes = {
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default Icons;
