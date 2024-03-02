// PlaylistItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/PlaylistItem.css";

const PlaylistItem = (props) => {
  const { songs } = props;

  return (
    <div className="music-list-container">
      <ul className="song-list">
        {songs.map((song, index) => (
          <li key={index} className="song-item">
            <Link to="/now-playing">
              <img
                src={song.albumCover}
                alt={song.title}
                className="album-cover"
              />
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="artist">{song.artist}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PlaylistItem.propTypes = {
  songs: PropTypes.array.isRequired,
};

export default PlaylistItem;
