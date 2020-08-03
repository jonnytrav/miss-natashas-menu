import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  // const [tab, setTab] = useState(0);

  // const handleChange = (event, value) => {
  //   setTab(value);
  // };

  return (
    <div>
      <div className="border-2 border-white w-2/3 h-64 mx-auto pt-10 bg-crinkled bg-cover bg-center rounded-md relative z-0">
        <ul className="flex flex-row justify-center">
          <Link
            to="/home"
            // *********** look into "active" utility class later *************
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400"
          >
            <a>Home</a>
          </Link>

          <Link
            to="/menu"
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400"
          >
            <a>Menu</a>
          </Link>
          <Link
            to="/about"
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2 hover:border-purple-400"
          >
            <a>About</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
