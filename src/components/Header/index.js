import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  // const [tab, setTab] = useState(0);

  // const handleChange = (event, value) => {
  //   setTab(value);
  // };

  return (
    <div>
      <div className="w-2/3 mx-auto pt-4 bg-crinkled bg-cover bg-center">
        <ul className="flex flex-row justify-center">
          <Link
            to="/home"
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2"
          >
            <a>Home</a>
          </Link>

          <Link
            to="/menu"
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2"
          >
            <a>Menu</a>
          </Link>
          <Link
            to="/about"
            className="rounded-md border border-purple-800 text-white mx-10 my-10 px-2 py-2"
          >
            <a>About</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
