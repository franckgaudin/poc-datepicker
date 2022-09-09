import * as React from "react";
import { useCalendarCell } from "react-aria";

const CalendarCell = ({ state, date }) => {
  let ref = React.useRef<HTMLDivElement>(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable} ? 'unavailable': ''}`}
      >
        {formattedDate}
      </div>
    </td>
  );
};

export default CalendarCell;
