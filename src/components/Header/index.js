import React, { useState } from "react";
import "./headerStyles.css";

const Header = props => {
  // const [tab, setTab] = useState(0);

  // const handleChange = (event, value) => {
  //   setTab(value);
  // };

  return (
    <div className="">
      <ul className="flex flex-row justify-center">
        <li className="mx-10 my-10 px-2 py-2 rounded-md border border-purple-800 text-white">
          <a>Home</a>
        </li>
        <li className="mx-10 my-10 px-2 py-2 rounded-md border border-purple-800 text-white">
          <a>Menu</a>
        </li>
        <li className="mx-10 my-10 px-2 py-2 rounded-md border border-purple-800 text-white">
          <a>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
