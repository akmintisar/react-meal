import React, { Fragment } from "react";
import headerFood from "../../Assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={headerFood} alt="a table full of food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
