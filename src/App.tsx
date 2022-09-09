import { DateTime } from "luxon";
import Datepicker from "./components/Datepicker/Datepicker";

import "./styles.css";

export default function App() {
  // const [date, setDate] = React.useState(parseDate("2002-09-02"));

  const date = DateTime.now().toLocaleString();

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <Datepicker date={date} onChange={handleChange} />
    </div>
  );
}
