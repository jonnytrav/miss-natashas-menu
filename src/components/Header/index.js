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
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
