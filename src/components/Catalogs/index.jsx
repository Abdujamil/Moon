import React from "react";
import classes from "./index.module.scss";
import Advantage from "../../images/advantage-icon-1 1.png";
import Advantage2 from "../../images/advantage-icon-2 1.png";
import Advantage3 from "../../images/advantage-icon-3 1.png";
import Advantage4 from "../../images/advantage-icon-4 1.png";

export default function Catalog() {
  return (
    <div className={classes.catalog}>
      <div className={classes.catalogs}>
        <div className={classes.catalog1}>
          <img src={Advantage} alt="Advantage" />
          <p>Comfortable rockets of domestic production.</p>
        </div>
        <div className={classes.catalog2}>
          <img src={Advantage2} alt="Advantage2" />
          <p>Delicious and healthy space food on board.</p>
        </div>
        <div className={classes.catalog3}>
          <img src={Advantage3} alt="Advantage3" />
          <p>The entire staff of pilots consists of former astronauts.</p>
        </div>
        <div className={classes.catalog4}>
          <img src={Advantage4} alt="Advantage4" />
          <p>
            Excursions on a moon rover to the Sea of ​​Clarity and the Ocean of
            Storms.
          </p>
        </div>
      </div>
    </div>
  );
}
