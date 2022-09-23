import {
  getLocalTimeZone,
  now,
  parseAbsoluteToLocal,
  ZonedDateTime,
} from "@internationalized/date";

import Calendar from "../Calendar/Calendar";

interface DatepickerProps {
  date: string;
  onChange?: (date: {utc: string, local: string}) => void;
}


const Datepicker = (props: DatepickerProps) => {
  const { date, onChange } = props;

  // the calendar receives a utc date and formats it locally
  const formattedDate = parseAbsoluteToLocal(date);

  const handleChange = (date) => {
    let { year, month, day } = date;
    let { hour, minute, second, millisecond, offset, timeZone, } = now(getLocalTimeZone());
    
    let local = new ZonedDateTime(
      year, month, day, timeZone, offset,
      minute, hour, second, millisecond
    );

    // the calendar return a object with utc, local and tzOffset
    if(onChange) {
      onChange({
        utc: local.toAbsoluteString(),
        local: local.toString(),
      })
    }
  };

  return (
    <Calendar
      aria-label="Event date"
      value={formattedDate}
      onChange={handleChange}
    />
  );
};

export default Datepicker;
