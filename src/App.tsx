import * as React from "react";
import { DateTime } from "luxon";
import Datepicker from "./components/Datepicker/Datepicker";
import Settings from "./components/Settings/Settings";

import "./styles.css";

export default function App() {
  const now = DateTime.now();
  const local = DateTime.local();
  const rezoned = local.setZone("utc");

  const apiDate = rezoned;

  //   const dt = DateTime.now();

  const [date, setDate] = React.useState(apiDate.toString());

  const isoDate = DateTime.fromISO(date);
  //   const time = isoDate.toObject();

  const handleChange = (date) => {
    setDate(date);
  };

  console.log("selected date", date);

  return (
    <div className="App">
      <div className="poc-picker">
        <Datepicker date={date} onChange={handleChange} />
      </div>
      <Settings date={date} setDate={setDate} />
    </div>
  );
}
