import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1> Inside Voice</h1>
        </Link>
        <div>
          <Link to="/create-playlist">Create Playlist</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign In</Link>
          <Link to="/help">Help</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
