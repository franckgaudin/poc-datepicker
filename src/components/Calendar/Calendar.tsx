import * as React from "react";
import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { GregorianCalendar } from "@internationalized/date";

import CalendarGrid from "./CalendarGrid";
import Button from "./CalendarButton";

import "./calendar.css";

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

const Calendar = (props) => {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  let ref = React.useRef<HTMLDivElement>(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="calendar__header">
        <h2 className="calendar__title">{title}</h2>
        <Button {...prevButtonProps} className="calendar__nav">
          &lt;
        </Button>
        <Button {...nextButtonProps} className="calendar__nav">
          &gt;
        </Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
};

export default Calendar;
