import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItens from "../NavigationItens/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItens></NavigationItens>
    </nav>
  </header>
);

export default toolbar;
