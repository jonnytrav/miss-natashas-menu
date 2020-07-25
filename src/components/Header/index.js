import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Header = props => {
  // const [tab, setTab] = useState(0);

  // const handleChange = (event, value) => {
  //   setTab(value);
  // };

  return (
    <div className="">
      <ul>
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
