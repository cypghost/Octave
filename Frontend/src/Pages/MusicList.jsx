import React from "react";
import { Link } from "react-router-dom";
import PlaylistItem from "../Components/PlaylistItem";
import "../css/MusicList.css";

const MusicList = () => {
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      albumCover: "https://example.com/cover1.jpg",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      albumCover: "https://example.com/cover2.jpg",
    },
  ];

  return (
    <div className="music-parent">
      <PlaylistItem songs={songs} />
      <div className="button-88-1">
        <Link to="/search">
          <img src="/assets/search_white_24dp.svg" alt="Search" />
        </Link>
        <Link to="/now-playing">
          <img
            className="arrow"
            src="/assets/expand_circle_down_white_24dp.svg"
            alt="Now Playing"
          />
        </Link>
      </div>
    </div>
  );
};

export default MusicList;
