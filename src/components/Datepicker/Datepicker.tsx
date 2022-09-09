import { parseDate } from "@internationalized/date";

import Calendar from "../Calendar/Calendar";

interface DatepickerProps {
  date: string;
  onChange?: (event: any) => void;
}

const Datepicker = (props: DatepickerProps) => {
  const { date, onChange } = props;

  return (
    <Calendar
      aria-label="Event date"
      value={parseDate(date)}
      onChange={onChange}
    />
  );
};

export default Datepicker;
