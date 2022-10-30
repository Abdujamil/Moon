import React from "react";
import f from "./index.module.scss";
import Space from "../../Logo/logo.png";

export default function Footer() {
  return (
    <div className={f.footer}>
      <div className={f.icon}>
        <img src={Space} alt="IconSpace" />
        <h4>Space-Z</h4>

        <p>Cosmos «Ze LLC». All rights reserved.</p>
      </div>
      <div className={f.company}>
        <h3>Company</h3>
        <p>
          <a href="/google.com">History</a>
        </p>
        <p>
          <a href="/google.com">Mission</a>
        </p>
        <p>
          <a href="/google.com">Team</a>
        </p>
      </div>
      <div className={f.catalog}>
        <h3>Catalog</h3>

        <p>
          <a href="/google.com">Flights </a>
        </p>
        <p>
          <a href="/google.com">Accommodation </a>
        </p>
        <p>
          <a href="/google.com">Excursions</a>
        </p>
      </div>
      <div className={f.contacts}>
        <h3>Contacts</h3>

        <p><a href="/google.com">Submit request</a> </p>
        <p><a href="/google.com">Location map</a></p>
        <p><a href="/google.com">Opening hours</a></p>
      </div>
    </div>
  );
}
