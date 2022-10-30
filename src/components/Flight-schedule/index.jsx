import React from "react";
import fl from "./index.module.scss";

export default function Flight() {
  return (
    <div className={fl.timeAir}>
      <div className={fl.airText}>
        <h2>Flight schedule</h2>
        <p>
          For your convenience, we have developed a flight schedule with
          departures from Moscow and St. Petersburg. You can also request an
          <a href="/google.com"> individual flight.</a>
        </p>
      </div>
      <div className={fl.table}>
        <table>
          <tr>
            <th>№ Рейса</th>
            <th>Откуда-куда</th>
            <th>Время вылета</th>
            <th>Время прилета</th>
          </tr>
          <tbody>
            <tr>
              <td>1635</td>
              <td>VKO-MOON</td>
              <td>00:45</td>
              <td>23:15</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>70200</td>
              <td>LED-MOON</td>
              <td>17:30</td>
              <td>16:20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
