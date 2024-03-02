import React from "react";
import PropTypes from "prop-types";
import '../css/Player.css';

const Player = ({ onClick, source, isPlaying }) => {
  if (onClick === "play") {
    return (
      <button className="button-10" onClick={onClick}>
        {isPlaying ? <img src="/assets/icons8-pause-16.png" alt="Pause" /> : <img src="/assets/icons8-play-16.png" alt="Play" />}
      </button>
    );
  }

  return (
    <button className="button-10"  onClick={onClick}>
      <img src={source} alt="Icon" />
    </button>
  );
};

Player.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  source: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default Player;
