import React from "react";
import classes from "./index.module.scss";
import Map from "../../images/map 1.png";

export default function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.mainContent}>
        <div className={classes.img}>
          <img src={Map} alt="MapImage" />
        </div>
        <div className={classes.mainText}>
          <h3>
            Tired of flying abroad on vacation? How about flying to the moon?
          </h3>
          <p>
            Tired of package tours and beach holidays? Are the towels and
            magnets you bring back from vacation no longer making your loved
            ones happy? Bring them a real moonstone next time!
          </p>
          <p>
            We offer an innovative service in the tourism market - space tourism
            (so far only to the Moon, now we are resolving issues with the Venus
            visa center).
          </p>
          <p>Take a vacation and fly with us, it only takes 72 hours!</p>
        </div>
        <div className={classes.mainText2}>
          <h3>Don't forget to bring with you:</h3>
          <ul>
            <li>
              <p>
                {" "}
                <b>Passport.</b> The visa regime has not yet been introduced,
                but there will be inspection at the border. Will come in handy
                in low gravity conditions on the moon. Cryptocurrency. We
                recommend exchanging some Lun Coins in advance to buy souvenirs
              </p>
            </li>
            <li>
              <p>
                <b>Heavy boots.</b> Will come in handy in low gravity conditions
                on the moon. Cryptocurrency. We recommend exchanging some Lun
                Coins in advance to buy souvenirs
              </p>
            </li>
            <li>
              <p>
                <b>Cryptocurrency.</b> We recommend exchanging some Lun Coins in
                advance to buy souvenirs
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.mainText3}>
          <h3>This is best left at home:</h3>
          <ul>
            <li>
              <p>
                <b>Telephone.</b>In space, your favorite operator does not catch
                and there is no WI-FI.
              </p>
            </li>
            <li>
              <p>
                <b>Sandwiches.</b>On board there will be food that will not
                scatter around the cabin in zero gravity.
              </p>
            </li>
            <li>
              <p>
                <b>Swimming trunks/swimsuit.</b>The Sea of ​​Clarity and the
                Ocean of Storms are large craters. Without water.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
