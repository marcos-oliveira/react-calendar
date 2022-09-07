import moment from "moment";
import PropTypes from "prop-types";
import { DAY_FORMAT } from "../../../shared/constants";
import Reminder from "../../Calendar/Reminder/Reminder";
import './ExpandedDay.css';

const propTypes = {
  value: PropTypes.instanceOf(moment),
  onClickReminder: PropTypes.func,
  onHideMoreReminders: PropTypes.func,
};

function ExpandedDay(props) {
  const { value, reminders } = props;
  return (
    <div className="ExpandedDay">
      {value.format(DAY_FORMAT)}
      {reminders
        .filter((rem) => rem.date.format(DAY_FORMAT) === value.format(DAY_FORMAT))
        .sort((a, b) => (a.date.isAfter(b.date) ? 1 : -1))
        .map((reminder) => (
          <Reminder
            reminder={reminder}
            onClick={(e) => props.onClickReminder(reminder.id)}
          />
        ))}
    </div>
  );
}

ExpandedDay.propTypes = propTypes;
export default ExpandedDay;
