import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h1> Inside Voice</h1>
        </Link>
        <div>
          <Link to="/account-settings">Account Settings</Link>
          <Link to="/create-playlist">Create Playlist</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign In</Link>
          <Link to="/help">Help</Link>
        </div>
      </header>
      <div>
        <input type="text" id="search-bar" />
        <input type="button" id="search-button" value="Search" />
      </div>
      <h1>Songs You May Like</h1>
      <img
        alt="album cover"
        src="https://headlineplanet.com/home/wp-content/uploads/2021/01/Olivia-Rodrigo-Drivers-License-758x758.jpg"
      />
    </>
  );
};

export default Home;
