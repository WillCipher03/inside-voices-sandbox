import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
