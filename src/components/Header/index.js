import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const Header = props => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, value) => {
    setTab(value);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={tab} position="static" onChange={handleChange}>
          <Tab label="Home" component={Link} to="/0" />
          <Tab label="Menu" component={Link} to="/1" />
          <Tab label="About" component={Link} to="/2" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Header;
