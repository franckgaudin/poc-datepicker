import * as React from 'react';
import { DateTime } from "luxon";
import Datepicker from "./components/Datepicker/Datepicker";

import "./styles.css";

export default function App() {
  const dt = DateTime.now();
  const formatDate = {...DateTime.DATE_MED };

  const [date, setDate] = React.useState(dt.toString());

  const isoDate = DateTime.fromISO(date);
  const time = isoDate.toObject();

  const handleChange = (date) => {
    setDate(date);
  }

  return (
    <div className="App">
      <div className="datepicker__wrapper">
        <Datepicker date={date} onChange={handleChange} />
      </div>
      <div className='datepicker__info'>
        <dl>
          <dt>
            selected date
          </dt>
          <dd>
            {isoDate.toLocaleString(formatDate)}
          </dd>
          <dt>
            Heure
          </dt>
          <dd>
            {`${time.hour} : ${time.minute} : ${time.second}`}
          </dd>
          <dt>
            Timezone
          </dt>
          <dd>
            {isoDate.zoneName}
          </dd>
        </dl>
      </div>
    </div>
  );
}
