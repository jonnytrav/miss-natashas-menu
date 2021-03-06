import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  // const [tab, setTab] = useState(0);

  // const handleChange = (event, value) => {
  //   setTab(value);
  // };

  return (
    <div className="border border-purple-800 w-100 h-64 mx-auto pt-10 bg-cookies bg-cover bg-center relative z-0">
      <div className="flex flex-row justify-center">
        <h1 className="text-5xl text-white font-thick-cursive mx-auto">
          Miss Tasha's Menu
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="/home"
          // *********** look into "active" utility class later *************
          className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400 shadow-lg"
        >
          <a>Home</a>
        </Link>
        <Link
          to="/menu"
          className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400 shadow-lg"
        >
          <a>Menu</a>
        </Link>
        <Link
          to="/social"
          className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400 shadow-lg"
        >
          <a>Social Media</a>
        </Link>
        <Link
          to="/gallery"
          className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400 shadow-lg"
        >
          <a>Gallery</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
