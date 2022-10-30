import React from "react";
import classes from "./index.module.scss";
import Arrow from "../../images/right-arrow-white 1.svg";

export default function Contacts() {
  return (
    <div className={classes.contact}>
      <div className={classes.texts}>
        <h2>Ready to discover something new?</h2>
        <p>
          Submit your application by filling out the form on the right, we will
          consider your candidacy and contact you within 24 hours.
        </p>
      </div>
      <div className={classes.auth}>
        <div className={classes.aboute}>
          <input type="text" placeholder="Full name" />
          <br />
          <input type="text" placeholder="Phone" />
        </div>
        <main className={classes.wh}>
          <input type="text" placeholder="Height" />
          <input type="text" placeholder="Weight" />
        </main>
        <main className={classes.personalData}>
          <input type="checkbox" name="" id="" />
          <p>I agree to the processing of personal data</p>
        </main>
        <button>
          SEND
          <span>
            {/* <img src={Arrow} alt="arrow" /> */}
          </span>
        </button>
      </div>
    </div>
  );
}
