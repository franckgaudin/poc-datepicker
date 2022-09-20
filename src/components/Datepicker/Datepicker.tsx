import * as React from 'react';
import { getLocalTimeZone, now, parseAbsoluteToLocal, CalendarDateTime } from "@internationalized/date";

import Calendar from "../Calendar/Calendar";

interface DatepickerProps {
  date: string;
  onChange?: (event: string) => void;
}

const Datepicker = (props: DatepickerProps) => {
  const { date, onChange } = props;

  const formattedDate = parseAbsoluteToLocal(date);
  let [value, setValue] = React.useState(formattedDate);

  const handleChange = (data) => {
    let { year, month, day } = data;

    setValue(data);

    if(onChange) {
      let { hour, minute, second, millisecond} = now(getLocalTimeZone());
      let date = new CalendarDateTime(year, month, day, hour, minute, second, millisecond);
      let dateToLocalTimeZone = date.toDate(getLocalTimeZone());

      onChange(dateToLocalTimeZone.toISOString());
    }
  }

  return (
    <Calendar
      aria-label="Event date"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Datepicker;
