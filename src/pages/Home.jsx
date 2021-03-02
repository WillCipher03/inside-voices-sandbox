import React from "react";
import AlbumDisplay from "../components/AlbumDisplay";
const Home = () => {
  return (
    <>
      <div>
        <input type="text" id="search-bar" />
        <input type="button" id="search-button" value="Search" />
      </div>
      <AlbumDisplay />
     
    </>
  );
};

export default Home;
