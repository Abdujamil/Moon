import React from "react";
import classes from "./index.module.scss";

import MoonRocket from "../../images/moon-rocket 1.png";
import Logo from "../../Logo/logo.png";
import Mail from "../../Logo/mail-icon.png";
import Phone from "../../Logo/phone-icon.png";

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={classes.items}>
          <ul>
            <li>
              {" "}
              <a href="/#">Company </a>
            </li>
            <li>
              {" "}
              <a href="/#">Catalog </a>
            </li>
            <li>
              {" "}
              <a href="/#">Cantacts </a>
            </li>
          </ul>
        </div>
        <div className={classes.email}>
          <img src={Mail} alt="logo-mail" />
          <img src={Phone} alt="logo-phone" />
        </div>
        {/* <div className={classes.phone}>
        <img src={Phone} alt="logo-phone" />
      </div> */}
      </div>
      <div className={classes.home}>
        <div className={classes.text}>
          <h1>To the moon and back</h1>
          <p>
            Space cool tourism. Package and individual tours to the best planets
            in the galaxy.
          </p>
          <button className={classes.btn}>Tour selection</button>
        </div>
        <img src={MoonRocket} alt="ImageMoonAndRocket" />
      </div>
    </>
  );
}
