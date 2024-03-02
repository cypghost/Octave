import React, { useState, useRef } from "react";
import Icons from "../Components/Icons";
import { Link, useLocation } from "react-router-dom";
import "../css/NowPlaying.css";

const NowPlaying = ({ artistname, musicname }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    { name: "Track 1", audio: "path/to/track1.mp3" },
    { name: "Track 2", audio: "path/to/track2.mp3" },
  ];

  const location = useLocation();
  // const history = useHistory();

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack > 0 ? prevTrack - 1 : tracks.length - 1
    );
    playCurrentTrack();
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack < tracks.length - 1 ? prevTrack + 1 : 0
    );
    playCurrentTrack();
  };

  const playCurrentTrack = () => {
    audioRef.current.src = tracks[currentTrack].audio;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="now-playing-container">
      <div className="playing">
        <div className="image-overlay">
          <Link to={location.state ? location.state.from : "/musiclist"}>
            <img
              className="return-page"
              src="/assets/expand_circle_down_white_24dp.svg"
              alt="Return to Page"
            />
          </Link>
        </div>
        <div className="text-overlay">
          <p className="artist-name">{artistname}</p>
          <p className="song-name">{musicname}</p>
        </div>
      </div>
      <div className="buttons">
        <Icons
          onPlay={handlePlay}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isPlaying={isPlaying}
        />
      </div>
      <audio ref={audioRef} src={tracks[currentTrack].audio} />
    </div>
  );
};

export default NowPlaying;
