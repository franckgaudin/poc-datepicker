import * as React from 'react';
import { DateTime } from "luxon";
import Datepicker from "./components/Datepicker/Datepicker";

import "./styles.css";

export default function App() {
  const [date, setDate] = React.useState(DateTime.now());

  const handleChange = (date) => {
    setDate(DateTime.fromJSDate(date));
  }

  return (
    <div className="App">
      <div className="datepicker__wrapper">
        <Datepicker date={date} onChange={handleChange} />
        <p>{`selected date: ${date.toLocaleString()}`}</p>
      </div>
    </div>
  );
}
