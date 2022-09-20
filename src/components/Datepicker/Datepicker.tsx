import * as React from 'react';
import { parseDate, toCalendarDateTime, getLocalTimeZone, now,  CalendarDate, Time, parseDateTime, parseAbsoluteToLocal, CalendarDateTime } from "@internationalized/date";

import Calendar from "../Calendar/Calendar";

interface DatepickerProps {
  date: any;
  onChange?: (event: any) => void;
}

const Datepicker = (props: DatepickerProps) => {
  const { date, onChange } = props;

  // console.log('date', date)
  // console.log(parseDateTime('2022-09-19T13:41:21.966'))
  // console.log(parseAbsoluteToLocal('2022-09-19T13:46:19.416-04:00'))

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
