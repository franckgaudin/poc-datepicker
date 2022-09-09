import * as React from "react";
import { useButton } from "react-aria";

const Button = (props) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
};

export default Button;
