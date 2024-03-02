import React from "react";
import "../css/Header.css";

const Header = ({ isLoggedIn, userAvatar }) => {
  const redirectToSpotify = () => {
    window.location.href = "https://www.spotify.com/";
  };

  return (
    <div className="header-container">
      <img
        className="logo"
        src="/Octave.svg"
        alt="Octave"
      />
      {isLoggedIn && userAvatar && (
        <img
          src={userAvatar}
          alt="User Avatar"
          className="user-avatar"
          onClick={redirectToSpotify}
        />
      )}
    </div>
  );
};

export default Header;
