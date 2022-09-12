import * as React from 'react';
import { parseDate, toCalendarDateTime, getLocalTimeZone, now,  CalendarDate, Time } from "@internationalized/date";

import Calendar from "../Calendar/Calendar";

interface DatepickerProps {
  date: any;
  onChange?: (event: any) => void;
}

const Datepicker = (props: DatepickerProps) => {
  const { date, onChange } = props;

  // The Datepicker receives a date and converts it to
  // ISO8601 format to pass it to the Calendar
  // and return date on UTC format
  const formattedDate = parseDate(date.toISODate());
  let [value, setValue] = React.useState(formattedDate);

  const handleChange = (data) => {
    setValue(data);

    if(onChange) {
      let localTime = now(getLocalTimeZone())
      let time = new Time(localTime.hour, localTime.minute, localTime.second, localTime.millisecond);

      let date = new CalendarDate(data.year, data.month, data.day);
      let selectedDate = toCalendarDateTime(date, time).toDate(getLocalTimeZone());

      onChange(selectedDate);
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
