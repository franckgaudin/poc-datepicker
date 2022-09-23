import * as React from "react";
import { DateTime } from "luxon";

interface SettingsProps {
  setDate?: (value: string) => void;
  date: string;
  //   time: { hour: string; minute: string; second: string };
}

const Settings = (props) => {
  const { setDate, date } = props;
  const [settingValue, setSettingValue] = React.useState("");

  const dt = DateTime.fromISO(date);
  const localDt = dt.setZone("local");

  const formatter = { ...DateTime.DATE_FULL };

  const handleSettingChange = (event) => {
    let { value } = event.target;
    setSettingValue(value);
  };

  React.useEffect(() => {
    if (settingValue !== "") {
      setDate(settingValue);
    }
  }, [settingValue]);

  //   const formatTime = (value: number) => {
  //     if (value <= 9) {
  //       return `0${value}`;
  //     }

  //     return value;
  //   };

  return (
    <div className="poc-settings">
      <h2 className="poc-settings__title">Settings</h2>
      <div>
        <pre>
          <code>
            <b>Local</b>: {localDt.toString()}
            <br />
            <b>UTC</b>: {date.toString()}
          </code>
        </pre>
      </div>
      {/* <select onChange={handleSettingChange} className="poc-select">
        <option value="">Please choose an option</option>
        <option>2022-09-04T00:00:00.00Z</option>
        <option>2022-09-22T00:00:00.00Z</option>
        <option>2022-09-30T19:50:36.156Z</option>
      </select> */}
      <hr className="poc-divider" />
      <dl className="poc-info">
        <dt>Selected date:</dt>
        <dd>{localDt.toLocaleString(formatter)}</dd>
        <dt>Heure:</dt>
        <dd>{localDt.toLocaleString(DateTime.TIME_WITH_SECONDS)}</dd>
        <dt>Timezone:</dt>
        <dd>{localDt.zoneName}</dd>
      </dl>
    </div>
  );
};

export default Settings;
